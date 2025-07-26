import { Module } from "@nestjs/common";
import { PurchasingService } from "./purchasing.service";
import { PurchasingController } from "./purchasing.controller";
import { PrismaService } from "../prisma.service";
import { AmmDocModule } from "@amm/amm-doc";
import { PurchasingPDF } from "./purchasing-pdf.service";
import { PurchasingListener } from "./purchasing.listeners";
import { HttpModule } from "@nestjs/axios";
import { PurchasingCSV } from "./purchasing-csv.service";

@Module({
  imports: [AmmDocModule, HttpModule],
  providers: [
    PurchasingService,
    PrismaService,
    PurchasingPDF,
    PurchasingCSV,
    PurchasingListener,
  ],
  controllers: [PurchasingController],
})
export class PurchasingModule {}
