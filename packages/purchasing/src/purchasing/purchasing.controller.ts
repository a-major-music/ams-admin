import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Param,
  Post,
  Put,
  Query,
  Response,
  StreamableFile,
} from "@nestjs/common";
import { PurchaseOrder, PurchaseOrderState } from "@amm/types";
import { PurchasingService } from "./purchasing.service";
import { PrismaPurchaseOrderCreateTransformPipe } from "./prisma-purchaseorder-create.transform.pipe";
import {
  Prisma,
  PurchaseOrderLineItem,
  PurchaseOrderLineItemReceipt,
} from "../../prisma/generated/client";
import { ApiOperation, ApiParam } from "@nestjs/swagger";
import { FixJSONPipe } from "./fix-json.pipe";
import { PurchaseOrderTotalsUpdatePipe } from "./purchaseorder-totalsupdate.pipe";
import { PrismaPurchaseOrderUpdateTransformPipe } from "./prisma-purchaseorder-update.transform.pipe";
import { PurchasingPDF } from "./purchasing-pdf.service";
import { PurchasingCSV } from "./purchasing-csv.service";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { removeProps } from "../util";
import _ from "lodash";

@Controller("purchasing")
export class PurchasingController {
  constructor(
    private purchasingService: PurchasingService,
    private readonly purchasingPDF: PurchasingPDF,
    private readonly purchasingCSV: PurchasingCSV,
    private eventEmitter: EventEmitter2
  ) { }

  logger = new Logger(PurchasingController.name);

  @Get("findByPoNumber/:poNumber")
  async findByPoNumber(
    @Param("poNumber") poNumber: string
  ): Promise<PurchaseOrder> {
    return this.purchasingService.findByPoNumber(
      poNumber
    ) as unknown as PurchaseOrder;
  }

  @Get("findBySupplierGuid/:supplierGuid")
  @ApiParam({
    name: "state",
    required: false,
    description: "PO state to filter by",
    type: "PurchaseOrderState",
  })
  async findBySupplierGuid(
    @Param("supplierGuid") supplierGuid: string,
    @Query("state") state: PurchaseOrderState
  ): Promise<PurchaseOrder[]> {
    return this.purchasingService.findBySupplier(
      supplierGuid,
      state
    ) as unknown as PurchaseOrder[];
  }

  @Get()
  @ApiOperation({
    description:
      "Returns all products as array of PurchaseOrder, with deep fetch of nested objects",
  })
  @ApiParam({
    name: "skip",
    required: false,
    description: "number of records to skip",
    type: "integer",
  })
  @ApiParam({
    name: "take",
    required: false,
    description: "number of records to return",
    type: "integer",
  })
  @ApiParam({
    name: "where",
    required: false,
    description: "optional where clause",
    type: "object",
  })
  @ApiParam({
    name: "orderBy",
    required: false,
    description: "optional orderBy clause",
    type: "object",
  })
  async findAll(
    @Query("skip") skip?: number,
    @Query("take") take?: number,
    @Query("search") search?: string,
    @Query("filterModel", FixJSONPipe) filterModel?: any[],
    @Query("orderBy", FixJSONPipe)
    orderBy?: Prisma.PurchaseOrderOrderByWithRelationInput
  ): Promise<PurchaseOrder[]> {
    const params: any = {};
    if (skip) params.skip = +skip;
    if (take) {
      params.take = +take;
    } else {
      take = 10;
    }
    if (orderBy) params.orderBy = orderBy;

    params.where = this._buildWhereClause(filterModel, search);

    return this.purchasingService.findMany(
      params
    ) as unknown as PurchaseOrder[];
  }

  _buildWhereClause = (filterModel, search) => {
    // Build the filter clauses first
    const fClauses = filterModel
      ? filterModel.map((i) => {
        const j = {};
        j[i.columnField] = i.value;
        return j;
      })
      : search
        ? []
        : undefined;

    // Now build the search clauses
    const sClauses = search ? [] : undefined;

    if (sClauses) {
      sClauses.push({ number: { equals: search, mode: "insensitive" } });
      sClauses.push({
        lineItems: {
          some: { variantSku: { contains: search, mode: "insensitive" } },
        },
      });
      sClauses.push({
        lineItems: {
          some: { variantUPC: { equals: search, mode: "insensitive" } },
        },
      });
      sClauses.push({
        lineItems: {
          some: {
            variantSupplierCode: { equals: search, mode: "insensitive" },
          },
        },
      });
      sClauses.push({
        supplier: {
          name: {
            contains: search,
            mode: "insensitive",
          },
        },
      });

      // Now add the OR'd sClauses into the ANDed fClauses array, and set as our where
      fClauses.push({ OR: sClauses });
    }

    return (
      fClauses &&
      (fClauses.length === 1
        ? fClauses[0]
        : fClauses.length > 1
          ? { AND: fClauses }
          : undefined)
    );
  };

  @Get("count")
  async countPurchaseOrders(
    @Query("search") search?: string,
    @Query("filterModel", FixJSONPipe) filterModel?: any[]
  ): Promise<any> {
    const where = this._buildWhereClause(filterModel, search);

    return {
      rows: (await this.purchasingService.countPurchaseOrders(where))._count.id,
    };
  }

  @Get("receipt/findByReceiveDate")
  async findByReceiveDate(
    @Query("startDate") startDate,
    @Query("endDate") endDate
  ) {
    return this.purchasingService.searchReceipts({
      AND: [
        { date: { gte: new Date(startDate) } },
        { date: { lt: new Date(endDate) } },
      ],
    });
  }

  @Post("receipt")
  async receive(
    @Body()
    receipts: {
      poli: PurchaseOrderLineItem;
      receipt: PurchaseOrderLineItemReceipt;
    }[]
  ): Promise<any> {
    this.logger.debug(`Receiving ${receipts.length}`);
    const errorMessages: string[] = [];

    const results = await Promise.all(
      receipts.map((r) =>
        this.purchasingService.receive(r.poli.guid, r.receipt)
      )
    ).then(async () => {
      // Create a bill in Xero for each PO that had receipts
      const updateList = await Promise.all(
        receipts.map((r) => this.purchasingService.find(r.poli.purchaseOrderId))
      );

      updateList.forEach((po) => {
        this.eventEmitter.emit("goods.receipted", {
          po: po,
        });
      });
    });

    return { results: results, errorMessages: errorMessages };
  }

  @Delete("receipt")
  async deleteReceipts(
    @Body() receipts: PurchaseOrderLineItemReceipt[]
  ): Promise<any> {
    const errorMessages: string[] = [];

    const results = await Promise.all(
      receipts.map((r) =>
        this.purchasingService.deleteReceipt(r.guid).catch((e) => {
          errorMessages.push(e.toString());
        })
      )
    );

    return { results: results, errorMessages: errorMessages };
  }

  @Delete("receipt/:guid")
  async receipt(
    @Param("guid") guid: string
  ): Promise<PurchaseOrderLineItemReceipt> {
    return this.purchasingService.deleteReceipt(guid).catch((e) => {
      this.logger.error(e);
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    });
  }

  @Get(":guid")
  async findByGuid(@Param("guid") guid: string): Promise<PurchaseOrder> {
    return this.purchasingService.findByGuid(guid).catch((e) => {
      this.logger.error(e);
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    });
  }

  @Post("create")
  async create(
    @Body(PurchaseOrderTotalsUpdatePipe, PrismaPurchaseOrderCreateTransformPipe)
    purchaseOrder: PurchaseOrder
  ): Promise<PurchaseOrder> {
    const r = (await this.purchasingService
      .create(purchaseOrder as any)
      .catch((e) => {
        this.logger.error(e);
        throw new HttpException(e, HttpStatus.BAD_REQUEST);
      })) as unknown as PurchaseOrder;

    this.eventEmitter.emit("po.created", r);

    return r;
  }

  // Updates a PO in Xero. Note that unlike create() calls, which are sent to Xero immediately updates are batched
  // and made via a timed service call
  @Put(":guid/update")
  async update(
    @Param("guid") guid: string,
    @Body(PrismaPurchaseOrderUpdateTransformPipe) data: PurchaseOrder
  ): Promise<any> {
    const cleanedData = removeProps(data, ["purchaseOrderId", "supplierId"]);
    const params = { where: { guid: guid }, data: cleanedData };
    return this.purchasingService.update(params);
  }

  @Put(":guid/syncedToXero")
  async syncedToXero(@Param("guid") guid: string) {
    return await this.purchasingService.update({
      where: { guid: guid },
      data: { pendingXero: false },
    });
  }

  @Put("/sendPendingToXero")
  async sendPendingToXero() {
    const num = await this.purchasingService
      .findMany({ where: { pendingXero: true } })
      .then(async (pos) => {
        let x: number;

        for (x = 0; x < pos.length; x++) {
          this.eventEmitter.emit("po.updated", pos[x]);

          // To avoid running foul of Xero rate limits we'll send only one a second
          await new Promise((res) => setTimeout(res, 1000));
        }

        return pos.length;
      })
      .catch((e) => {
        this.logger.error(e);
        return -1;
      });

    return { processed: num };
  }

  @Delete(":guid/delete")
  async delete(@Param("guid") guid: string): Promise<PurchaseOrder> {
    const r = (await this.purchasingService.delete(
      guid
    )) as unknown as PurchaseOrder;

    this.eventEmitter.emit("po.deleted", r);

    return;
  }

  @Get("pdf/:poNumber")
  async pdf(
    @Param("poNumber") poNumber: string,
    @Response({ passthrough: true }) res
  ): Promise<StreamableFile> {
    const buffer = await this.purchasingPDF.PDFfromPO(poNumber);
    // Use 'inline' to show PDF in browser
    // Use  'attachment' for option to save locally
    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="' + poNumber + '.pdf"',
    });
    return new StreamableFile(buffer);
  }

  @Get("csv/:poNumber")
  async csv(
    @Param("poNumber") poNumber: string,
    @Response({ passthrough: true }) res
  ): Promise<StreamableFile> {
    const csvData = await this.purchasingCSV.CSVfromPO(poNumber);
    res.set({
      "Content-Type": "text/csv",
      "Content-Disposition": 'attachment; filename="' + poNumber + '.csv"',
    });
    return new StreamableFile(Buffer.from(csvData, "utf-8"));
  }
}
