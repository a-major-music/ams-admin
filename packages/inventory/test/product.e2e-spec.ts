import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { ProductModule } from '../src/product/product.module';
import { Product, ProductType, WeightUnit } from '@amm/types';

import supertest = require('supertest');
import { PrismaService } from '../src/prisma.service';
import { removeProps } from './util';

let app: INestApplication;
let prisma: PrismaService;

beforeAll(async () => {
  const module = await Test.createTestingModule({
    imports: [AppModule, ProductModule],
  }).compile();

  app = module.createNestApplication();
  prisma = app.get<PrismaService>(PrismaService);
  await app.init();
});

afterAll(async () => {
  await app.close();
});

describe('POST /products/create', () => {
  it('should create a minimal product', async () => {
    const p: Product = {
      name: 'Testing POST single minimal product',
      taxable: true,
      productType: ProductType.INSTRUMENT,
      variants: [
        {
          sku: 'INS0001',
          weight: 1,
          weightUnit: WeightUnit.KG,
          manageStockLevels: true,
          stockOnHand: 0,
          movingAverageCost: 500,
          sellable: true,
          buyable: true,
          retailPrice: 1000,
          buyPrice: 500,
          imageUrls: [
            'https://cdn.shopify.com/s/files/1/1079/2732/products/musam969056_0.jpg?v=1647272012',
          ],
        },
      ],
    };

    const cs = await supertest
      .agent(app.getHttpServer())
      .post('/products/create')
      .set('Accept', 'application/json')
      .send(p)
      .expect('Content-Type', /json/)
      .expect(201);

    const qs = await supertest
      .agent(app.getHttpServer())
      .get(`/products/${cs.body.guid}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(removeProps(JSON.parse(qs.text), ['guid'])).toMatchSnapshot();

    await prisma.productVariant.deleteMany({});
    await prisma.product.deleteMany({});
  });

  it('should create a single, fully populated product', async () => {
    const p: Product = {
      name: 'Testing POST single product',
      taxable: true,
      productType: ProductType.INSTRUMENT,
      brand: 'Test Brand',
      description: 'Test Description',
      tags: ['tag1'],
      // variants should be created
      variants: [
        {
          filterValues: 'large',
          barcode: '1234567890123',
          supplierCode: 'SUP101',
          buyPrice: 1000,
          buyable: true,
          manageStockLevels: true,
          notes: 'A test variant',
          previousPrice: 2000,
          retailPrice: 1500,
          sellable: true,
          sku: 'INS00001',
          weight: 5,
          weightUnit: WeightUnit.KG,
          stockOnHand: 0,
          movingAverageCost: 500,
        },
      ],
      filterFields: 'size',
      location: 'A1',
      supplierGuid: 'supplier-fake-guid',
    };

    const cs = await supertest
      .agent(app.getHttpServer())
      .post('/products/create')
      .set('Accept', 'application/json')
      .send(p)
      .expect('Content-Type', /json/)
      .expect(201);

    const qs = await supertest
      .agent(app.getHttpServer())
      .get(`/products/${cs.body.guid}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(removeProps(JSON.parse(qs.text), ['guid'])).toMatchSnapshot();

    const countTest = await supertest
      .agent(app.getHttpServer())
      .get(`/products/count`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(countTest.body).toMatchSnapshot();

    await prisma.productVariant.deleteMany({});
    await prisma.product.deleteMany({});
  });
});

describe('PUT /products/:id/update', () => {
  // Create dummy product
  const p: Product = {
    name: 'Testing add new variant to product',
    productType: ProductType.INSTRUMENT,
    brand: 'Test Brand',
    description: 'Test Description',
    filterFields: 'size',
    location: 'A1',
  };

  it('should add a new variant to a product', async () => {
    const pRes = await supertest
      .agent(app.getHttpServer())
      .post('/products/create')
      .send(p)
      .expect('Content-Type', /json/)
      .expect(201);

    const pv = {
      variants: [
        {
          filterValues: 'large',
          barcode: '1234567890123',
          supplierCode: 'SUP101',
          buyPrice: 1000,
          buyable: true,
          manageStockLevels: true,
          notes: 'A test variant',
          previousPrice: 2000,
          retailPrice: 1500,
          sellable: true,
          sku: 'INS00001',
          weight: 5,
          weightUnit: WeightUnit.KG,
          stockOnHand: 0,
          movingAverageCost: 500,
        },
      ],
    };

    p.guid = pRes.body.guid;

    await supertest
      .agent(app.getHttpServer())
      .put(`/products/${p.guid}/update`)
      .send(pv)
      .expect('Content-Type', /json/)
      .expect(200);

    const checkRes = await supertest
      .agent(app.getHttpServer())
      .get(`/products/${pRes.body.guid}`)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(removeProps(checkRes.body, ['guid'])).toMatchSnapshot();

    // Store in p for later tests in this group
    p.variants = checkRes.body.variants;
  });

  it('should add a tag', async () => {
    await supertest
      .agent(app.getHttpServer())
      .put(`/products/${p.guid}/update`)
      .send({ tags: ['tag1'] })
      .expect('Content-Type', /json/)
      .expect(200);

    const checkRes = await supertest
      .agent(app.getHttpServer())
      .get(`/products/${p.guid}`)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(removeProps(checkRes.body, ['guid'])).toMatchSnapshot();

    p.tags = checkRes.body.tags;
  });

  it('should add another tag', async () => {
    await supertest
      .agent(app.getHttpServer())
      .put(`/products/${p.guid}/update`)
      .send({ tags: ['tag1', 'tag2'] })
      .expect('Content-Type', /json/)
      .expect(200);

    const checkRes = await supertest
      .agent(app.getHttpServer())
      .get(`/products/${p.guid}`)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(removeProps(checkRes.body, ['guid'])).toMatchSnapshot();

    p.tags = checkRes.body.tags;
  });

  it('should update a tag', async () => {
    await supertest
      .agent(app.getHttpServer())
      .put(`/products/${p.guid}/update`)
      .send({ tags: ['tag1', 'tag3'] })
      .expect('Content-Type', /json/)
      .expect(200);

    const checkRes = await supertest
      .agent(app.getHttpServer())
      .get(`/products/${p.guid}`)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(removeProps(checkRes.body, ['guid'])).toMatchSnapshot();

    p.tags = checkRes.body.tags;
  });

  it('should delete all tags', async () => {
    await supertest
      .agent(app.getHttpServer())
      .put(`/products/${p.guid}/update`)
      .send({ tags: [] })
      .expect('Content-Type', /json/)
      .expect(200);

    const checkRes = await supertest
      .agent(app.getHttpServer())
      .get(`/products/${p.guid}`)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(removeProps(checkRes.body, ['guid'])).toMatchSnapshot();

    p.tags = checkRes.body.tags;
  });

  it('should delete a variant', async () => {
    const pRes = await supertest
      .agent(app.getHttpServer())
      .put(`/products/${p.guid}/update`)
      .send({ variants: [{ ...p.variants[0], pendingDelete: true }] })
      .expect('Content-Type', /json/)
      .expect(200);

    expect(removeProps(pRes.body, ['guid'])).toMatchSnapshot();

    await prisma.productVariant.deleteMany({});
    await prisma.product.deleteMany({});
  });
});

describe('GET /products/:guid', () => {
  it('should return a single product', async () => {
    const p = {
      name: 'Testing GET single product',
      taxable: true,
      productType: ProductType.INSTRUMENT,
      brand: 'Test Brand',
      description: 'Test Description',
      tags: ['instrument', 'test'],
      variants: [
        {
          filterValues: 'large',
          barcode: '1234567890123',
          supplierCode: 'SUP101',
          buyPrice: 1000,
          buyable: true,
          manageStockLevels: true,
          notes: 'A test variant',
          previousPrice: 2000,
          retailPrice: 1500,
          sellable: true,
          sku: 'INS00001',
          weight: 5,
          weightUnit: WeightUnit.KG,
          stockOnHand: 0,
          movingAverageCost: 500,
        },
      ],
      filterFields: 'size',
      location: 'A1',
    };

    const cs = await supertest
      .agent(app.getHttpServer())
      .post('/products/create')
      .set('Accept', 'application/json')
      .send(p)
      .expect('Content-Type', /json/)
      .expect(201);

    const { body } = await supertest
      .agent(app.getHttpServer())
      .get(`/products/${cs.body.guid}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(removeProps(body, ['guid'])).toMatchSnapshot();

    await prisma.productVariant.deleteMany({});
    await prisma.product.deleteMany({});
  });
});

describe('GET /products', () => {
  it('should return an array of products', async () => {
    await prisma.product.create({
      data: {
        name: 'Testing GET products (product 1)',
        filterFields: 'size',
        location: 'A1',
        productType: ProductType.BOOK,
        brand: 'Test Brand',
        description: 'Test description - product 1',
      },
    });

    await prisma.product.create({
      data: {
        name: 'Testing GET products (product 2)',
        filterFields: 'size',
        location: 'A1',
        productType: ProductType.BOOK,
        brand: 'Test Brand',
        description: 'Test description - product 2',
      },
    });

    // Test /products
    const { body } = await supertest
      .agent(app.getHttpServer())
      .get('/products')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(removeProps(body, ['guid'])).toMatchSnapshot();

    await prisma.product.deleteMany({});
  });
});

describe('GET /products/variants/:sku', () => {
  const p = {
    name: 'Testing GET products by variant sku',
    filterFields: 'size',
    location: 'A1',
    productType: ProductType.BOOK,
    brand: 'Test Brand',
    description: 'Test description',
    variants: [
      {
        filterValues: 'large',
        barcode: '1234567890123',
        supplierCode: 'SUP101',
        buyPrice: 1000,
        buyable: true,
        manageStockLevels: true,
        notes: 'A test variant',
        previousPrice: 2000,
        retailPrice: 1500,
        sellable: true,
        sku: 'INS00001',
        weight: 5,
        weightUnit: WeightUnit.KG,
        stockOnHand: 0,
        movingAverageCost: 500,
      },
    ],
  };

  it('should return no products', async () => {
    await supertest
      .agent(app.getHttpServer())
      .post('/products/create')
      .set('Accept', 'application/json')
      .send(p)
      .expect('Content-Type', /json/)
      .expect(201);

    const { body } = await supertest
      .agent(app.getHttpServer())
      .get('/products/variant/NO_SUCH_SKU')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(removeProps(body, ['guid'])).toMatchSnapshot();
  });

  it('should return a variant', async () => {
    const { body } = await supertest
      .agent(app.getHttpServer())
      .get(`/products/variant/${p.variants[0].sku}/?variantOnly=true`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(removeProps(body, ['guid'])).toMatchSnapshot();
  });

  it('should return a variant map', async () => {
    const { body } = await supertest
      .agent(app.getHttpServer())
      .get(`/products/variants-guid-map`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(body[0]).toBeDefined();
    expect(body[0].guid).toBeDefined();
    expect(body[0].sku).toEqual(p.variants[0].sku);
  });

  it('should return a product', async () => {
    const { body } = await supertest
      .agent(app.getHttpServer())
      .get(`/products/variant/${p.variants[0].sku}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(removeProps(body, ['guid'])).toMatchSnapshot();

    await prisma.productVariant.deleteMany({});
    await prisma.product.deleteMany({});
  });

  describe.skip('GET /products?search', () => {
    const p = {
      name: 'Testing GET products by variant sku',
      filterFields: 'size',
      location: 'A1',
      productType: ProductType.BOOK,
      brand: 'Test Brand',
      description: 'Test description',
      variants: [
        {
          filterValues: 'large',
          barcode: '1234567890123',
          supplierCode: 'SUP101',
          buyPrice: 1000,
          buyable: true,
          manageStockLevels: true,
          notes: 'A test variant',
          previousPrice: 2000,
          retailPrice: 1500,
          sellable: true,
          sku: 'INS00001',
          weight: 5,
          weightUnit: WeightUnit.KG,
          stockOnHand: 0,
          movingAverageCost: 500,
        },
      ],
    };

    it('should return products by partial name, partial sku or barcode', async () => {
      await supertest
        .agent(app.getHttpServer())
        .post('/products/create')
        .set('Accept', 'application/json')
        .send(p)
        .expect('Content-Type', /json/)
        .expect(201);

      // Should return product by partial SKU
      const r1 = await supertest
        .agent(app.getHttpServer())
        .get('/products?search=INS')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(removeProps(r1.body, ['guid'])).toMatchSnapshot();

      // Should return product by partial name
      const r2 = await supertest
        .agent(app.getHttpServer())
        .get('/products?search=Test')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(removeProps(r2.body, ['guid'])).toMatchSnapshot();

      // Should return nothing
      const r3 = await supertest
        .agent(app.getHttpServer())
        .get('/products?search=Wibble')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(removeProps(r3.body, ['guid'])).toMatchSnapshot();

      // Should return product by partial barcode
      const r4 = await supertest
        .agent(app.getHttpServer())
        .get('/products?search=12345')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(removeProps(r4.body, ['guid'])).toMatchSnapshot();

      await prisma.productVariant.deleteMany({});
      await prisma.product.deleteMany({});
    });
  });
});
