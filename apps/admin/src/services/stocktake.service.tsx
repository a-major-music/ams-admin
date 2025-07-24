import axios from "axios";
import { INV_API, STOCKTAKE_API } from "src/config";

import { StocktakeLine } from "@amm/types";

export const getAllStocktakes = (dataCallback, errorCallback) => {
  axios
    .get(`${STOCKTAKE_API}`)
    .then((r) => {
      if (r.data && r.data !== "") {
        dataCallback(r.data);
      } else {
        dataCallback([]);
      }
    })
    .catch((e) => {
      if (errorCallback) {
        errorCallback(e);
      }
    });
};

export const getStocktake = (
  location: string,
  dataCallback: (data: any) => void,
  errorCallback?: (data: any) => void
) => {
  axios
    .get(`${STOCKTAKE_API}findByLocation/${location}`)
    .then((r) => {
      if (r.data && r.data !== "") {
        dataCallback(r.data);
      } else {
        dataCallback([]);
      }
    })
    .catch((e) => {
      if (errorCallback) {
        errorCallback(e);
      }
    });
};

export const saveStocktake = (
  location: string,
  stocktakeLines: StocktakeLine[],
  dataCallback: (data: any) => void,
  errorCallback?: (data: any) => void
) => {
  axios
    .post(`${STOCKTAKE_API}save/${location}`, stocktakeLines)
    .then((r) => {
      dataCallback(r.data);
    })
    .catch((e) => {
      if (errorCallback) {
        errorCallback(e);
      }
    });
};

export const applyStockTake = (
  location: string,
  inventory: { variantSku: string; variantGuid: string, stockOnHand: number }[],
  dataCallback: (data: any) => void,
  errorCallback?: (data: any) => void
) => {
  axios.put(`${STOCKTAKE_API}apply/${location}`).then(() => {
    axios
    .put(`${INV_API}update-inventory`, inventory)
    .then((r) => {
      dataCallback(r.data);
    })
    .catch((e) => {
      errorCallback(e);
    });
  })
  .catch((e) => {
    errorCallback(e);
});
};

export const deleteStockTake = (location: string, callback: () => void) => {
  axios.delete(`${STOCKTAKE_API}delete/${location}`).then(() => callback());
};

export const getVariantForBarcode = (
  barcode: string,
  dataCallback: (data: any) => void,
  errorCallback?: (data: any) => void
) => {
  axios
    .get(`${INV_API}variantByBarcode/${barcode}`)
    .then((r) => {
      dataCallback(r.data);
    })
    .catch((e) => {
      if (errorCallback) {
        errorCallback(e);
      }
    });
};
