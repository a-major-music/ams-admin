import { Controller, Logger, Post, Headers, Req } from "@nestjs/common";
import { SkipJwtAuth } from "../auth/skip-jwt-auth.decorator";
import { createHmac, timingSafeEqual } from "crypto";
import { OrderProcessorService } from "src/order-processor/order-processor.service";
import { SalesOrder } from "@amm/types";
import { ShopifyListenerService } from "./shopify-listener.service";

@Controller("shopify-listener")
export class ShopifyListenerController {
  constructor(
    private orderProcessorService: OrderProcessorService,
    private service: ShopifyListenerService
  ) { }

  logger = new Logger(ShopifyListenerController.name);
  hmacKeyAscii =
    process.env.SHOPIFY_NEW_ORDER_HMAC_KEY ||
    "Missing HMAC Key - please refer to Shopify Admin!";
  hmacKey = Buffer.from(this.hmacKeyAscii, "ascii");

  _checkHmac(rawBody: string, sha256: string) {
    const sig = Buffer.from(sha256 || "", "utf-8");
    const hmac = createHmac("sha256", this.hmacKey);
    const digest = Buffer.from(hmac.update(rawBody).digest("base64"));

    if (sig.length !== digest.length || !timingSafeEqual(digest, sig)) {
      this.logger.error(
        `Ignoring invalid SHA for Shopify request. HMAC key in use is: ${this.hmacKeyAscii}`
      );
      throw Error("Not Authorized");
    }
  }

  @SkipJwtAuth()
  @Post("new-order")
  newOrderEvent(@Headers("x-shopify-hmac-sha256") sig, @Req() req) {
    this._checkHmac(req.rawBody, sig);

    // Kick off the handler in a different thread so we can respond back to shopify super quick
    setTimeout(() => {
      const order = JSON.parse(req.rawBody);
      this.logger.debug(`New Order event received for ${order.name}`);

      const salesOrder: SalesOrder = {
        number: order["name"],
        shopifyURL: order["order_status_url"],
        lineItems: order["fulfillments"]
          .map((f) =>
            f["line_items"].map((i) => {
              return {
                quantityOrdered: i.quantity,
                title: i.title,
                sku: i.sku,
                amount: Number.parseInt(i.price.replaceAll(/\./g, "")),
              };
            })
          )
          .flat(1),
      };

      // If there are no fulfilled items on this order don't call the order processor
      if (salesOrder.lineItems.length > 0) {
        this.orderProcessorService.processSalesOrder(salesOrder);
      }
    }, 0);

    return { status: "received" };
  }

  @SkipJwtAuth()
  @Post("product-update")
  productUpdateEvent(@Headers("x-shopify-hmac-sha256") sig, @Req() req) {
    this._checkHmac(req.rawBody, sig);

    // Kick off the handler in a different thread so we can respond back to shopify super quick
    setTimeout(() => {
      this.logger.debug("New Updated Product event received");
      const update = JSON.parse(req.rawBody);

      // Get the ID of each variant SKU to update
      const variantsInUpdate = update.variants.map((v) => {
        return { id: v.id, sku: v.sku };
      });

      const updates = update.images.map((i) => {
        // Each image is mapped to a variant using the ID
        const variantIdsToSrc = i.variant_ids.map((v) => {
          return {
            variantId: v,
            src: i.src,
          };
        });

        // Now map this variant ID back to the sku so we can update AMS
        const mediaUpdates: any[] = variantsInUpdate.map((v) => {
          const srcVariantIdsToSrc = variantIdsToSrc.find(
            (variantIds) => variantIds.variantId === v.id
          );

          return {
            sku: v.sku,
            src: srcVariantIdsToSrc?.src || update.images[0].src,
          };
        });

        return mediaUpdates;
      });

      // Remove duplicates by SKU (first one wins)
      const uniqueArray = updates.filter(
        (o, index, arr) => arr.findIndex((item) => item.sku === o.sku) === index
      );

      this.service.updateVariantMedia(uniqueArray.flat());
    }, 0);

    return { status: "received" };
  }

  @SkipJwtAuth()
  @Post("new-refund")
  newRefundEvent(@Headers("x-shopify-hmac-sha256") sig, @Req() req) {
    this._checkHmac(req.rawBody, sig);

    setTimeout(() => {
      const refund = JSON.parse(req.rawBody);

      if (refund.restock) {
        const salesOrder: SalesOrder = {
          number: refund.transactions[0].payment_id,
          lineItems: refund.refund_line_items.map((r) => {
            return {
              quantityOrdered: r.line_item.quantity,
              title: r.line_item.title,
              sku: r.line_item.sku,
              amount: Number.parseInt(r.line_item.price.replaceAll(/\./g, "")),
            };
          }),
        };

        if (salesOrder.lineItems.length > 0) {
          this.orderProcessorService.processRefund(salesOrder);
        }
      }
    });

    return { status: "received" };
  }
}
