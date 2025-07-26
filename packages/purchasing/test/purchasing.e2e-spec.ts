import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { PurchasingModule } from "../src/purchasing/purchasing.module";

import supertest = require("supertest");
import { PrismaService } from "../src/prisma.service";
import { removeProps } from "../src/util";
import { PurchaseOrderLineItemReceipt } from "@prisma/client";

let app: INestApplication;
let prisma: PrismaService;

beforeAll(async () => {
  const module = await Test.createTestingModule({
    imports: [AppModule, PurchasingModule],
  }).compile();

  app = module.createNestApplication();
  prisma = app.get<PrismaService>(PrismaService);
  await app.init();
});

afterAll(async () => {
  await app.close();
});

describe("POST /purchasing/create", () => {
  it("should create a single purchaseOrder", async () => {
    const po = {
      number: "PO0001",
      state: "draft",
      lineItems: [
        {
          variantSku: "BOK00001",
          itemCost: 1000,
          variantTaxRate: 0,
          quantityOrdered: 10,
          description: "variant 1 description",
        },
        {
          variantSku: "BOK00002",
          itemCost: 1000,
          variantTaxRate: 0,
          quantityOrdered: 10,
          description: "variant 2 description",
        },
      ],
      subTotal: 20000,
      taxAmount: 0,
      total: 20000,
    };

    const cs = await supertest
      .agent(app.getHttpServer())
      .post("/purchasing/create")
      .set("Accept", "application/json")
      .send(po)
      .expect("Content-Type", /json/)
      .expect(201);

    const qs = await supertest
      .agent(app.getHttpServer())
      .get(`/purchasing/${cs.body.guid}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(removeProps(qs.body, ["guid"])).toMatchSnapshot();

    await prisma.purchaseOrderLineItem.deleteMany({});
    await prisma.purchaseOrder.deleteMany({});
    await prisma.supplier.deleteMany({});
  });
});

describe("PUT /purchasing/{guid}/update", () => {
  it("should create and update a single purchaseOrder", async () => {
    const supplier1 = await supertest
      .agent(app.getHttpServer())
      .post("/supplier/create")
      .set("Accept", "application/json")
      .send({ name: "Test Supplier 1" })
      .expect("Content-Type", /json/)
      .expect(201);

    const supplier2 = await supertest
      .agent(app.getHttpServer())
      .post("/supplier/create")
      .set("Accept", "application/json")
      .send({ name: "Test Supplier 2" })
      .expect("Content-Type", /json/)
      .expect(201);

    const po = {
      number: "PO0001",
      state: "draft",
      supplier: {
        guid: supplier1.body.guid,
      },
      lineItems: [
        {
          variantSku: "BOK00001",
          itemCost: 1000,
          variantTaxRate: 0,
          quantityOrdered: 10,
          description: "variant 1 description",
        },
        {
          variantSku: "BOK00002",
          itemCost: 1000,
          variantTaxRate: 0,
          quantityOrdered: 10,
          description: "variant 2 description",
        },
      ],
      subTotal: 20000,
      taxAmount: 0,
      total: 20000,
    };

    // Create it
    const cs = await supertest
      .agent(app.getHttpServer())
      .post("/purchasing/create")
      .set("Accept", "application/json")
      .send(po)
      .expect("Content-Type", /json/)
      .expect(201);

    const qs1 = await supertest
      .agent(app.getHttpServer())
      .get(`/purchasing/${cs.body.guid}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    // Update it - set the PO to active, delete the first line item, change the second
    // and add a third.
    qs1.body.state = "active";
    qs1.body.supplier = { guid: supplier2.body.guid };
    qs1.body.lineItems[0]["pendingDelete"] = true;
    qs1.body.lineItems[1].quantityOrdered = 5;
    qs1.body.lineItems.push({
      variantSku: "BOK00003",
      itemCost: 1000,
      variantTaxRate: 0,
      quantityOrdered: 10,
      description: "variant 3 description",
    });

    await supertest
      .agent(app.getHttpServer())
      .put(`/purchasing/${cs.body.guid}/update`)
      .set("Accept", "application/json")
      .send(removeProps(qs1.body, ["purchaseOrderId", "supplierId"]))
      .expect("Content-Type", /json/)
      .expect(200);

    const qs2 = await supertest
      .agent(app.getHttpServer())
      .get(`/purchasing/${qs1.body.guid}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(removeProps(qs2.body, ["guid"])).toMatchSnapshot();

    await prisma.purchaseOrderLineItem.deleteMany({});
    await prisma.purchaseOrder.deleteMany({});
    await prisma.supplier.deleteMany({});
  });
});

describe("POST /receive", () => {
  let cs, qs, polics, poliqs, rcs;

  it("should create a PO with no receipts", async () => {
    const po = {
      number: "RECEIVETESTPO",
      state: "active",
      lineItems: [
        {
          variantSku: "BOK00001",
          itemCost: 1000,
          variantTaxRate: 0,
          quantityOrdered: 2,
          description: "variant 1 description",
        },
      ],
      subTotal: 1000,
      taxAmount: 0,
      total: 1000,
    };

    cs = await supertest
      .agent(app.getHttpServer())
      .post("/purchasing/create")
      .set("Accept", "application/json")
      .send(po)
      .expect("Content-Type", /json/)
      .expect(201);
  });

  it("should have successfully written that PO", async () => {
    qs = await supertest
      .agent(app.getHttpServer())
      .get(`/purchasing/${cs.body.guid}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(removeProps(qs.body, ["guid"])).toMatchSnapshot();
  });

  it("should add a receipt to the PO", async () => {
    const testReceipt: PurchaseOrderLineItemReceipt = {
      id: undefined,
      guid: undefined,
      purchaseOrderLineItemId: undefined,
      date: new Date("25/5/2022"),
      received: 1, // Partial receipt (1 of 2)
      receivedPrice: 500, // Lower price
    };

    rcs = await supertest
      .agent(app.getHttpServer())
      .post("/purchasing/receipt")
      .set("Accept", "application/json")
      .send([{ poli: qs.body.lineItems[0], receipt: testReceipt }])
      .expect("Content-Type", /json/)
      .expect(201);

    expect(removeProps(rcs.body, ["date", "guid"])).toMatchSnapshot();
  });

  it("should now include the receipt when retrieving the PO", async () => {
    poliqs = await supertest
      .agent(app.getHttpServer())
      .get(`/purchasing/${qs.body.guid}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(removeProps(poliqs.body, ["date", "guid"])).toMatchSnapshot();
  });

  it("should remove the receipt from the PO", async () => {
    polics = await supertest
      .agent(app.getHttpServer())
      .delete(`/purchasing/receipt/${rcs.body.results[0].guid}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(removeProps(polics.body, ["date", "guid"])).toMatchSnapshot();
  });

  it("should have restored the PO to before any receipts were added", async () => {
    poliqs = await supertest
      .agent(app.getHttpServer())
      .get(`/purchasing/${qs.body.guid}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(removeProps(poliqs.body, ["date", "guid"])).toMatchSnapshot();

    // Cleanup
    await prisma.purchaseOrderLineItemReceipt.deleteMany({});
    await prisma.purchaseOrderLineItem.deleteMany({});
    await prisma.purchaseOrder.deleteMany({});
  });
});

describe("POST /purchasing/{guid}/syncToXero", () => {
  it("should set pendingXero to false", async () => {
    const supplier1 = await supertest
      .agent(app.getHttpServer())
      .post("/supplier/create")
      .set("Accept", "application/json")
      .send({ name: "Test Supplier 1" })
      .expect("Content-Type", /json/)
      .expect(201);

    const po = {
      number: "PO0001",
      state: "draft",
      supplier: {
        guid: supplier1.body.guid,
      },
      lineItems: [
        {
          variantSku: "BOK00001",
          itemCost: 1000,
          variantTaxRate: 0,
          quantityOrdered: 10,
          description: "variant 1 description",
        },
        {
          variantSku: "BOK00002",
          itemCost: 1000,
          variantTaxRate: 0,
          quantityOrdered: 10,
          description: "variant 2 description",
        },
      ],
      subTotal: 20000,
      taxAmount: 0,
      total: 20000,
    };

    // Create it
    const cs = await supertest
      .agent(app.getHttpServer())
      .post("/purchasing/create")
      .set("Accept", "application/json")
      .send(po)
      .expect("Content-Type", /json/)
      .expect(201);

    expect(removeProps(cs.body, ["guid"])).toMatchSnapshot();

    const afterCall = await supertest
      .agent(app.getHttpServer())
      .put(`/purchasing/${cs.body.guid}/syncedToXero`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(removeProps(afterCall.body, ["guid"])).toMatchSnapshot();
  });
});
