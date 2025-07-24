import { createMock } from "@golevelup/ts-jest";
import { Test, TestingModule } from "@nestjs/testing";
import { NextNumber } from "@prisma/client";
import { NextNumberController } from "./next-number.controller";
import { NextNumberService } from "./next-number.service";

describe("NextNumberController", () => {
  let controller: NextNumberController;
  const mockService: NextNumberService = createMock<NextNumberService>();
  const mockName = "TEST";
  const mockNextNumber: NextNumber = createMock<NextNumber>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: NextNumberService,
          useValue: mockService,
        },
      ],
      controllers: [NextNumberController],
    }).compile();

    controller = module.get<NextNumberController>(NextNumberController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("when calling next number", () => {
    beforeAll(() => {
      controller.getNext(mockName);
    });
    it("it should call get of service", () => {
      expect(mockService.getNext).toHaveBeenCalledWith(mockName);
    });
  });
});
