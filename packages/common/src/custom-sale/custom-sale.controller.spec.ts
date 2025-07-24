import { Test, TestingModule } from '@nestjs/testing';
import { CustomSaleController } from './custom-sale.controller';

describe('CustomSaleController', () => {
  let controller: CustomSaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomSaleController],
    }).compile();

    controller = module.get<CustomSaleController>(CustomSaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
