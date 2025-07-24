import { Module } from "@nestjs/common";
import {
  AMMDocPdf,
  AMMDocFooter,
  AMMDocInit,
  AMMDocList,
  AMMDocLogo,
  AMMDocOrderItem,
  AMMDocTitle,
} from "../services";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  providers: [
    AMMDocInit,
    AMMDocLogo,
    AMMDocList,
    AMMDocFooter,
    AMMDocTitle,
    AMMDocOrderItem,
    AMMDocPdf,
  ],
  exports: [AMMDocPdf],
})
export class AmmDocModule {}
