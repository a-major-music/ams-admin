import { Test, TestingModule } from "@nestjs/testing";
import { PurchasingController } from "./purchasing.controller";
import { PurchasingService } from "./purchasing.service";
import { createMock } from "@golevelup/ts-jest";
import {
  PurchaseOrder,
  PurchaseOrderLineItem,
  PurchaseOrderLineItemReceipt,
} from "@prisma/client";
import { PurchasingPDF } from "./purchasing-pdf.service";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { PurchasingCSV } from "./purchasing-csv.service";

describe("PurchasingController", () => {
  let controller: PurchasingController;
  const mockService: PurchasingService = createMock<PurchasingService>();
  const mockGuid = "fake-guid";
  const mockStatus = "draft";
  const mockPoNumber = "fake-po-number";
  const mockPoLineItem: PurchaseOrderLineItem =
    createMock<PurchaseOrderLineItem>();
  const mockPOLineItemReceipt: PurchaseOrderLineItemReceipt =
    createMock<PurchaseOrderLineItemReceipt>();
  const mockPurchaseOrder: PurchaseOrder = createMock<PurchaseOrder>();
  const mockPurchasingPDF: PurchasingPDF = createMock<PurchasingPDF>();
  const mockPurchasingCSV: PurchasingCSV = createMock<PurchasingCSV>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PurchasingService,
          useValue: mockService,
        },
        {
          provide: PurchasingPDF,
          useValue: mockPurchasingPDF,
        },
        {
          provide: PurchasingCSV,
          useValue: mockPurchasingCSV,
        },
        EventEmitter2,
      ],
      controllers: [PurchasingController],
    }).compile();

    controller = module.get<PurchasingController>(PurchasingController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("when we find all", () => {
    beforeAll(() => {
      controller.findAll();
    });
    it("should call the service", () => {
      expect(mockService.findMany).toBeCalled();
    });
  });

  describe("when we count them", () => {
    beforeAll(() => {
      controller.countPurchaseOrders();
    });
    it("should call the service", () => {
      expect(mockService.countPurchaseOrders).toBeCalled();
    });
  });

  describe("when we find an item by guid", () => {
    beforeAll(() => {
      controller.findByGuid(mockGuid);
    });
    it("should call the service", () => {
      expect(mockService.findByGuid).toBeCalledWith(mockGuid);
    });
  });

  describe("when we find an item by po number", () => {
    beforeAll(() => {
      controller.findByPoNumber(mockPoNumber);
    });
    it("should call the service", () => {
      expect(mockService.findByPoNumber).toBeCalledWith(mockPoNumber);
    });
  });

  describe("when we find an item by supplier guid", () => {
    beforeAll(() => {
      controller.findBySupplierGuid(mockGuid, mockStatus);
    });
    it("should call the service", () => {
      expect(mockService.findBySupplier).toBeCalledWith(mockGuid, mockStatus);
    });
  });

  describe("when we create a purchase order", () => {
    beforeAll(() => {
      controller.create(mockPurchaseOrder);
    });
    it("should call the service", () => {
      expect(mockService.create).toBeCalledWith(mockPurchaseOrder);
    });
  });

  describe("when we update a purchase order", () => {
    let changed: PurchaseOrder;

    beforeAll(() => {
      changed = { state: "active", guid: "abcde", ...mockPurchaseOrder };
      controller.update(changed.guid, changed);
    });
    it("should call the service", () => {
      expect(mockService.update).toBeCalledWith({
        where: { guid: changed.guid },
        data: changed,
      });
    });
  });

  describe("when we delete a purchase order", () => {
    beforeAll(() => {
      controller.delete(mockGuid);
    });
    it("should call the service", () => {
      expect(mockService.delete).toBeCalledWith(mockGuid);
    });
  });

  describe("when we send a PO to Xero", () => {
    beforeAll(() => {
      controller.syncedToXero(mockGuid);
    });
    it("should call the service", () => {
      expect(mockService.update).toBeCalledWith({
        where: { guid: mockGuid },
        data: { pendingXero: false },
      });
    });
  });

  describe.skip("when we receive a product", () => {
    beforeAll(() => {
      controller.receive([
        { poli: mockPoLineItem, receipt: mockPOLineItemReceipt },
      ]);
    });
    it("should call the service", () => {
      expect(mockService.receive).toBeCalledWith(
        mockPoLineItem.guid,
        mockPOLineItemReceipt
      );
    });
  });
});
