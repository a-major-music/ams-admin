import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { NextNumberController } from "./next-number/next-number.controller";
import { NextNumberService } from "./next-number/next-number.service";
import { PrismaService } from "./prisma.service";
import { HttpModule } from "@nestjs/axios";
import { OrderProcessorService } from "./order-processor/order-processor.service";
import { OrderProcessorController } from "./order-processor/order-processor.controller";
import { AuditEventService } from "./audit-event/audit-event.service";
import { AuditEventController } from "./audit-event/audit-event.controller";
import { StockValueController } from "./stock-value/stock-value.controller";
import { StockValueService } from "./stock-value/stock-value.service";
import { StockValueModule } from "./stock-value/stock-value.module";
import { CustomSaleService } from "./custom-sale/custom-sale.service";
import { CustomSaleController } from "./custom-sale/custom-sale.controller";
import { ShopifyListenerController } from "./shopify-listener/shopify-listener.controller";
import { ShopifyListenerService } from "./shopify-listener/shopify-listener.service";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
    AuthModule,
    StockValueModule,
  ],
  controllers: [
    NextNumberController,
    OrderProcessorController,
    AuditEventController,
    StockValueController,
    CustomSaleController,
    ShopifyListenerController,
  ],
  providers: [
    NextNumberService,
    OrderProcessorService,
    PrismaService,
    AuditEventService,
    StockValueService,
    CustomSaleService,
    ShopifyListenerService,
  ],
})
export class CommonModule {}
