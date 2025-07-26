import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { SupplierModule } from "../src/supplier/supplier.module";

import supertest = require("supertest");
import { PrismaService } from "../src/prisma.service";
import { removeProps } from "../src/util";
import { createMock } from "@golevelup/ts-jest";

import { Address } from "@amm/types";

let app: INestApplication;
let prisma: PrismaService;

beforeAll(async () => {
  const module = await Test.createTestingModule({
    imports: [AppModule, SupplierModule],
  }).compile();

  app = module.createNestApplication();
  prisma = app.get<PrismaService>(PrismaService);
  await app.init();
});

afterAll(async () => {
  await app.close();
});

describe("POST /supplier/create", () => {
  it("should create a single supplier", async () => {
    const s = {
      name: "Testing create supplier",
      website: "https://nowhere.com",
      address: createMock<Address>(),
      contacts: [
        {
          name: "Testing create supplier (contact)",
        },
      ],
    };

    const cs = await supertest
      .agent(app.getHttpServer())
      .post("/supplier/create")
      .set("Accept", "application/json")
      .send(s)
      .expect("Content-Type", /json/)
      .expect(201);

    const qs = await supertest
      .agent(app.getHttpServer())
      .get(`/supplier/${cs.body.guid}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(removeProps(qs.body, ["guid"])).toMatchSnapshot();

    await prisma.address.deleteMany({});
    await prisma.contact.deleteMany({});
    await prisma.supplier.deleteMany({});
  });
});
