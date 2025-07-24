import { Test, TestingModule } from '@nestjs/testing';
import { StockValueService } from './stock-value.service';

describe('StockValueService', () => {
  let service: StockValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockValueService],
    }).compile();

    service = module.get<StockValueService>(StockValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
