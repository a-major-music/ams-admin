import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class ShopifyListenerService {
  constructor(private httpService: HttpService) {}

  logger = new Logger(ShopifyListenerService.name);

  async updateVariantMedia(mediaUpdates: any[]) {
    mediaUpdates.forEach(async (v) => {
      if (v.src) {
        await this.httpService
          .put(
            `${process.env.INV_API}${v.sku}/updateMedia/${encodeURIComponent(
              v.src
            )}`
          )
          .toPromise()
          .then(() => {
            this.logger.log(
              `Sent request to inventory service to update media for ${v.sku}`
            );
          })
          .catch((e) => {
            this.logger.error(e);
          });
      }
    });
  }
}
