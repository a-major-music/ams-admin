import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Product, ProductVariant, Prisma } from '../../prisma/generated/client';
import { calculate } from '../mac-calculator';
import { equal } from 'assert';
import e from 'express';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  private readonly logger = new Logger(ProductService.name);

  async updateVariantMedia(sku: string, mediaSrc: string) {
    this.logger.debug(`Updating media for ${sku} to ${mediaSrc}`);

    return this.prisma.productVariant.update({
      where: { sku: sku },
      data: {
        imageUrls: {
          deleteMany: {},
          create: [{ uri: mediaSrc }],
        },
      },
    });
  }

  async findByGuid(guid: string): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: { guid: guid },
      include: {
        variants: { include: { imageUrls: true } },
      },
    });
  }

  // Returns a product where one of it's variants has the given GUID. Note that all variants are
  // returned whether or not they also have a matching SKU.
  async findByVariantGuid(
    guid: string,
  ): Promise<Product[] | ProductVariant | null> {
    const r = await this.prisma.product.findMany({
      include: {
        variants: { include: { imageUrls: true } },
      },
      where: {
        variants: {
          some: {
            guid: guid,
          },
        },
      },
    });

    return r;
  }

  // Returns a product where one of it's variants starts with the given sku. Note that all variants are
  // returned whether or not they also have a matching SKU.
  async findByVariantSku(
    sku: string,
    variantOnly: boolean,
  ): Promise<Product[] | ProductVariant | null> {
    if (variantOnly) {
      const r = await this.prisma.productVariant.findUnique({
        where: { sku: sku },
      });

      return r;
    } else {
      const r = await this.prisma.product.findMany({
        include: {
          variants: { include: { imageUrls: true } },
        },
        where: {
          variants: {
            some: {
              sku: { startsWith: sku },
            },
          },
        },
      });

      return r;
    }
  }

  async variantsForSkus(skus: string[]): Promise<ProductVariant[]> {
    return this.prisma.productVariant.findMany({
      where: { sku: { in: skus } },
    });
  }

  async findVariantByBarcode(barcode: string): Promise<ProductVariant | null> {
    return this.prisma.productVariant.findFirst({
      where: { barcode: barcode },
      include: { Product: true, imageUrls: true },
    });
  }

  async countProducts() {
    return this.prisma.product.aggregate({
      _count: { id: true },
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProductWhereUniqueInput;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput;
  }): Promise<Product[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.product.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        variants: { include: { imageUrls: true } },
      },
    });
  }

  async create(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.prisma.product.create({
      data,
      include: { variants: true },
    });
  }

  async createVariant(
    data: Prisma.ProductVariantCreateInput,
  ): Promise<ProductVariant> {
    return this.prisma.productVariant.create({ data });
  }

  async update(params: {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.ProductUpdateInput;
  }): Promise<Product> {
    const { where, data } = params;

    return this.prisma.product.update({
      data,
      where,
      include: { variants: true },
    });
  }

  async updateStock(params: {
    variantGuid: string;
    stockLevelDelta?: number;
    newRetailPrice?: number;
    newBuyPrice?: number;
  }): Promise<ProductVariant> {
    const { variantGuid, stockLevelDelta, newRetailPrice, newBuyPrice } =
      params;

    this.logger.debug(
      `Updating stock and price for variant: ${variantGuid} - stockLevelDelta=${stockLevelDelta} newRetailPrice=${newRetailPrice} newBuyPrice=${newBuyPrice}`,
    );
    if (!variantGuid) {
      throw new Error('No GUID provided to update stock');
    }
    const v = await this.prisma.productVariant.findUnique({
      where: { guid: variantGuid },
    });

    if (!v) {
      this.logger.warn(`No variant found to update for GUID ${variantGuid}`);
      return;
    }

    // When stock is received we need to adjust the MAC. Quite a good article here to understand MAC:
    // https://zipinventory.com/en/inventory-accounting/moving-average-cost.html
    if (
      stockLevelDelta &&
      newRetailPrice &&
      newBuyPrice &&
      stockLevelDelta > 0
    ) {
      v.movingAverageCost = calculate({
        currentPrice: v.buyPrice,
        newPrice: newBuyPrice,
        currentQuantity: v.stockOnHand,
        additionalQuantity: v.boughtInPacks
          ? stockLevelDelta * v.packSize
          : stockLevelDelta,
      });
    }

    this.logger.debug(
      `Stock before update: stockLevel:${v.stockOnHand}, retailPrice:${v.retailPrice}, buyPrice:${v.buyPrice}`,
    );
    if (stockLevelDelta) v.stockOnHand += stockLevelDelta;
    if (newRetailPrice) v.retailPrice = newRetailPrice;
    if (newBuyPrice) v.buyPrice = newBuyPrice;
    this.logger.debug(
      `Stock after update: stockLevel:${v.stockOnHand}, retailPrice:${v.retailPrice}, buyPrice:${v.buyPrice}`,
    );

    return this.prisma.productVariant.update({
      where: { guid: variantGuid },
      data: v,
    });
  }

  async updateInventory(inventory) {
    return await Promise.all(
      inventory.map((i: { variantGuid: string; stockOnHand: number }) => {
        return this.prisma.productVariant.update({
          where: { guid: i.variantGuid },
          data: { stockOnHand: i.stockOnHand },
        });
      }),
    );
  }

  async delete(guid: string): Promise<any> {
    return this.prisma.product.delete({
      where: { guid: guid },
      select: { guid: true, name: true },
    });
  }

  async deleteMany(where: Prisma.ProductWhereUniqueInput): Promise<any> {
    return this.prisma.product.delete({
      where,
    });
  }

  async getSkuToGuidMap(): Promise<any> {
    return this.prisma.productVariant.findMany({
      select: { sku: true, guid: true },
    });
  }

  async getSkuToInventoryMap(skus: string[]): Promise<any> {
    return this.prisma.productVariant.findMany({
      select: { sku: true, guid: true, stockOnHand: true },
      where: { sku: { in: skus } },
    });
  }

  async getGuidToInventoryMap(guids: string[]): Promise<any> {
    return this.prisma.productVariant.findMany({
      select: { sku: true, guid: true, stockOnHand: true },
      where: { guid: { in: guids } },
    });
  }

  async recordStockValue() {
    const value = await this.prisma.$queryRaw<[{ stockValue: number }]>`select (
        select sum("movingAverageCost" * "stockOnHand") from "ProductVariant" 
          where "packSize" = 1 and "stockOnHand" > 0) + (
        select sum("movingAverageCost"/"packSize"*"stockOnHand") from "ProductVariant" 
          where "packSize" > 1 and "stockOnHand" > 0) as "stockValue";`;

    return this.prisma.stockValue
      .create({
        data: { netValue: value[0].stockValue },
      })
      .catch((e) => {
        this.logger.error(
          `${e}: Failed to create stock value for today - maybe a record already exists?`,
        );
      });
  }

  async getStockValue(isoDate: string): Promise<any> {
    return this.prisma.stockValue
      .findFirst({
        where: { date: isoDate },
      })
      .catch((e) => {
        this.logger.error(`${e}: Failed to read stock value for ${isoDate}`);
      });
  }
}
