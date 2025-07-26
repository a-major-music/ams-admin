import { PurchaseOrderTotalsUpdatePipe } from "./purchaseorder-totalsupdate.pipe";

const testInput = [
  // Case 1: one zero tax item
  [
    {
      lineItems: [
        {
          quantityOrdered: 1,
          itemCost: 10,
          variantTaxRate: 0,
        },
      ],
    },
    {
      lineItems: [
        {
          quantityOrdered: 1,
          itemCost: 10,
          variantTaxRate: 0,
        },
      ],
      total: 10,
      subTotal: 10,
      taxAmount: 0,
    },
  ],
  // Case 2: more zero tax items
  [
    {
      lineItems: [
        {
          quantityOrdered: 5,
          itemCost: 10,
          variantTaxRate: 0,
        },
      ],
    },
    {
      lineItems: [
        {
          quantityOrdered: 5,
          itemCost: 10,
          variantTaxRate: 0,
        },
      ],
      total: 50,
      subTotal: 50,
      taxAmount: 0,
    },
  ],
  // Case 3: more variantTaxRate items
  [
    {
      lineItems: [
        {
          quantityOrdered: 5,
          itemCost: 10,
          variantTaxRate: 20,
        },
      ],
    },
    {
      lineItems: [
        {
          quantityOrdered: 5,
          itemCost: 10,
          variantTaxRate: 20,
        },
      ],
      total: 60,
      subTotal: 50,
      taxAmount: 10,
    },
  ],
  // Case 4: mixed items - variantTaxRate and not
  [
    {
      lineItems: [
        {
          quantityOrdered: 5,
          itemCost: 10,
          variantTaxRate: 0,
        },
        {
          quantityOrdered: 5,
          itemCost: 10,
          variantTaxRate: 20,
        },
      ],
    },
    {
      lineItems: [
        {
          quantityOrdered: 5,
          itemCost: 10,
          variantTaxRate: 0,
        },
        {
          quantityOrdered: 5,
          itemCost: 10,
          variantTaxRate: 20,
        },
      ],
      total: 110,
      subTotal: 100,
      taxAmount: 10,
    },
  ],
  // Case 5: fractional tax rates
  [
    {
      lineItems: [
        {
          quantityOrdered: 6,
          itemCost: 599,
          variantTaxRate: 20,
        },
      ],
    },
    {
      lineItems: [
        {
          quantityOrdered: 6,
          itemCost: 599,
          variantTaxRate: 20,
        },
      ],
      total: 4313,
      subTotal: 3594,
      taxAmount: 719,
    },
  ],
];

describe("PurchaseOrderTotalsUpdatePipe", () => {
  const pipe: PurchaseOrderTotalsUpdatePipe =
    new PurchaseOrderTotalsUpdatePipe();

  it("should calculate totals correctly", () => {
    testInput.forEach((i) => {
      expect(pipe.transform(i[0], undefined)).toEqual(i[1]);
    });
  });
});
