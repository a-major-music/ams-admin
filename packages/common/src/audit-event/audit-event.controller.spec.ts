import { createMock } from "@golevelup/ts-jest";
import { Test, TestingModule } from "@nestjs/testing";
import { AuditEventController } from "./audit-event.controller";
import { AuditEventService } from "./audit-event.service";

describe("AuditEventController", () => {
  let controller: AuditEventController;
  const mockService: AuditEventService = createMock<AuditEventService>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuditEventController],
      providers: [
        {
          provide: AuditEventService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<AuditEventController>(AuditEventController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
