import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StocktakeLine } from '@amm/types';
import { StocktakeService } from './stocktake.service';

@Controller('stocktake')
export class StocktakeController {
  constructor(private stocktakeService: StocktakeService) {}

  @Post('save/:location')
  save(@Param('location') location: string, @Body() lines: StocktakeLine[]) {
    if (!location || location === '') {
      throw new HttpException(
        'Please provide a location for the stock take',
        400,
      );
    }

    return this.stocktakeService.save(location, lines);
  }

  @Get('findByLocation/:location')
  findByLocation(@Param('location') location: string) {
    if (!location || location === '') {
      throw new HttpException('Please provide a location to find', 400);
    }

    return this.stocktakeService.findByLocation(location);
  }

  @Get()
  findAll() {
    return this.stocktakeService.findAll();
  }

  @Put('apply/:location')
  apply(@Param('location') location) {
    if (!location || location === '') {
      throw new HttpException('Please provide a location to apply', 400);
    }

    return this.stocktakeService.apply(location);
  }

  @Delete('delete/:location')
  delete(@Param('location') location: string) {
    if (!location || location === '') {
      throw new HttpException(
        'Please provide a location for the stock take',
        400,
      );
    }
    return this.stocktakeService.deleteByLocation(location);
  }
}
