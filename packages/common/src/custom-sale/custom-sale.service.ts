import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class CustomSaleService {
  constructor(private prisma: PrismaService) {}

  logger = new Logger(CustomSaleService.name);

  // Return all the custom sales.
  async getCustomSales() {
    return await this.prisma.customSale.findMany();
  }

  // Delete the custom sale specified by ID
  async deleteCustomSale(id: number) {
    return await this.prisma.customSale.delete({ where: { id: id } });
  }

  async deleteCustomSales(title: string) {
    return await this.prisma.customSale.deleteMany({ where: { title: title } });
  }

  // Return the ignore list.
  async getIgnoreList() {
    return await this.prisma.customSaleIgnoreList.findMany();
  }

  // Record the custom sale, unless the title is in the ignore list
  async recordCustomSale(shopifyURL: string, title: string) {
    const found = await this.prisma.customSaleIgnoreList.findFirst({
      where: { title: title },
    });

    if (found !== null) {
      // This title is in the ignore list, so do nothing.
      this.logger.debug(
        `Ignoring custom sale title "${title}" because it's in the ignore list.`
      );
    } else {
      this.logger.debug(
        `Recording new custom title "${title}" on order ${shopifyURL}`
      );
      await this.prisma.customSale.create({
        data: { orderURL: shopifyURL, title: title },
      });
    }
  }

  async addIgnoreEntry(title: string) {
    const found = await this.prisma.customSaleIgnoreList.findFirst({
      where: { title: title },
    });

    if (found === null) {
      await this.prisma.customSaleIgnoreList.create({ data: { title: title } });
    }
  }

  async deleteIgnoreEntry(id: number) {
    await this.prisma.customSaleIgnoreList.delete({ where: { id: id } });
  }
}
