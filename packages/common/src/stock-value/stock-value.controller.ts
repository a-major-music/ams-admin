import { Controller, Get, Logger, Query } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { StockValueService } from "./stock-value.service";

@Controller("stock-value")
export class StockValueController {
  constructor(private service: StockValueService) {}

  private logger = new Logger(StockValueController.name);

  @Get()
  @ApiOperation({
    description:
      "Calculates the net stock value change for a date period. The start date is inclusive and the end date is exclusive.",
  })
  async calculateStockValueChange(
    @Query("startDate") startDate,
    @Query("endDate") endDate
  ) {
    this.logger.debug(
      `Calculating net stock value change between ${startDate} and ${endDate}`
    );
    return this.service.calculateStockValueChange(
      new Date(startDate),
      new Date(endDate)
    );
  }
}
