import { Test, TestingModule } from '@nestjs/testing';
import { ShopifyService } from './shopify.service';
import { HttpService } from '@nestjs/axios';
import { createMock } from '@golevelup/ts-jest';

describe('ShopifyService', () => {
  let service: ShopifyService;
  const mockHttpService: HttpService = createMock<HttpService>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShopifyService,
        { provide: HttpService, useValue: mockHttpService },
      ],
    }).compile();

    service = module.get<ShopifyService>(ShopifyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
