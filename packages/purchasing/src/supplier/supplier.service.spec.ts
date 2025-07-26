import { createMock } from "@golevelup/ts-jest";
import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "src/prisma.service";
import { SupplierService } from "./supplier.service";

describe("SupplierService", () => {
  let service: SupplierService;

  beforeEach(async () => {
    const mockPrisma: PrismaService = await createMock<PrismaService>();
    const supplierService: SupplierService = new SupplierService(mockPrisma);

    const module: TestingModule = await Test.createTestingModule({
      providers: [{ provide: SupplierService, useValue: supplierService }],
    }).compile();

    service = module.get<SupplierService>(SupplierService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
