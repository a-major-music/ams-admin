import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { AuditEventService } from "src/audit-event/audit-event.service";
import { ProductVariant } from "@amm/types";

@Injectable()
export class StockValueService {
  constructor(
    private httpService: HttpService,
    private auditEventService: AuditEventService
  ) {}

  logger = new Logger(StockValueService.name);

  async calculateStockValueChange(
    startDate: Date,
    endDate: Date
  ): Promise<number> {
    if (!process.env.PURCHASING_API) {
      throw Error(
        "PURCHASING_API is not defined - unable to calculate stock value change"
      );
    }

    if (!process.env.INV_API) {
      throw Error(
        "INVENTORY_API is not defined - unable to calculate stock value change"
      );
    }

    // Fetch details of all sales (reduction)
    const saleEvents = await this.auditEventService.search({
      AND: [{ createdAt: { gte: startDate } }, { createdAt: { lt: endDate } }],
    });

    // this.logger.debug(JSON.stringify(saleEvents));

    const skusSold: string[] = saleEvents.map((e) => e.targetId);

    const p = await this.httpService
      .post(`${process.env.INV_API}variantsForSkus`, { skus: skusSold })
      .toPromise();

    const variantsSold: ProductVariant[] = p.data ? p.data : undefined;

    const variantMap = {};

    for (let n = 0; n < variantsSold.length; n++) {
      const v = variantsSold[n];
      variantMap[v.sku] = v;
    }

    const totalSales = saleEvents
      .map((vs) => {
        try {
          const quantity = eval(vs.data);
          const variant = variantMap[vs.targetId];

          if (!variant) {
            this.logger.error(
              `SKU: ${vs.targetId} is not mapped - maybe the SKU changed since this event was audited.`
            );
            return 0;
          }
          return Math.round(
            (variant.movingAverageCost * parseInt(quantity)) / variant.packSize
          );
        } catch (e) {
          this.logger.error(
            `Something is wrong in the audit data for ${vs.targetId} (id: ${vs.id} - skipping`
          );
          return 0;
        }
      })
      .reduce((x, y) => x + y);

    this.logger.debug(`Sales total: ${totalSales}`);

    // Fetch details of all stock receipts (increase)
    const r = await this.httpService
      .get(
        `${process.env.PURCHASING_API}receipt/findByReceiveDate?startDate=${startDate}&endDate=${endDate}`
      )
      .toPromise();

    const receipts = r.data ? r.data : undefined;

    const totalPurchases = receipts
      .map((r) => r.received * r.receivedPrice)
      .reduce((x, y) => x + y);

    this.logger.debug(`Purchases total: ${totalPurchases}`);
    this.logger.debug(`Net change is ${totalPurchases - totalSales}`);

    return 0;
  }
}
