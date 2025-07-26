import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { HttpModule } from '@nestjs/axios';
import { ShopifyService } from '../shopify/shopify.service';

@Module({
  imports: [HttpModule],
  providers: [ProductService, ShopifyService, PrismaService],
  controllers: [ProductController],
})
export class ProductModule {}
