import { Test, TestingModule } from '@nestjs/testing';
import { CustomSaleService } from './custom-sale.service';

describe('CustomSaleService', () => {
  let service: CustomSaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomSaleService],
    }).compile();

    service = module.get<CustomSaleService>(CustomSaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
