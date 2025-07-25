import axios from "axios";
import { CUSTOM_SALE_API } from "../config";

export const getCustomSales = (success, failure) => {
  axios
    .get(`${CUSTOM_SALE_API}`)
    .then((r) => success(r.data))
    .catch((e) => {
      if (failure) {
        failure(e);
      }
    });
};

export const getIgnoreList = (success, failure) => {
  axios
    .get(`${CUSTOM_SALE_API}ignore-list`)
    .then((r) => success(r.data))
    .catch((e) => {
      if (failure) {
        failure(e);
      }
    });
};

export const deleteCustomSale = (id: number, success, failure) => {
  axios
    .delete(`${CUSTOM_SALE_API}${id}`)
    .then((r) => success(r.data))
    .catch((e) => {
      if (failure) {
        failure(e);
      }
    });
};

export const deleteCustomSaleByTitle = (title: string, success, failure) => {
  axios
    .delete(`${CUSTOM_SALE_API}byTitle/${title}`)
    .then((r) => success(r.data))
    .catch((e) => {
      if (failure) {
        failure(e);
      }
    });
}

export const deleteIgnoreListItem = (id, success, failure) => {
  axios
    .delete(`${CUSTOM_SALE_API}delete-ignore-entry/${id}`)
    .then((r) => success(r.data))
    .catch((e) => {
      if (failure) {
        failure(e);
      }
    });
};

export const addIgnoreListItem = (title, success, failure) => {
  axios
    .post(`${CUSTOM_SALE_API}add-ignore-entry`, { title: title })
    .then((r) => success(r.data))
    .catch((e) => {
      if (failure) {
        failure(e);
      }
    });
};
