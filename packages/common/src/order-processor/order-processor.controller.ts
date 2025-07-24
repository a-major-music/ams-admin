import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Logger,
  Post,
} from "@nestjs/common";
import { OrderProcessorService } from "./order-processor.service";
import { SalesOrder } from "@amm/types";

@Controller("order-processor")
export class OrderProcessorController {
  constructor(private service: OrderProcessorService) {}

  private logger = new Logger(OrderProcessorController.name);

  // Process a new order from Shopify or the new order spreadsheet. Stock levels are reduced in the case of stock sales,
  // and in both cases the sold item is added to the most recent draft PurchaseOrder - a new one created if necessary.
  @Post()
  async processNewOrder(@Body() order: SalesOrder) {
    if (!order) {
      throw new HttpException(
        "Blank sales order provided",
        HttpStatus.BAD_REQUEST
      );
    }

    if (!order.lineItems) {
      throw new HttpException(
        "No line items provided as part of sales order",
        HttpStatus.BAD_REQUEST
      );
    }

    // Fix the lineItems array, if necessary
    if (typeof order.lineItems === "string") {
      order.lineItems = eval(order.lineItems);
    }

    this.logger.log(
      `New order received - ${order.number} with ${order.lineItems.length} items...`
    );

    return this.service.processSalesOrder(order);
  }
}
