import { createMock } from '@golevelup/ts-jest';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { StocktakeService } from './stocktake.service';

describe('StocktakeService', () => {
  let service: StocktakeService;
  const prismaService: PrismaService = createMock<PrismaService>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StocktakeService,
        { provide: PrismaService, useValue: prismaService },
      ],
    }).compile();

    service = module.get<StocktakeService>(StocktakeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
