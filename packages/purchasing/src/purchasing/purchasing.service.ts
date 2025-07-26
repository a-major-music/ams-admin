import { Injectable, Logger } from "@nestjs/common";
import { Prisma, PurchaseOrderLineItemReceipt, PurchaseOrder } from "../../prisma/generated/client";
import { PrismaService } from "../prisma.service";
import { PurchaseOrderState, PurchaseOrderLineItem } from "@amm/types";
import _ from "lodash";

@Injectable()
export class PurchasingService {
  constructor(private prisma: PrismaService) {}

  logger = new Logger(PurchasingService.name);

  async find(id: number): Promise<PurchaseOrder | null> {
    return this.prisma.purchaseOrder.findUnique({
      where: { id: id },
      include: {
        lineItems: { include: { receipts: true } },
        supplier: { include: { contacts: true, address: true } },
      },
    });
  }

  async findByGuid(guid: string): Promise<PurchaseOrder | null> {
    return this.prisma.purchaseOrder.findUnique({
      where: { guid: guid },
      include: {
        lineItems: { include: { receipts: true } },
        supplier: { include: { contacts: true, address: true } },
      },
    });
  }

  async findByPoNumber(number: string): Promise<PurchaseOrder | null> {
    return this.prisma.purchaseOrder.findUnique({
      where: { number: number },
      include: {
        lineItems: { include: { receipts: true } },
        supplier: { include: { contacts: true, address: true } },
      },
    });
  }

  async findBySupplier(
    guid: string,
    state?: PurchaseOrderState
  ): Promise<PurchaseOrder[] | null> {
    let whereClause;

    if (state) {
      whereClause = { AND: [{ supplier: { guid: guid } }, { state: state }] };
    } else {
      whereClause = { supplier: { guid: guid } };
    }

    return this.prisma.purchaseOrder.findMany({
      where: whereClause,
      include: {
        lineItems: { include: { receipts: true } },
        supplier: {
          include: { contacts: true, address: true },
        },
      },
    });
  }

  async countPurchaseOrders(where?: Prisma.PurchaseOrderWhereInput) {
    return this.prisma.purchaseOrder.aggregate({
      _count: { id: true },
      where,
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PurchaseOrderWhereUniqueInput;
    where?: Prisma.PurchaseOrderWhereInput;
    orderBy?: Prisma.PurchaseOrderOrderByWithRelationInput;
  }): Promise<PurchaseOrder[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.purchaseOrder.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        lineItems: { include: { receipts: true } },
        supplier: { include: { contacts: true, address: true } },
      },
    });
  }

  async create(data: Prisma.PurchaseOrderCreateInput): Promise<PurchaseOrder> {
    return this.prisma.purchaseOrder.create({
      data,
      include: {
        lineItems: { include: { receipts: true } },
        supplier: { include: { contacts: true, address: true } },
      },
    });
  }

  async update(params: {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    data: Prisma.PurchaseOrderUpdateInput;
  }): Promise<PurchaseOrder> {
    const { where, data } = params;
    return this.prisma.purchaseOrder.update({
      where,
      data,
      include: {
        lineItems: { include: { receipts: true } },
        supplier: { include: { contacts: true, address: true } },
      },
    });
  }

  async delete(guid: string) {
    return this.prisma.purchaseOrder.delete({ where: { guid: guid } });
  }

  async receive(
    poliGuid: string,
    poliReceipt: Prisma.PurchaseOrderLineItemReceiptCreateInput
  ): Promise<PurchaseOrderLineItemReceipt> {
    poliReceipt.PurchaseOrderLineItem = { connect: { guid: poliGuid } };

    const poLineItem = await this.prisma.purchaseOrderLineItem.findUnique({
      where: { guid: poliGuid },
      include: { receipts: true, purchaseOrder: true },
    });

    // Do some basic checks on this request
    const qtr =
      poLineItem.quantityOrdered -
      poLineItem.receipts.map((r) => r.received).reduce((a, b) => a + b, 0);
    if (qtr < poliReceipt.received) {
      this.logger.error(
        `Aborting attempt to receive more items (${poliReceipt.received}) than are remaining to receive (${qtr}) on ${poLineItem.purchaseOrder.number}!`
      );

      throw `Unable to receive ${poLineItem.variantSku} - the data on this page is inconsistent. Please refresh!`;
    }

    if (poliReceipt.receivedPrice === 0) {
      throw `Please explicitly provide the price the item was received at for "${poLineItem.variantSku}"!`;
    }

    // In case of a null date delete it and let the DB create one. A null value breaks prisma.
    if (poliReceipt.date === null) {
      delete poliReceipt.date;
    }

    // Create the receipt
    const result = await this.prisma.purchaseOrderLineItemReceipt.create({
      data: poliReceipt,
    });

    // Update the status of the PO if appropriate
    await this.prisma.purchaseOrder
      .findUnique({
        where: { id: poLineItem.purchaseOrderId },
        include: { lineItems: { include: { receipts: true } } },
      })
      .then((po) => {
        this._updatePOState(po);
      });

    return result;
  }

  async deleteReceipt(guid: string): Promise<PurchaseOrderLineItemReceipt> {
    const deletedReceipt =
      await this.prisma.purchaseOrderLineItemReceipt.delete({
        where: { guid: guid },
      } as any);

    if (deletedReceipt) {
      const poli = await this.prisma.purchaseOrderLineItem.findUnique({
        where: { id: deletedReceipt.purchaseOrderLineItemId },
      });

      // Update the status of the PO if appropriate
      await this.prisma.purchaseOrder
        .findUnique({
          where: { id: poli.purchaseOrderId },
          include: { lineItems: { include: { receipts: true } } },
        })
        .then((po) => {
          this._updatePOState(po);
        });
    }

    return deletedReceipt;
  }

  async searchReceipts(
    where: Prisma.PurchaseOrderLineItemReceiptWhereInput
  ): Promise<PurchaseOrderLineItemReceipt[]> {
    return this.prisma.purchaseOrderLineItemReceipt.findMany({ where: where });
  }

  async _updatePOState(po) {
    if (po.state === PurchaseOrderState.DRAFT) return;

    const qtr =
      po.lineItems
        .map((poli: PurchaseOrderLineItem) => poli.quantityOrdered)
        .reduce((a, b) => a + b, 0) -
      po.lineItems
        .filter((poli: PurchaseOrderLineItem) => poli.receipts)
        .map((poli: PurchaseOrderLineItem) => poli.receipts)
        .reduce((a, b) => [...a, ...b], [])
        .map((receipt: PurchaseOrderLineItemReceipt) => receipt.received)
        .reduce((a, b) => a + b, 0);

    const newState =
      qtr > 0 ? PurchaseOrderState.ACTIVE : PurchaseOrderState.RECEIVED;

    await this.prisma.purchaseOrder
      .update({ where: { id: po.id }, data: { state: newState } })
      .then((po) => {
        this.logger.log(`Updated state of ${po.number} to ${po.state}`);
      });
  }
}
