import { createMock } from "@golevelup/ts-jest";
import { Test, TestingModule } from "@nestjs/testing";
import { SupplierController } from "./supplier.controller";
import { SupplierService } from "./supplier.service";

describe("SupplierController", () => {
  let controller: SupplierController;
  const mockService: SupplierService = createMock<SupplierService>();
  const mockGuid: string = "abcd";

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: SupplierService,
          useValue: mockService,
        },
      ],
      controllers: [SupplierController],
    }).compile();

    controller = module.get<SupplierController>(SupplierController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("when we find many", () => {
    beforeAll(() => {
      controller.findAll();
    });
    it("should call the service", () => {
      expect(mockService.findMany).toBeCalledWith({});
    });
  });

  describe("when we count them", () => {
    beforeAll(() => {
      controller.countSuppliers();
    });
    it("should call the service", () => {
      expect(mockService.countSuppliers).toBeCalled();
    });
  });

  describe("when we find a supplier by guid", () => {
    beforeAll(() => {
      controller.findByGuid(mockGuid);
    });
    it("should call the service", () => {
      expect(mockService.findByGuid).toBeCalledWith(mockGuid);
    });
  });

  describe("when we find a supplier by name", () => {
    beforeAll(() => {
      controller.findAll();
    });
    it("should call the service", () => {
      expect(mockService.findMany).toBeCalled();
    });
  });

  describe("when we delete a supplier", () => {
    beforeAll(() => {
      controller.delete(mockGuid);
    });
    it("should call the service", () => {
      expect(mockService.delete).toBeCalledWith(mockGuid);
    });
  });
});
