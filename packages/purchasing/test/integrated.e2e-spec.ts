import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { PrismaService } from "../src/prisma.service";
import { PurchasingModule } from "../src/purchasing/purchasing.module";
import { SupplierModule } from "../src/supplier/supplier.module";
import supertest = require("supertest");
import { removeProps } from "../src/util";

let app: INestApplication;
let prisma: PrismaService;

beforeAll(async () => {
  const module = await Test.createTestingModule({
    imports: [AppModule, PurchasingModule, SupplierModule],
  }).compile();

  app = module.createNestApplication();
  prisma = app.get<PrismaService>(PrismaService);
  await app.init();
});

afterAll(async () => {
  await app.close();
});

describe("when creating a purchase order", () => {
  it("should create a new supplier and link the PO", async () => {
    const s = {
      name: "Testing create supplier",
      website: "https://nowhere.com",
      address: {
        address1: "Address 1",
        city: "City",
        postcode: "XXX",
      },
      contacts: [
        {
          name: "Testing create supplier (contact)",
        },
      ],
    };

    // Create a supplier
    const sR = await supertest
      .agent(app.getHttpServer())
      .post("/supplier/create")
      .set("Accept", "application/json")
      .send(s)
      .expect("Content-Type", /json/)
      .expect(201);

    const po = {
      number: "PO0001",
      state: "draft",
      lineItems: [
        {
          variantSku: "BOK00001",
          variantTaxRate: 20,
          itemCost: 1000,
          quantityOrdered: 10,
          description: "",
        },
      ],
      supplier: sR.body,
      subTotal: 10000,
      taxAmount: 2000,
      total: 12000,
    };

    const saved = await supertest
      .agent(app.getHttpServer())
      .post("/purchasing/create")
      .set("Accept", "application/json")
      .send(po)
      .expect("Content-Type", /json/)
      .expect(201);

    // Now get the PO back, by GUID.
    const testR = await supertest
      .agent(app.getHttpServer())
      .get(`/purchasing/${saved.body.guid}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(removeProps(testR.body, ["guid"])).toMatchSnapshot();

    await prisma.purchaseOrderLineItem.deleteMany({});
    await prisma.purchaseOrder.deleteMany({});
    await prisma.supplier.deleteMany({});
  });

  // it("should have a supplier", () => {});
  // it("the supplier should have contact details", () => {});
});
