import { Injectable, Logger } from "@nestjs/common";
import { PurchasingService } from "./purchasing.service";
import { clc } from "@nestjs/common/utils/cli-colors.util";
import { PurchaseOrder } from "@amm/types";

@Injectable()
export class PurchasingCSV {
  private readonly logger = new Logger(PurchasingCSV.name);

  constructor(private purchasingService: PurchasingService) {}

  async CSVfromPO(poNumber: string) {
    this.logger.log(`Generating CSV for ${clc.cyanBright(poNumber)}`);

    const po = (await this.purchasingService.findByPoNumber(
      poNumber
    )) as unknown as PurchaseOrder;

    switch (po.supplier.guid) {
      case "d593b10e-5f2d-4f8f-96eb-a1dcb1baca6d": // Hal Leonard Europe
        return this._generateHalLeonard(po);
      default:
        return this._generateGeneric(po);
    }
  }

  _generateHalLeonard(po: PurchaseOrder) {
    let csvData = "ProductId,Quantity\n";

    for (let i = 0; i < po.lineItems.length; i++) {
      const li = po.lineItems[i];
      const supplierCode = li.variantSupplierCode
        ? li.variantSupplierCode
        : li.variantUPC
        ? li.variantUPC
        : "** NO UPC FOUND FOR " + li.variantSku;

      csvData += supplierCode + "," + li.quantityOrdered + "\n";
    }

    return csvData;
  }

  _generateGeneric(po: PurchaseOrder) {
    let csvData = "guid,variantGuid,sku,supplierCode,upc,quantity\n";

    for (let i = 0; i < po.lineItems.length; i++) {
      const li = po.lineItems[i];
      csvData +=
        li.guid +
        "," +
        li.variantGuid +
        "," +
        li.variantSku +
        "," +
        li.variantSupplierCode +
        "," +
        li.variantUPC +
        "," +
        li.quantityOrdered +
        "\n";
    }

    return csvData;
  }
}
