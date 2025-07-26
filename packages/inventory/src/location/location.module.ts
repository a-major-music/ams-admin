import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';

@Module({
  imports: [PrismaService],
  providers: [LocationService, PrismaService],
  controllers: [LocationController],
})
export class LocationModule {}
