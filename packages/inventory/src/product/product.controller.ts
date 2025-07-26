import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  HttpStatus,
  HttpException,
  Logger,
} from '@nestjs/common';

import { ProductService } from './product.service';

import { Product } from '@amm/types';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { PrismaProductCreateTransformPipe } from './prisma-product-create.transform.pipe';
import { ProductVariant } from '../../prisma/generated/client';

import _ from 'lodash';
import { PrismaProductUpdateTransformPipe } from './prisma-product-update.transform.pipe';
import { ShopifyService } from '../shopify/shopify.service';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(
    private productService: ProductService,
    private shopifyService: ShopifyService,
  ) {}

  private readonly logger = new Logger(ProductController.name);

  @Get()
  @ApiOperation({
    description:
      'Returns all products as array of Product, with deep fetch of nested objects',
  })
  @ApiParam({
    name: 'skip',
    required: false,
    description: 'number of records to skip',
    type: 'integer',
  })
  @ApiParam({
    name: 'take',
    required: false,
    description: 'number of records to return',
    type: 'integer',
  })
  async findAll(
    @Query('skip') skip?: number,
    @Query('take') take?: number,
    @Query('search') search?: string,
  ): Promise<Product[]> {
    const params: any = {};
    if (skip) params.skip = +skip;
    if (take) {
      params.take = +take;
    } else {
      params.take = 100;
    }
    if (search) {
      // convert to a Prisma where clause to check the name and SKU for the search
      params.where = {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          {
            variants: {
              some: {
                OR: [
                  { sku: { contains: search, mode: 'insensitive' } },
                  { barcode: { contains: search } },
                  { filterValues: { contains: search, mode: 'insensitive' } },
                ],
              },
            },
          },
        ],
      };
    }

    return this.productService.findMany(params) as any;
  }

  @Get('forLocation/:location')
  async findByLocation(@Param('location') location) {
    return this.productService.findMany({
      where: { location: location },
      take: 1000,
    });
  }

  @Get('count')
  async countProducts(): Promise<any> {
    return { rows: (await this.productService.countProducts())._count.id };
  }

  @Get('variantBySku/:sku')
  async findByVariantSku(
    @Param('sku') sku: string,
    @Query('variantOnly') variantOnly = false,
  ): Promise<Product[] | ProductVariant> {
    return this.productService.findByVariantSku(sku, variantOnly) as any;
  }

  @Post('variantsForSkus')
  async variantsForSkus(
    @Body('skus') skus: string[],
  ): Promise<ProductVariant[]> {
    if (!skus || skus.length == 0) return null;
    return this.productService.variantsForSkus(skus) as any;
  }

  @Get('variant/:guid')
  async findByVariant(
    @Param('guid') guid: string,
  ): Promise<Product[] | ProductVariant> {
    return this.productService.findByVariantGuid(guid) as any;
  }

  @Post('inventory')
  async getInventoryMap(
    @Body('skus') skus: string[],
    @Body('guids') guids: string[],
  ) {
    if (!skus && !guids) {
      throw new HttpException(
        'Please provide either a list of SKUs or GUIDs',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (skus) {
      return this.productService.getSkuToInventoryMap(skus);
    } else if (guids) {
      return this.productService.getGuidToInventoryMap(guids);
    }
  }

  @Get('variantByBarcode/:barcode')
  async findVariantByBarcode(
    @Param('barcode') barcode: string,
  ): Promise<ProductVariant | null> {
    return this.productService.findVariantByBarcode(barcode);
  }

  @Get('variants-guid-map')
  async getSkuToGuidMap(): Promise<any[]> {
    return this.productService.getSkuToGuidMap();
  }

  @Get('stockValue')
  async getStockValue(@Query('date') date: string): Promise<any> {
    return await this.productService.getStockValue(date);
  }

  // Make sure this is the last get, otherwise it will grab all GET requests.
  @Get(':guid')
  async findOne(@Param('guid') guid: string): Promise<Product> {
    return this.productService.findByGuid(guid).then(async (p: Product) => {
      if (p && p.publishedToShopify) {
        const shopifyId = await this.shopifyService.findProductIdByVariantSkus(
          p.variants.map((v) => v.sku),
        );

        if (shopifyId) {
          p.shopifyId = shopifyId;
        }
      }

      return p;
    });
  }

  @Post('create')
  async create(@Body(PrismaProductCreateTransformPipe) p: Product) {
    return await this.productService.create(p as any).catch((e) => {
      if (e.code === 'P2002') {
        const message = `The ${e.meta.target[0]} field has already been used, but must be unique!`;
        throw new HttpException(message, HttpStatus.CONFLICT);
      }

      this.logger.error(e);
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    });
  }

  @Put('/update-inventory')
  async updateInventory(
    @Body()
    inventory: {
      variantSku: string; // Shopify is keyed on SKU, so need this in addition to the GUID
      variantGuid: string;
      stockOnHand: number;
    }[],
  ) {
    // There is no await here, as the shopify part may take a while so we return.
    return this.productService
      .updateInventory(inventory)
      .then(() => this.shopifyService.updateInventory(inventory));
  }

  @Put(':sku/updateMedia/:mediaSrc')
  async updateMedia(
    @Param('sku') sku: string,
    @Param('mediaSrc') mediaSrc: string,
  ) {
    return await this.productService.updateVariantMedia(sku, mediaSrc);
  }

  @Put(':guid/update')
  async update(
    // This flag prevents updates FROM Shopify immediately causing a pointless sync to Shopify
    @Query('updateShopify') updateShopify: string,
    @Param('guid') guid: string,
    @Body(PrismaProductUpdateTransformPipe) productData: Product,
  ) {
    productData.guid = guid;
    const params = { where: { guid: guid }, data: productData };

    return await this.productService
      .update(params as any)
      .then(async (p) => {
        // if this is published to Shopify try to update that too, synchronously, so we can tell the
        // user if it didn't work.
        if (p.publishedToShopify && updateShopify === 'true') {
          this.logger.log(
            'Product is flagged as published, so attempting Shopify update',
          );
          const res = await this.shopifyService.updateProduct(p);
          const shopifyId = res.productSet?.product?.id;

          if (!shopifyId) {
            this.logger.warn(
              `Cannot retrieve product ID following create / update of [${p.name}] - reversing publishedToShopify flag`,
            );
            return this.productService.update({
              where: { id: p.id },
              data: { shopifyId: '', publishedToShopify: false },
            });
          }

          this.logger.debug(
            `Updating product [${p.name}] with shopify ID [${shopifyId}]`,
          );

          return this.productService.update({
            where: { id: p.id },
            data: { shopifyId: shopifyId },
          });
        } else {
          // Delete this from Shopify - may not be there, but just in case the product was unpublished
          await this.shopifyService.deleteProduct(p.name);

          return this.productService.update({
            where: { id: p.id },
            data: { shopifyId: '', publishedToShopify: false },
          });
        }
      })
      .catch((e) => {
        if (e.code === 'P2002') {
          const message = `The ${e.meta.target[0]} field has already been used, but must be unique!`;
          throw new HttpException(message, HttpStatus.CONFLICT);
        }

        this.logger.error(e);
        throw new HttpException(e, HttpStatus.BAD_REQUEST);
      });
  }

  @Put(':guid/update-stock')
  async updateStock(
    // This flag prevents updates FROM Shopify immediately causing a pointless sync to Shopify
    @Query('updateShopify') updateShopify: string,
    @Param('guid') guid: string,
    @Body() body: any,
  ): Promise<any> {
    if (!guid || guid.trim() === '') {
      throw new HttpException(
        'Please provide a variant GUID',
        HttpStatus.BAD_REQUEST,
      );
    }

    const stockLevelDelta = +body.stockLevelDelta || undefined;
    const newBuyPrice = +body.newBuyPrice || undefined;
    const newRetailPrice = +body.newRetailPrice || undefined;

    if (
      !newBuyPrice &&
      !newRetailPrice &&
      (!stockLevelDelta || stockLevelDelta == 0)
    ) {
      throw new HttpException(
        'Please provide something to update',
        HttpStatus.BAD_REQUEST,
      );
    }

    this.productService
      .updateStock({
        variantGuid: guid,
        stockLevelDelta: stockLevelDelta,
        newBuyPrice: newBuyPrice,
        newRetailPrice: newRetailPrice,
      })
      .then(async (v) => {
        if (updateShopify === 'true') {
          const p: Product[] = (await this.productService.findByVariantGuid(
            guid,
          )) as Product[];

          this.logger.log(
            `Syncing product prices and stock level with Shopify for ${v.sku}`,
          );

          if (!p || p.length == 0) {
            this.logger.error(
              `Unable to update product with variant ${guid} following receipt - could not find product!`,
            );
          } else {
            // Sync the product with shopify to put the new prices
            this.shopifyService.updateProduct(p[0]);
          }

          // Stock levels are explicitly not updated with the previous call, so do that too.
          this.shopifyService.updateInventory([
            {
              variantSku: v.sku,
              stockOnHand: v.stockOnHand,
            },
          ]);
        }
      })
      .catch((e) => {
        this.logger.error(e);
        throw new HttpException(e.toString(), HttpStatus.BAD_REQUEST);
      });
  }

  @Put(':productGuid/update-location/:location')
  async updateLocation(
    @Param('productGuid') productGuid,
    @Param('location') location,
  ) {
    return await this.productService.update({
      where: { guid: productGuid },
      data: { location: location },
    });
  }

  @Put('/sync-stock-levels')
  async syncStockLevels() {
    // Calls updateInventory page by page for the whole published catalogue.
    // This is intended to be run overnight. Returns 202 - ACCEPTED and processes in the background
    new Promise(async (resolve) => {
      let results: Product[] = [];
      let cursor = 0;
      let totalProcessed = 0;

      while (true) {
        results = await this.productService.findMany({
          take: 50,
          cursor: cursor > 0 ? { id: cursor } : undefined,
          skip: cursor == 0 ? 0 : 1, // Skip the cursor, unless it's the first time through
          where: { publishedToShopify: true },
          orderBy: { id: 'asc' },
        });

        if (results.length == 0) {
          // No more results, so break out of this loop
          break;
        }

        cursor = results.slice(-1)[0].id;

        const variants: { variantSku: string; stockOnHand: number }[] = results
          .map((p) => p.variants)
          .flat()
          .map((pv) => {
            return { variantSku: pv.sku, stockOnHand: pv.stockOnHand };
          });

        totalProcessed += variants.length;

        // Update stock levels in Shopify for these variants
        await this.shopifyService.updateInventory(variants);
      }

      this.logger.log(`Processed ${totalProcessed} variants`);

      resolve({ status: 'success', processed: totalProcessed });
    });

    this.logger.log(
      'Request to sync stock accepted, and in processing. Check console for updates.',
    );
    return HttpStatus.ACCEPTED;
  }

  @Delete(':guid')
  delete(@Param('guid') guid: string) {
    this.productService
      .delete(guid)
      .then((p: Product) => {
        return this.shopifyService.deleteProduct(p.name);
      })
      .catch((e) => {
        this.logger.error(e);
        throw new HttpException(e.toString(), HttpStatus.BAD_REQUEST);
      });
  }

  @Delete('/')
  async deleteMany(@Query('where') where: any): Promise<any> {
    return this.productService.deleteMany(where).then((deleted) => {
      return Promise.all(
        deleted.forEach(
          async (p) => await this.shopifyService.deleteProduct(p.name),
        ),
      );
    });
  }

  @Put('recordStockValue')
  recordStockValue() {
    return this.productService.recordStockValue();
  }
}
