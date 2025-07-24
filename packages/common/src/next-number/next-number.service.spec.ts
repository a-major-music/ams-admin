import { createMock } from "@golevelup/ts-jest";
import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "src/prisma.service";
import { NextNumberService } from "./next-number.service";

describe("NextNumberService", () => {
  let service: NextNumberService;

  beforeEach(async () => {
    const mockPrisma: PrismaService = await createMock<PrismaService>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [{ provide: NextNumberService, useValue: mockPrisma }],
    }).compile();

    service = module.get<NextNumberService>(NextNumberService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
