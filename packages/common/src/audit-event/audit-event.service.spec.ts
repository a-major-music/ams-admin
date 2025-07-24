import { createMock } from "@golevelup/ts-jest";
import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../prisma.service";
import { AuditEventService } from "./audit-event.service";

describe("AuditEventService", () => {
  let service: AuditEventService;

  beforeEach(async () => {
    const mockPrisma: PrismaService = await createMock<PrismaService>();
    const auditEventService = new AuditEventService(mockPrisma);

    const module: TestingModule = await Test.createTestingModule({
      providers: [{ provide: AuditEventService, useValue: auditEventService }],
    }).compile();

    service = module.get<AuditEventService>(AuditEventService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
