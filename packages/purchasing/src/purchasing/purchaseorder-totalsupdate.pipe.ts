import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

import { PurchaseOrder, PurchaseOrderLineItem } from "@amm/types";

import _ = require("lodash");

/**
 * This pipe updates the total, subTotal and taxAmount values in the PO based on the PO line items. When used on create
 * or update it ensures that the values within are always correct.
 */
@Injectable()
export class PurchaseOrderTotalsUpdatePipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: any, metadata: ArgumentMetadata) {
    const po: PurchaseOrder = value;

    if (_.isEmpty(po.lineItems)) {
      po.total = po.subTotal = po.taxAmount = 0;
      return po;
    }

    // nb. buyPrice NEVER includes tax, so subtotal is sum of buyPrice
    const subTotal = po.lineItems
      .map((i: PurchaseOrderLineItem) => i.itemCost * i.quantityOrdered)
      .reduce((a, b) => a + b);

    const taxAmount = po.lineItems
      .map((i: PurchaseOrderLineItem) =>
        Math.round((i.variantTaxRate / 100) * i.itemCost * i.quantityOrdered)
      )
      .reduce((a, b) => a + b);

    const total = subTotal + taxAmount;

    po.subTotal = subTotal;
    po.taxAmount = taxAmount;
    po.total = total;

    return po;
  }
}
