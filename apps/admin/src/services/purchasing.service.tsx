import axios, { AxiosResponse } from "axios";

import {
  Product,
  PurchaseOrder,
  PurchaseOrderLineItem,
  PurchaseOrderLineItemReceipt,
  PurchaseOrderState
} from "@amm/types";

import { NEXT_NUMBER_API, NN_PO_KEY, PURCHASING_API } from "../config";

import _ from "lodash";
import { getProductWithVariantGuid } from "./product.service";

export const getPurchaseOrders = async (
  options: {
    skip?: number;
    take?: number;
    sortModel?: any[];
    filterModel?: any[];
    searchTerm?: string;
  },
  dataCallback: (data: any) => void,
  totalRowsCallback: any,
  errorCallback?: (error: any) => void
) => {
  const skip = options?.skip || 0;
  const take = options?.take || undefined;
  const filterModel = options?.filterModel || undefined;
  const search = options?.searchTerm || undefined;

  // translate sortModel: [{field: "supplier", sort: "asc"}]
  // into orderBy :[{ name: "asc" }],
  const orderBy =
    options.sortModel && !_.isEmpty(options.sortModel)
      ? options.sortModel.map((i) => {
          let j = {};
          if (i.field === "supplier") {
            // Supplier is nested so needs another level
            j["supplier"] = { name: i.sort };
          } else {
            j[i.field] = i.sort;
          }

          return j;
        })
      : undefined;

  axios
    .get(PURCHASING_API, {
      params: { skip, take, orderBy, filterModel, search },
    })
    .then((r) => {
      dataCallback(r.data);

      axios.get(PURCHASING_API + "count", {params: { filterModel, search }}).then((c) => {
        totalRowsCallback(c.data.rows);
      });
    })
    .catch((e) => {
      if (errorCallback) {
        errorCallback(e);
      }
    });
};

export const getPurchaseOrder = async (poNumber: string) => {
  // Get the PO
  const po = (await axios.get(`${PURCHASING_API}findByPoNumber/${poNumber}`))
    .data;

  // Now kick off tasks to get the products for each line item
  const tasks = po.lineItems.map((poli: PurchaseOrderLineItem) => {
    return getProductWithVariantGuid(poli.variantGuid).then((p: Product) => {
      poli.product = p;
    });
  });

  // Wait for all that to finish
  await Promise.all(tasks);

  // Return the final PO.
  return po;
};

interface CreateOrUpdateOptions {
  po: PurchaseOrder;
  success: Function;
  failure?: Function;
}

export const createPurchaseOrder = async (options: CreateOrUpdateOptions) => {
  const { po, success, failure } = options;
  const r: AxiosResponse = await axios.get(NEXT_NUMBER_API + NN_PO_KEY);

  po.number = `PO${r.data.value.toString().padStart(4, "0")}`;

  // Remove any IDs and circular references from poLineItems to PO - useful for the FE
  // but makes it impossible to serialize.
  const fixedPo = JSON.parse(
    JSON.stringify(po, (k, v) =>
      ["purchaseOrder", "product", "id"].includes(k) ? undefined : v
    )
  );

  axios
    .post(PURCHASING_API + "create", fixedPo)
    .then((r) => {
      success(r);
    })
    .catch((e) => {
      failure(e);
    });
};

export const updatePurchaseOrder = async (options: CreateOrUpdateOptions) => {
  const { po, success, failure } = options;

  // If this PO was active, but remaining items to receive have been removed we should
  // change the state to RECEIVED. Once RECEIVED POs cannot be edited, so we don't need
  // to check for the inverse.
  const totalItemsReceived = [].concat(...po.lineItems.map((li) => li.receipts))
    .map((r) => r.received)
    .reduce((a, b) => a + b, 0)

  const totalItems = po.lineItems.filter((li) => li.pendingDelete !== true)
    .map((li) => li.quantityOrdered).reduce((a, b) => a + b, 0)

  if (totalItemsReceived === totalItems) {
    // No items left to receive, so update the state
    console.log(`PO ${po.number} has no items left to receive - it shall be marked as RECEIVED'`);
    po.state = PurchaseOrderState.RECEIVED;
  }

  // Remove any IDs and circular references from poLineItems to PO - useful for the FE
  // but makes it impossible to serialize.
  const fixedPo = JSON.parse(
    JSON.stringify(po, (k, v) =>
      [
        "purchaseOrder",
        "purchaseOrderId",
        "product",
        "supplierId",
        "poLineItem",
        "retailPriceTmp",
        "stockOnHand"
      ].includes(k)
        ? undefined
        : v
    )
  );

  axios
    .put(`${PURCHASING_API}${po.guid}/update`, fixedPo)
    .then((r) => {
      success(r);
    })
    .catch((e) => {
      failure(e);
    });
};

interface DeleteOptions {
  guid: string;
  success: Function;
  failure: Function;
}

export const deletePurchaseOrder = async (options: DeleteOptions) => {
  const { guid, success, failure } = options;

  axios
    .delete(PURCHASING_API + guid + "/delete")
    .then((r) => success(r))
    .catch((e) => failure(e));
};

interface ReceiveOptions {
  receipts: {
    poli: PurchaseOrderLineItem;
    receipt: PurchaseOrderLineItemReceipt;
  }[];
  success: Function;
  failure: Function;
}

export const receivePurchaseOrderLines = async (options: ReceiveOptions) => {
  const { receipts, success, failure } = options;

  // Remove any IDs and circular references from poLineItems to PO - useful for the FE
  // but makes it impossible to serialize.
  const fixedReceipts = JSON.parse(
    JSON.stringify(receipts, (k, v) =>
      ["poLineItem"].includes(k) ? undefined : v
    )
  );

  axios
    .post(PURCHASING_API + "receipt", fixedReceipts)
    .then((r) => {
      // This service always returns a 201 because it supports posting multiple receipts, so need to
      // actually check for errors
      if (!_.isEmpty(r.data.errorMessages)) {
        failure(r.data.errorMessages);
      } else {
        success(r.data.results);
      }
    })
    .catch((e) => failure(e));
};

interface DeleteReceiptsOptions {
  receipts: PurchaseOrderLineItemReceipt[];
  success: (any) => void;
  failure: (any) => void;
}

export const deletePurchaseOrderLineReceipts = async (
  options: DeleteReceiptsOptions
) => {
  const { receipts, success, failure } = options;

  // Remove any IDs and circular references from poLineItems to PO - useful for the FE
  // but makes it impossible to serialize.
  const fixedReceipts = JSON.parse(
    JSON.stringify(receipts, (k, v) =>
      ["poLineItem"].includes(k) ? undefined : v
    )
  );

  axios
    .delete(PURCHASING_API + "receipt", { data: fixedReceipts })
    .then((r) => {
      if (!_.isEmpty(r.data.errorMessages)) {
        failure(r.data.errorMessages);
      } else {
        success(r.data.results);
      }
    })
    .catch((e) => failure(e));
};
