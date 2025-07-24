import { Test, TestingModule } from '@nestjs/testing';
import { ShopifyListenerController } from './shopify-listener.controller';

describe('ShopifyListenerController', () => {
  let controller: ShopifyListenerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopifyListenerController],
    }).compile();

    controller = module.get<ShopifyListenerController>(ShopifyListenerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
