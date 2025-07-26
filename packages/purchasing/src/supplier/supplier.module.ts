import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { SupplierController } from "./supplier.controller";
import { SupplierService } from "./supplier.service";

@Module({
  providers: [SupplierService, PrismaService],
  controllers: [SupplierController],
})
export class SupplierModule {}
