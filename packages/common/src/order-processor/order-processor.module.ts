import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { AuditEventService } from "../audit-event/audit-event.service";
import { NextNumberModule } from "../next-number/next-number.module";
import { NextNumberService } from "../next-number/next-number.service";
import { OrderProcessorController } from "./order-processor.controller";
import { OrderProcessorService } from "./order-processor.service";

@Module({
  imports: [HttpModule, NextNumberModule],
  controllers: [OrderProcessorController],
  providers: [
    PrismaService,
    OrderProcessorService,
    NextNumberService,
    AuditEventService,
  ],
})
export class OrderProcessorModule {}
