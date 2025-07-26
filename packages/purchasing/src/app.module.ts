import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PurchasingModule } from "./purchasing/purchasing.module";
import { SupplierModule } from "./supplier/supplier.module";
import { AmmDocModule } from "@amm/amm-doc";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { AuthModule } from "../../common/src/auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    PurchasingModule,
    SupplierModule,
    AmmDocModule,
    EventEmitterModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
