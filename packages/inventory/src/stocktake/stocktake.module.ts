import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { StocktakeController } from './stocktake.controller';
import { StocktakeService } from './stocktake.service';

@Module({
  controllers: [StocktakeController],
  providers: [StocktakeService, PrismaService],
})
export class StocktakeModule {}
