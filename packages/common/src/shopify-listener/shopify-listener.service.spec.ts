import { Test, TestingModule } from '@nestjs/testing';
import { ShopifyListenerService } from './shopify-listener.service';

describe('ShopifyListenerService', () => {
  let service: ShopifyListenerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopifyListenerService],
    }).compile();

    service = module.get<ShopifyListenerService>(ShopifyListenerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
