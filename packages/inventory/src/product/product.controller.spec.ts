import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { createMock } from '@golevelup/ts-jest';
import { EventEmitter2 } from '@nestjs/event-emitter';

import { Product } from '@amm/types';
import { ShopifyService } from '../shopify/shopify.service';

describe('ProductController', () => {
  let controller: ProductController;
  const mockProductService = createMock<ProductService>({
    update: jest.fn().mockImplementation(() => ({
      then: jest.fn().mockImplementation(() => ({ catch: jest.fn() })),
    })),
    findMany: jest.fn().mockImplementation(() => ({
      then: jest.fn().mockImplementation(() => ({ catch: jest.fn() })),
    })),
    findByGuid: jest.fn().mockImplementation(() => ({
      then: jest.fn().mockImplementation(() => ({ catch: jest.fn() })),
    })),
    delete: jest.fn().mockImplementation(() => ({
      then: jest.fn().mockImplementation(() => ({ catch: jest.fn() })),
    })),
    deleteMany: jest.fn().mockImplementation(() => ({
      then: jest.fn().mockImplementation(() => ({ catch: jest.fn() })),
    })),
  });
  const mockShopifyService = createMock<ShopifyService>();
  const mockGuid = 'abcd';
  const mockSku = 'BOK00001';
  const mockProduct = createMock<Product>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ProductService,
          useValue: mockProductService,
        },
        {
          provide: ShopifyService,
          useValue: mockShopifyService,
        },
        EventEmitter2,
      ],
      controllers: [ProductController],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('when we delete an item', () => {
    beforeAll(() => {
      controller.delete(mockGuid);
    });
    it('delete should call delete of the service', () => {
      expect(mockProductService.delete).toHaveBeenCalledWith(mockGuid);
    });
  });

  describe('when we delete many items', () => {
    beforeAll(() => {
      controller.deleteMany({ name: 'Test' });
    });
    it('delete should call deleteMany of the service', () => {
      expect(mockProductService.deleteMany).toHaveBeenCalledWith({
        name: 'Test',
      });
    });
  });

  describe('when we create an item', () => {
    beforeAll(() => {
      controller.create(mockProduct);
    });
    it('create should call create of the service', () => {
      expect(mockProductService.create).toHaveBeenCalledWith(mockProduct);
    });
  });

  describe('when we update an item', () => {
    beforeAll(() => {
      controller.update(mockGuid, mockProduct);
    });

    it('update should call update of the service', () => {
      const p = { where: { guid: mockGuid }, data: mockProduct };
      expect(mockProductService.update).toHaveBeenCalledWith(p);
    });
  });

  describe('when we get an item', () => {
    beforeAll(() => {
      controller.findOne(mockGuid);
    });

    it('find should call find of the service', () => {
      expect(mockProductService.findByGuid).toHaveBeenCalledWith(mockGuid);
    });
  });

  describe('when we get items', () => {
    beforeAll(() => {
      controller.findAll();
    });

    it('find should call find of the service', () => {
      expect(mockProductService.findMany).toHaveBeenCalledWith({ take: 100 });
    });
  });

  describe('when we get items by variant sku', () => {
    beforeAll(() => {
      controller.findByVariantSku(mockSku);
    });

    it('find should call find of the service', () => {
      // There's an optional parameter which defaults to false
      expect(mockProductService.findByVariantSku).toHaveBeenCalledWith(
        mockSku,
        false,
      );
    });
  });

  describe('when we get a sku to guid map', () => {
    beforeAll(() => {
      controller.getSkuToGuidMap();
    });

    it('find should call find of the service', () => {
      expect(mockProductService.getSkuToGuidMap).toHaveBeenCalled();
    });
  });
});
