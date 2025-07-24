export type Price = number;

export enum WeightUnit {
  KG = "Kg",
  G = "g",
}

export enum PurchaseOrderState {
  DRAFT = "draft",
  ACTIVE = "active",
  RECEIVED = "received",
  VOID = "void",
}

export enum ProductType {
  BOOK = "Book",
  GIFT = "Gift",
  ACCESSORY = "Accessory",
  INSTRUMENT = "Instrument",
  OTHER = "Other",
}

export interface Supplier {
  guid?: string;
  name: string;
  website?: string;
  address?: Address;
  contacts: Contact[];
  purchaseOrders?: PurchaseOrder[];
}

export interface Address {
  guid?: string;
  address1: string;
  address2?: string;
  address3?: string;
  city: string;
  county?: string;
  postcode: string;
}

export interface Contact {
  guid?: string;
  name: string;
  phone: string;
  email: string;
}

export interface PurchaseOrder {
  guid?: string;
  number: string;
  state: PurchaseOrderState;
  supplier?: Supplier;
  issueDate?: Date;
  lineItems: PurchaseOrderLineItem[];
  subTotal: number;
  taxAmount: number;
  total: number;
}

export interface PurchaseOrderLineItem {
  variantSku: string;
  variantGuid?: string;
  variantUPC?: string;
  variantSupplierCode?: string;
  variantTaxRate: number;
  variantMediaURI?: string;
  description: string;
  purchaseOrder?: PurchaseOrder;
  itemCost: number;
  quantityOrdered: number;
  packSize: number;
  receipts: PurchaseOrderLineItemReceipt[];
}

export interface PurchaseOrderLineItemReceipt {
  guid?: string;
  date: Date;
  received: number;
  receivedPrice: number;
}

export interface SalesOrder {
  number: number;
  shopifyURL: string;
  lineItems: [
    {
      quantityOrdered: number;
      title: string;
      sku: string;
      amount: number;
    }
  ];
}

export interface Product {
  guid?: string;
  name: string;
  publishedToShopify?: boolean;
  shopifyId?: string; // This is not persisted, but used to identify products in shopify when editing
  supplierGuid?: string;
  taxable: boolean;
  productType: ProductType;
  brand?: string;
  description?: string;
  tags?: string[];
  variants: ProductVariant[];
  filterFields?: string[]; // Used to differentiate variants, if more than one
  location?: string;
}

export interface ProductVariant {
  guid?: string;
  product?: Product;
  imageUrls?: string[];
  filterValues?: string[];
  sku: string;
  barcode?: string;
  supplierCode: string;
  weight: number;
  weightUnit: WeightUnit;
  manageStockLevels: boolean;
  stockOnHand: number;
  boughtInPacks?: boolean;
  packSize?: number; // Some variants are purchase in packs, so so maths needs to be applied when receiving
  sellable: boolean;
  buyable: boolean;
  retailPrice: number; // Prices should always be in pence to avoid using floats
  buyPrice: number;
  previousPrice?: number;
  movingAverageCost: number;
  notes?: string;
}

export interface Stocktake {
  guid?: string;
  location: string;
  lines: StocktakeLine[];
}

export interface StocktakeLine {
  guid?: string;
  sku: string;
  count: number;
}
