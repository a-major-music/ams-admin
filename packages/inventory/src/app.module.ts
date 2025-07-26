import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService as AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { LocationModule } from './location/location.module';
import { StocktakeModule } from './stocktake/stocktake.module';
import { AuthModule } from '../../common/src/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    ProductModule,
    EventEmitterModule.forRoot(),
    LocationModule,
    StocktakeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
