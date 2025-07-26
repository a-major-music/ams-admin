import { Controller, Get, Logger, Param, Put } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('locations')
export class LocationController {
  constructor(private locationService: LocationService) {}
  @Get()
  async findAll() {
    return this.locationService.findMany() as any;
  }

  @Put(':oldLocation/rename-location/:newLocation')
  async update(
    @Param('oldLocation') oldLocation: string,
    @Param('newLocation') newLocation: string,
  ) {
    return this.locationService.update(oldLocation, newLocation);
  }
}
