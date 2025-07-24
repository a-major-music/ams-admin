import { createMock } from "@golevelup/ts-jest";
import { Test, TestingModule } from "@nestjs/testing";
import { OrderProcessorController } from "./order-processor.controller";
import { OrderProcessorService } from "./order-processor.service";

describe("OrderProcessorController", () => {
  let controller: OrderProcessorController;
  const mockService: OrderProcessorService =
    createMock<OrderProcessorService>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: OrderProcessorService,
          useValue: mockService,
        },
      ],

      controllers: [OrderProcessorController],
    }).compile();

    controller = module.get<OrderProcessorController>(OrderProcessorController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
