"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductType = exports.PurchaseOrderState = exports.WeightUnit = void 0;
var WeightUnit;
(function (WeightUnit) {
    WeightUnit["KG"] = "Kg";
    WeightUnit["G"] = "g";
})(WeightUnit = exports.WeightUnit || (exports.WeightUnit = {}));
var PurchaseOrderState;
(function (PurchaseOrderState) {
    PurchaseOrderState["DRAFT"] = "draft";
    PurchaseOrderState["ACTIVE"] = "active";
    PurchaseOrderState["RECEIVED"] = "received";
    PurchaseOrderState["VOID"] = "void";
})(PurchaseOrderState = exports.PurchaseOrderState || (exports.PurchaseOrderState = {}));
var ProductType;
(function (ProductType) {
    ProductType["BOOK"] = "Book";
    ProductType["GIFT"] = "Gift";
    ProductType["ACCESSORY"] = "Accessory";
    ProductType["INSTRUMENT"] = "Instrument";
    ProductType["OTHER"] = "Other";
})(ProductType = exports.ProductType || (exports.ProductType = {}));
