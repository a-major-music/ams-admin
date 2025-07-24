import { createMock } from "@golevelup/ts-jest";
import { HttpService } from "@nestjs/axios";
import { Test, TestingModule } from "@nestjs/testing";
import { OrderProcessorService } from "./order-processor.service";

describe("OrderProcessorService", () => {
  let service: OrderProcessorService;

  beforeEach(async () => {
    const mockHttpService: HttpService = await createMock<HttpService>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: OrderProcessorService, useValue: mockHttpService },
      ],
    }).compile();

    service = module.get<OrderProcessorService>(OrderProcessorService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
