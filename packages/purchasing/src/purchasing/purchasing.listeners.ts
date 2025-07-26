import { Injectable, Logger } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { PurchaseOrder } from "@amm/types";
import { HttpService } from "@nestjs/axios";
import { PurchasingService } from "./purchasing.service";

@Injectable()
export class PurchasingListener {
  constructor(
    private httpService: HttpService,
    private purchasingService: PurchasingService
  ) {}

  private readonly logger = new Logger(PurchasingListener.name);

  @OnEvent("po.created")
  async handlePOCreatedEvent(po: PurchaseOrder) {
    if (!process.env.NEW_PO_URL) {
      this.logger.warn(
        "No NEW_PO_URL env var set up - PO will not be posted to Xero!"
      );
      return;
    }

    await this.httpService
      .post(process.env.NEW_PO_URL, po)
      .toPromise()
      .then(() => {
        this.purchasingService
          .update({
            where: { id: po.id },
            data: { pendingXero: false },
          })
          .then(() => {
            this.logger.log(`Successfully posted: ${po.number} to Xero`);
          })
          .catch((e) => {
            this.logger.error(e);
          });
      })
      .catch((e) =>
        this.logger.error(
          `Something went wrong posting ${
            po ? po.number : "<unknown>"
          } to Xero!`,
          null,
          e
        )
      );
  }

  @OnEvent("po.updated")
  handlePOUpdatedEvent(po: PurchaseOrder) {
    // Xero treats creates and updates the same
    this.handlePOCreatedEvent(po);
  }

  @OnEvent("po.deleted")
  handlePODeletedEvent(po: PurchaseOrder) {
    this.logger.log(`Deleted ${po.number} - not currently deleted from Xero!`);
  }

  @OnEvent("goods.receipted")
  async handleGoodsReceiptedEvent(params: { po: PurchaseOrder }) {
    // Do an update first to make sure our latest data is synced to Xero
    // this.handlePOUpdatedEvent(params.po);

    if (!process.env.GOODS_RECEIVED_URL) {
      return this.logger.warn(
        "No GOODS_RECEIVED_URL env var set up - unable to create bill in Xero"
      );
    }

    // Not yet implemented
  }
}
