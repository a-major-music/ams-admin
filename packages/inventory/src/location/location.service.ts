import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

// This metaservice deals with Locations, which are actually implemented as free text on Product
@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

  async findMany() {
    return this.prisma.product.groupBy({
      by: ['location'],
      _count: {
        _all: true,
      },
      where: {
        NOT: { location: { equals: '' } },
      },
      orderBy: {
        location: 'asc',
      },
    });
  }

  async update(oldLocation: string, newLocation: string) {
    return this.prisma.product.updateMany({
      where: { location: oldLocation },
      data: { location: newLocation },
    });
  }
}
