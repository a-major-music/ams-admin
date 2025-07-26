import { Logger, Injectable } from "@nestjs/common";
import { clc } from "@nestjs/common/utils/cli-colors.util";
import { PurchasingService } from "./purchasing.service";
import { AMMDocPdf } from "@amm/amm-doc";
import { PurchaseOrder } from "@amm/types";

@Injectable()
export class PurchasingPDF {
  private readonly logger = new Logger(PurchasingPDF.name);

  constructor(
    private purchasingService: PurchasingService,
    private readonly AMMDocPdf: AMMDocPdf
  ) {}

  private formatDate(date: Date): string {
    const d = date.toDateString().split(" ");
    return `${d[2]} ${d[1]} ${d[3]}`;
  }

  private getOrderInfo(po: PurchaseOrder) {
    return [
      ["Order Number", po.number],
      ["VAT Number", "GB127754595"],
      ["Issue Date", this.formatDate(po.issueDate)],
    ];
  }
  currencyFormatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
  });

  private getSummary(po: PurchaseOrder) {
    const totalUnits = po.lineItems
      .map((i) => i.quantityOrdered)
      .reduce((a, b) => a + b);
    return [
      ["TOTAL UNITS", `${totalUnits}`],
      ["SUBTOTAL", this.currencyFormatter.format(+po.subTotal / 100)],
      ["PLUS VAT (20%)", this.currencyFormatter.format(+po.taxAmount / 100)],
      [
        "TOTAL (GBP)",
        this.currencyFormatter.format((+po.taxAmount + +po.subTotal) / 100),
      ],
    ];
  }

  private getSupplier(po: PurchaseOrder) {
    const addr = [
      po.supplier.name,
      po.supplier.address?.address1,
      po.supplier.address?.address2,
      po.supplier.address?.address3,
      po.supplier.address?.city,
      po.supplier.address?.postcode,
    ];
    return addr.filter(
      (item) => item !== undefined && item !== null && item !== ""
    );
  }

  private getOrderItems(po: PurchaseOrder) {
    return po.lineItems.map((item) => {
      return [
        item.variantMediaURI,
        item.variantSupplierCode,
        item.variantUPC,
        item.description,
        item.quantityOrdered,
        item.variantTaxRate,
        this.currencyFormatter.format(
          (+item.itemCost * +item.quantityOrdered) / 100
        ),
      ];
    });
  }

  async PDFfromPO(poNumber: string) {
    this.logger.log(`Generating PDF for ${clc.cyanBright(poNumber)}`);

    const purchaseOrder = (await this.purchasingService.findByPoNumber(
      poNumber
    )) as unknown as PurchaseOrder;
    const orderInfo = this.getOrderInfo(purchaseOrder);
    const orderItems = this.getOrderItems(purchaseOrder);
    const orderSummary = this.getSummary(purchaseOrder);
    const supplier = this.getSupplier(purchaseOrder);

    return this.AMMDocPdf.getPDF(orderInfo, orderItems, orderSummary, supplier);
  }
}
