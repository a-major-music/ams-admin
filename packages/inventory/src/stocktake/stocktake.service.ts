import { Injectable } from '@nestjs/common';
import { StocktakeLine } from '@amm/types';
import { PrismaService } from '../prisma.service';

@Injectable()
export class StocktakeService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.stocktake.findMany({ include: { lines: true } });
  }
  async findByLocation(location: string) {
    return this.prisma.stocktake.findFirst({
      where: { location: location },
      include: {
        lines: { include: { variant: { include: { Product: true } } } },
      },
    });
  }

  async deleteByLocation(location: string) {
    return this.prisma.stocktake.deleteMany({ where: { location: location } });
  }

  async save(location: string, lines: StocktakeLine[]) {
    const formattedLines: StocktakeLine[] = lines.map((line) => {
      return {
        count: line.count,
        productVariantId: line.variant?.id,
      };
    });
    return this.prisma.stocktake.upsert({
      where: { location: location },
      update: {
        lines: {
          deleteMany: {},
          createMany: { data: formattedLines },
        },
      },
      create: { location: location, lines: { create: formattedLines } },
      include: { lines: { include: { variant: true } } },
    });
  }

  async apply(location: string) {
    return this.prisma.stocktake.update({
      where: { location },
      data: { applied: true },
    });
  }
}
