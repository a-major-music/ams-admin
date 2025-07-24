import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
} from "@nestjs/common";
import { CustomSaleService } from "./custom-sale.service";

@Controller("custom-sale")
export class CustomSaleController {
  constructor(private service: CustomSaleService) {}

  logger = new Logger(CustomSaleController.name);

  @Get()
  async getCustomSales() {
    return this.service.getCustomSales();
  }

  @Delete(":id")
  async deleteCustomSale(@Param("id") id: string) {
    return this.service.deleteCustomSale(parseInt(id));
  }

  @Delete("byTitle/:title")
  async deleteCustomSales(@Param("title") title: string) {
    return this.service.deleteCustomSales(title);
  }

  @Get("ignore-list")
  async getIgnoreList() {
    return this.service.getIgnoreList();
  }

  @Post("add-ignore-entry")
  async addIgnoreEntry(@Body("title") title: string) {
    return this.service.addIgnoreEntry(title);
  }

  @Delete("delete-ignore-entry/:id")
  async deleteIgnoreEntry(@Param("id") id: string) {
    this.logger.log(`Deleting ignore entry with id ${id}`);
    return this.service.deleteIgnoreEntry(parseInt(id));
  }
}
