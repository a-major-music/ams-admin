import { createMock } from "@golevelup/ts-jest";
import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "src/prisma.service";
import { PurchasingService } from "./purchasing.service";

describe.skip("PurchasingService", () => {
  let service: PurchasingService;

  beforeEach(async () => {
    const mockPrisma: PrismaService = await createMock<PrismaService>();
    const purchasingService = new PurchasingService(mockPrisma);

    const module: TestingModule = await Test.createTestingModule({
      providers: [{ provide: PurchasingService, useValue: purchasingService }],
    }).compile();

    service = module.get<PurchasingService>(PurchasingService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
