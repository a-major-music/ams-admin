import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";

import {
  SalesOrder,
  Product,
  ProductVariant,
  PurchaseOrder,
  PurchaseOrderState,
  PurchaseOrderLineItem,
  Supplier,
} from "@amm/types";
import {
  NextNumberService,
  PO_NUMBER,
} from "../next-number/next-number.service";
import { NextNumber } from "../../prisma/generated/client";
import { AuditEventService } from "../audit-event/audit-event.service";
import { CustomSaleService } from "src/custom-sale/custom-sale.service";

@Injectable()
export class OrderProcessorService {
  constructor(
    private httpService: HttpService,
    private nextNumberService: NextNumberService,
    private auditEventService: AuditEventService,
    private customSaleService: CustomSaleService
  ) {}

  logger = new Logger(OrderProcessorService.name);

  async getVariantAndProduct(sku) {
    if (!process.env.INV_API) {
      throw Error(
        "No INV_API set in config - unable to update stock levels from a sale!"
      );
    }

    this.logger.debug(`Retrieving variant ${sku} from ${process.env.INV_API}`);

    const r = await this.httpService
      .get(`${process.env.INV_API}variantBySku/${sku}`)
      .toPromise()
      .catch((err) => {
        throw Error(err);
      });

    if (!r.data || !r.data[0]) {
      return [null, null];
    }

    const p: Product = r.data[0];
    const v: ProductVariant = p.variants.filter((v) => v.sku === sku)[0];

    return [p, v];
  }

  async processSalesOrder(order: SalesOrder): Promise<any> {
    let cogs = 0;

    for (const li of order.lineItems) {
      const wasCustomSale = !li.sku || li.sku === "";

      // Pre-1 - record the sale of this item in the Audit log
      this.auditEventService.auditSaleEvent(
        undefined,
        order.number,
        wasCustomSale ? `Custom sale: ${li.title}` : li.sku,
        li.quantityOrdered
      );

      if (wasCustomSale) {
        this.customSaleService.recordCustomSale(order.shopifyURL, li.title);
        continue;
      }

      // 1: Get the variant and product
      if (!process.env.INV_API) {
        throw Error(
          "No INV_API set in config - unable to update stock levels from a sale!"
        );
      }

      this.logger.debug(
        `Retrieving variant ${li.sku} from ${process.env.INV_API}`
      );

      let r = await this.httpService
        .get(`${process.env.INV_API}variantBySku/${li.sku}`)
        .toPromise()
        .catch((err) => {
          throw Error(err);
        });

      if (!r.data || !r.data[0]) {
        this.logger.warn(
          `No product with variant sku ${li.sku} - stock levels will not be updated.`
        );

        continue;
      }

      const p: Product = r.data[0];
      const v: ProductVariant = p.variants.filter((v) => v.sku === li.sku)[0];

      // Keep a running total of COGS - we'll need this to update Xero at the end.
      cogs += v.buyPrice * li.quantityOrdered;

      this.logger.log(`Updating variant ${v.sku} (of product [${p.name}])`);

      // 2. Reduce the stock level in the inventory service
      let inError = false;
      await this.httpService
        .put(
          `${process.env.INV_API}${v.guid}/update-stock?updateShopify=false`,
          {
            stockLevelDelta: -li.quantityOrdered,
          }
        )
        .toPromise()
        .catch((e) => {
          this.logger.error(e);
          inError = true;
        });

      if (inError) {
        this.logger.error("Something went wrong updating inventory");

        break;
      }

      if (!p.supplierGuid || p.supplierGuid === "") {
        this.logger.error(
          `No supplier for product ${v.sku} - no PO will be created / updated.`
        );

        break;
      }

      if (v.buyable !== true) {
        this.logger.warn(
          `Variant ${v.sku} is not buyable - no PO will be created / updated`
        );

        break;
      }

      // 3. Find (or create) a PurchaseOrder to add this item to
      const poli: PurchaseOrderLineItem = {
        variantSku: v.sku,
        variantGuid: v.guid,
        variantUPC: v.barcode,
        variantSupplierCode: v.supplierCode,
        variantTaxRate: p.taxable ? 20 : 0,
        variantMediaURI:
          v.imageUrls && v.imageUrls[0] ? v.imageUrls[0].uri : undefined,
        description: `${p.name}${v.filter1 ? " (" + v.filter1 + ")" : ""}`,
        itemCost: v.buyPrice && +v.buyPrice > 0 ? v.buyPrice : 0,
        quantityOrdered: v.boughtInPacks ? 1 : +li.quantityOrdered,
        packSize: v.packSize,
        receipts: [],
      };

      if (v.boughtInPacks) {
        poli.description = `${poli.description} (Pack of ${v.packSize})`;
      }

      r = await this.httpService
        .get(
          `${process.env.PURCHASING_API}findBySupplierGuid/${p.supplierGuid}?state=${PurchaseOrderState.DRAFT}`
        )
        .toPromise();

      // Load the suppliers
      let suppliers: Supplier[] = undefined;

      await this.httpService
        .get(`${process.env.SUPPLIERS_API}`)
        .toPromise()
        .then((r) => (suppliers = r.data))
        .catch((e) => this.logger.error(e));

      const supplier: Supplier = suppliers.filter(
        (s: Supplier) => s.guid === p.supplierGuid
      )[0];

      let po: PurchaseOrder = r.data && r.data[0] ? r.data[0] : undefined;

      if (!po) {
        // There is no draft PO for this supplier, so let's create one
        this.logger.log(
          `No draft PO exists for supplier [${supplier.name}] so one will be created`
        );

        const poNumber: NextNumber = await this.nextNumberService.getNext(
          PO_NUMBER
        );

        po = {
          issueDate: new Date(),
          number: `PO${poNumber.value.toString().padStart(4, "0")}`,
          state: PurchaseOrderState.DRAFT,
          supplier: supplier,
          lineItems: [poli],
          // Don't worry that these are 0 - will update in a second
          subTotal: 0,
          taxAmount: 0,
          total: 0,
        };

        await this.httpService
          .post(`${process.env.PURCHASING_API}create`, po)
          .toPromise()
          .then((r) => (po = r.data))
          .catch((e) => this.logger.error(e));
      } else {
        this.logger.log(
          `Draft PO [${po.number}] already exists for supplier [${supplier.name}] so updating it`
        );

        // Check this item isn't already on this PO
        const existingPoli = po.lineItems.filter(
          (li) => li.variantSku === poli.variantSku
        );

        if (existingPoli && existingPoli[0]) {
          // Items bought in packs will only ever have a single entry, so check for this
          if (!v.boughtInPacks) {
            existingPoli[0].quantityOrdered += poli.quantityOrdered;
          }
        } else {
          po.lineItems.push(poli);
        }
      }

      // Recalculate the PO totals based on these new order lines
      po.subTotal = po.lineItems
        .map((i) => i.itemCost * i.quantityOrdered)
        .reduce((a: number, b: number) => a + b);

      po.taxAmount = po.lineItems
        .map((i) =>
          Math.trunc((i.variantTaxRate / 100) * i.itemCost * i.quantityOrdered)
        )
        .reduce((a: number, b: number) => a + b);

      po.total = po.subTotal + po.taxAmount;

      this.logger.log(
        `Updating [${po.number}] with variant [${poli.variantSku}]`
      );

      await this.httpService
        .put(`${process.env.PURCHASING_API}${po.guid}/update`, po)
        .toPromise()
        .catch((e) => this.logger.error(e));
    }

    // Create account ledger lines in Xero - for a sale we debit PURCHASES and credit SOH by the total of the cost prices on the order
    if (!process.env.CREATE_XERO_LEDGER_API) {
      this.logger.warn(
        "No CREATE_XERO_LEDGER_API in config so no COGS update will be made to the ledger"
      );
    } else {
      // TODO: Review if this external Xero API call needs authentication headers
      const headers = {};
      const ledgerEntry = {
        description: `Order ${order.number}`,
        creditAccount: process.env.XERO_SOH_ACCOUNT_CODE,
        debitAccount: process.env.XERO_PURCHASES_ACCOUNT_CODE,
        amount: cogs / 100,
      };

      this.logger.debug(
        `Posting new Xero ledger entry [${ledgerEntry}] to [${process.env.CREATE_XERO_LEDGER_API}]`
      );

      await this.httpService
        .post(`${process.env.CREATE_XERO_LEDGER_API}`, ledgerEntry, {
          headers: headers,
        })
        .toPromise()
        .then(() => this.logger.log("Journal entry successfully recorded"))
        .catch((e) => this.logger.error(e));
    }
  }

  async processRefund(order: SalesOrder): Promise<any> {
    let cogs = 0;

    for (const li of order.lineItems) {
      // Pre-1 - record the refund of this item in the Audit log
      this.auditEventService.auditRefundEvent(
        undefined,
        order.number,
        li.sku,
        li.quantityOrdered
      );

      // 1: Get the variant and product
      const [p, v] = await this.getVariantAndProduct(li.sku);

      if (p === null || v === null) {
        // need both of these to carry on
        this.logger.warn(
          `No product with variant sku ${li.sku} - stock levels will not be updated.`
        );

        continue;
      }

      // Keep a running total of COGS - we'll need this to update Xero at the end.
      cogs += v.buyPrice * li.quantityOrdered;

      this.logger.log(`Updating variant ${v.sku} (of product [${p.name}])`);

      // 2. Increase the stock level in the inventory service
      let inError = false;
      await this.httpService
        .put(`${process.env.INV_API}${v.guid}/update-stock`, {
          stockLevelDelta: li.quantityOrdered,
        })
        .toPromise()
        .catch((e) => {
          this.logger.error(e);
          inError = true;
        });

      if (inError) {
        this.logger.error("Something went wrong updating inventory");

        break;
      }

      if (!p.supplierGuid || p.supplierGuid === "") {
        this.logger.error(
          `No supplier for product ${v.sku} - no PO will be created / updated.`
        );

        break;
      }

      if (v.buyable !== true) {
        this.logger.warn(
          `Variant ${v.sku} is not buyable - no PO will be created / updated`
        );

        break;
      }

      // Create account ledger lines in Xero - for a return we credit PURCHASES and debit SOH by the total of the cost prices on the order
      if (!process.env.CREATE_XERO_LEDGER_API) {
        this.logger.warn(
          "No CREATE_XERO_LEDGER_API in config so no COGS update will be made to the ledger"
        );
      } else {
        // TODO: Review if this external Xero API call needs authentication headers
        const headers = {};
        const ledgerEntry = {
          description: `Order ${order.number}`,
          creditAccount: process.env.XERO_PURCHASES_ACCOUNT_CODE,
          debitAccount: process.env.XERO_SOH_ACCOUNT_CODE,
          amount: cogs / 100,
        };

        this.logger.debug(
          `Posting new Xero ledger entry [${ledgerEntry}] to [${process.env.CREATE_XERO_LEDGER_API}]`
        );

        await this.httpService
          .post(`${process.env.CREATE_XERO_LEDGER_API}`, ledgerEntry, {
            headers: headers,
          })
          .toPromise()
          .then(() => this.logger.log("Journal entry successfully recorded"))
          .catch((e) => this.logger.error(e));
      }
    }
  }
}
