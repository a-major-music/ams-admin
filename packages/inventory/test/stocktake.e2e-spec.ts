import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { Stocktake } from '@amm/types';
import supertest = require('supertest');
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma.service';
import { removeProps } from './util';

import { Product, ProductType } from '@amm/types';
import { ProductModule } from '../src/product/product.module';
import { StocktakeModule } from '../src/stocktake/stocktake.module';

let app: INestApplication;
let prisma: PrismaService;
let testProduct: Product;

beforeAll(async () => {
  const module = await Test.createTestingModule({
    imports: [AppModule, StocktakeModule, ProductModule],
  }).compile();

  app = module.createNestApplication();
  prisma = app.get<PrismaService>(PrismaService);
  await app.init();

  testProduct = _createTestProduct();

  console.log(testProduct);
});

afterAll(async () => {
  prisma.product.deleteMany({});
  await app.close();
});

const _createTestProduct = () => {
  return prisma.product.create({
    data: {
      name: 'Testing Stocktake',
      taxable: true,
      productType: ProductType.INSTRUMENT,
      brand: 'Test Brand',
      description: 'Test Description',
      variants: {
        create: [
          {
            filterValues: 'small',
            notes: 'A small test variant',
            retailPrice: 1500,
            sku: 'INS00001-1',
            stockOnHand: 0,
            weight: 1,
            weightUnit: 'Kg',
            manageStockLevels: true,
            buyPrice: 750,
          },
          {
            filterValues: 'medium',
            notes: 'A medium test variant',
            retailPrice: 1500,
            sku: 'INS00001-2',
            stockOnHand: 0,
            weight: 1,
            weightUnit: 'Kg',
            manageStockLevels: true,
            buyPrice: 750,
          },
          {
            filterValues: 'large',
            notes: 'A large test variant',
            retailPrice: 1500,
            sku: 'INS00001-3',
            stockOnHand: 0,
            weight: 1,
            weightUnit: 'Kg',
            manageStockLevels: true,
            buyPrice: 750,
          },
        ],
      },
      filterFields: 'size',
      location: 'A1',
    },
  });
};

describe('POST /stocktake/save', () => {
  afterAll(async () => {
    await prisma.stocktake.deleteMany({});
  });

  it('should save a minimal stocktake', async () => {
    const s: Stocktake = {
      location: 'TEST',
      lines: [
        {
          count: 1,
          variant: testProduct.variants[0],
        },
      ],
    };

    await supertest
      .agent(app.getHttpServer())
      .post(`/stocktake/save/${s.location}`)
      .set('Accept', 'application/json')
      .send(s.lines)
      .expect('Content-Type', /json/)
      .expect(201);

    const qs = await supertest
      .agent(app.getHttpServer())
      .get(`/stocktake/findByLocation/${s.location}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(removeProps(JSON.parse(qs.text), ['id', 'guid'])).toMatchSnapshot();
  });
});

describe.skip('GET /stocktake', () => {
  const mocks: Stocktake[] = [
    {
      location: 'LOC1',
      lines: [
        {
          variant: testProduct.variants[0],
          count: 1,
        },
      ],
    },
    {
      location: 'LOC2',
      lines: [
        {
          variant: testProduct.variants[1],
          count: 1,
        },
      ],
    },
  ];

  beforeAll(async () => {
    await Promise.all(
      mocks.map((mock) => {
        return supertest
          .agent(app.getHttpServer())
          .post(`/stocktake/save/${mock.location}`)
          .set('Accept', 'application/json')
          .send(mock.lines)
          .expect('Content-Type', /json/)
          .expect(201);
      }),
    );
  });

  afterAll(async () => {
    await prisma.stocktake.deleteMany({});
  });

  it('should return all stocktakes', async () => {
    const qs = await supertest
      .agent(app.getHttpServer())
      .get(`/stocktake/`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(removeProps(JSON.parse(qs.text), ['id', 'guid'])).toMatchSnapshot();
  });

  it('should return one stocktake', async () => {
    const qs = await supertest
      .agent(app.getHttpServer())
      .get(`/stocktake/findByLocation/${mocks[1].location}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(removeProps(JSON.parse(qs.text), ['id', 'guid'])).toMatchSnapshot();
  });
});

describe.skip('POST /stocktake/save', () => {
  const mock = {
    location: 'LOC1',
    lines: [
      {
        variant: testProduct.variants[0],
        count: 1,
      },
    ],
  };

  beforeAll(async () => {
    await supertest
      .agent(app.getHttpServer())
      .post(`/stocktake/save/${mock.location}`)
      .set('Accept', 'application/json')
      .send(mock.lines)
      .expect('Content-Type', /json/)
      .expect(201);
  });

  afterAll(async () => {
    await prisma.stocktake.deleteMany({});
  });

  it('should update count of INS0001', async () => {
    mock.lines[0].count += 1;
    const qs = await supertest
      .agent(app.getHttpServer())
      .post(`/stocktake/save/${mock.location}`)
      .set('Accept', 'application/json')
      .send(mock.lines)
      .expect('Content-Type', /json/)
      .expect(201);

    expect(removeProps(JSON.parse(qs.text), ['id', 'guid'])).toMatchSnapshot();
  });

  it('should add new count for INS0002', async () => {
    mock.lines.push({ variant: { id: 2 }, count: 2 });
    const qs = await supertest
      .agent(app.getHttpServer())
      .post(`/stocktake/save/${mock.location}`)
      .set('Accept', 'application/json')
      .send(mock.lines)
      .expect('Content-Type', /json/)
      .expect(201);

    expect(removeProps(JSON.parse(qs.text), ['id', 'guid'])).toMatchSnapshot();
  });

  it('should add new count for INS0003', async () => {
    mock.lines.push({ variant: testProduct.variants[0], count: 3 });
    const qs = await supertest
      .agent(app.getHttpServer())
      .post(`/stocktake/save/${mock.location}`)
      .set('Accept', 'application/json')
      .send(mock.lines)
      .expect('Content-Type', /json/)
      .expect(201);

    expect(removeProps(JSON.parse(qs.text), ['id', 'guid'])).toMatchSnapshot();
  });
});

describe.skip('DELETE /stocktake', () => {
  const mocks = [
    {
      location: 'LOC1',
      lines: [
        {
          variant: testProduct.variants[0],
          count: 1,
        },
      ],
    },
    {
      location: 'LOC2',
      lines: [
        {
          variant: testProduct.variants[1],
          count: 2,
        },
      ],
    },
  ];

  beforeAll(async () => {
    await Promise.all(
      mocks.map((mock) => {
        return supertest
          .agent(app.getHttpServer())
          .post(`/stocktake/save/${mock.location}`)
          .set('Accept', 'application/json')
          .send(mock.lines)
          .expect('Content-Type', /json/)
          .expect(201);
      }),
    );
  });

  afterAll(async () => {
    await prisma.stocktake.deleteMany({});
  });

  it('should delete the first stock take only', async () => {
    await supertest
      .agent(app.getHttpServer())
      .delete(`/stocktake/delete/${mocks[0].location}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    const qs = await supertest
      .agent(app.getHttpServer())
      .get(`/stocktake/`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(removeProps(JSON.parse(qs.text), ['id', 'guid'])).toMatchSnapshot();
  });
});
