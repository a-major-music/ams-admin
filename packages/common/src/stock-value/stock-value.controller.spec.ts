import { Test, TestingModule } from '@nestjs/testing';
import { StockValueController } from './stock-value.controller';

describe('StockValueController', () => {
  let controller: StockValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockValueController],
    }).compile();

    controller = module.get<StockValueController>(StockValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
