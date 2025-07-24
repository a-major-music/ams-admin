import axios, { AxiosResponse } from "axios";
import { Product, ProductType } from "@amm/types";

import {
  AUDIT_EVENT_API,
  INV_API,
  LOCS_API,
  NEXT_NUMBER_API,
  NN_ACCESSORY_KEY,
  NN_BOOK_KEY,
  NN_GIFT_KEY,
  NN_INSTRUMENT_KEY,
  NN_OTHER_KEY,
  ProductTypePrefix,
} from "src/config";
import _ from "lodash";

export const getProducts = async (
  options: { skip?: number; take?: number },
  dataCallback: (data: any) => void,
  totalRowsCallback: (data: any) => void,
  errorCallback?: (data: any) => void
) => {
  const skip = options?.skip || 0;
  const take = options?.take || 25;

  axios
    .get(INV_API, { params: { skip: skip, take: take } })
    .then((r) => {
      dataCallback(r.data);

      if (totalRowsCallback) {
        axios.get(INV_API + "count").then((c) => {
          totalRowsCallback(c.data.rows);
        });
      }
    })
    .catch((e) => {
      if (errorCallback) {
        errorCallback(e);
      }
    });
};

export const searchProducts = async (
  options: { take?: number; search: string },
  dataCallback: Function,
  totalRowsCallback?: Function
) => {
  const take = options.take || 100;
  const search = options.search;

  axios.get(INV_API, { params: { take: take, search: search } }).then((r) => {
    dataCallback(r.data);

    if (totalRowsCallback) {
      totalRowsCallback(r.data.rows);
    }
  });
};

export const getProductsForLocation = async (
  location: string,
  dataCallback: Function
) => {
  axios.get(`${INV_API}forLocation/${location}`).then((r) => {
    dataCallback(r.data);
  });
}

export const getProduct = async (guid: string) => {
  return (await axios.get(`${INV_API}${guid}`)).data;
}

export const getProductWithVariantGuid = async (guid: string) => {
  return (await axios.get(`${INV_API}variant/${guid}`)).data[0];
};

export const getInventoryForVariants = async (guids: string, callback: Function) => {
  // Technically this should be a GET, but the list of guids can be quite long, so has to be sent as a body payload,
  // which axios does not support in a get request
  axios.post(`${INV_API}inventory`, {guids: guids }).then((r) => callback(r.data));
}

// Updates stock level and prices in the inventory service
export const updateVariantStockLevelAndPrices = async (
  guid: string,
  delta: number,
  retailPrice?: number,
  costPrice?: number
) => {
  return axios.put(`${INV_API}${guid}/update-stock?updateShopify=true`, {
    stockLevelDelta: delta,
    newRetailPrice: retailPrice,
    newBuyPrice: costPrice,
  });
};

interface CreateOrUpdateOptions {
  product: Product;
  success: Function;
  failure?: Function;
}

export const createProduct = async (options: CreateOrUpdateOptions) => {
  const { product, success, failure } = options;

  // Create SKUs for all the variants
  const key =
    product.productType === ProductType.BOOK
      ? NN_BOOK_KEY
      : product.productType === ProductType.ACCESSORY
      ? NN_ACCESSORY_KEY
      : product.productType === ProductType.GIFT
      ? NN_GIFT_KEY
      : product.productType === ProductType.INSTRUMENT
      ? NN_INSTRUMENT_KEY
      : product.productType === ProductType.OTHER
      ? NN_OTHER_KEY
      : undefined;

  if (!key) {
    return failure(
      new Error(`Don't recognise product type - ${product.productType}`)
    );
  }

  const r: AxiosResponse = await axios.get(NEXT_NUMBER_API + key);
  const prefix = `${ProductTypePrefix[product.productType]}${r.data.value
    .toString()
    .padStart(5, "0")}`;

  if (product.variants.length === 1) {
    // A single variant, so assign the basic SKU
    product.variants[0].sku = prefix;
  } else {
    // Generate some delimiters based on the filterValues
    product.variants.forEach((v) => {
      console.log(v);
      const sku = `${prefix}-${v.filterValues
        .toUpperCase()
        .replaceAll(/[AEIOU]/g, "")
        .split(/\s*,\s*/)
        .join("-")}`;
      v.sku = sku;
    });
  }

  // Remove cyclic references from the product, as well as ID fields used previously for display purposes
  product.id = undefined;
  product.variants.forEach((v) => {
    v["id"] = v["product"] = v["productId"] = undefined;
    if (!_.isEmpty(v.imageUrls)) {
      v.imageUrls.forEach((u) => (u.productVariantId = undefined));
    }
  });

  axios
    .post(INV_API + "create", product)
    .then((r) => {
        success(r);
    })
    .catch((e) => {
      console.log(JSON.stringify(e));
      failure("Unable to create product - perhaps this name already exists?");
    });
};

export const updateProduct = (options: CreateOrUpdateOptions) => {
  const { product, success, failure } = options;

  product.id = undefined;

  // Remove things from the product object that Prisma won't like. Possible no variants were passed as part of the update.
  if (product.variants) product.variants.forEach((v) => {
    v["productId"] = undefined;
    v["product"] = undefined;
    if (+v["id"] < 0) v["id"] = undefined;
    if (!_.isEmpty(v.imageUrls)) {
      v.imageUrls.forEach((u) => (u.productVariantId = undefined));
    }
  });

  axios
    .put(`${INV_API}${product.guid}/update?updateShopify=true`, product)
    .then((r) => {
      success(r);
    })
    .catch((e) => {
      failure(e.response);
    });
};

export const deleteProduct = (options: CreateOrUpdateOptions) => {
  const { product, success, failure } = options;

  if (product.guid) {
    axios
      .delete(`${INV_API}${product.guid}`)
      .then((r) => {
        success(r);
      })
      .catch((e) => {
        if (failure) {
          failure(e);
        }
      });
  }
};

export const getSaleEvents = (sku: string, success, failure) => {
  axios
    .get(`${AUDIT_EVENT_API}search?targetId=${sku}&eventType=SALE`)
    .then((r) => success(r.data))
    .catch((e) => {
      if (failure) {
        failure(e);
      }
    });
};

export const getLocations = (success: (r: any) => void, error: (r: any) => void) => {
  axios.get(`${LOCS_API}`)
  .then((r) => {
    success(r.data.map((loc) => loc.location));
  })
  .catch((e) => {
    error(e);
  })
}

export const updateLocation = (guid: string, location: string, success: (r: any) => void, error?: (r: any) => void) => {
  axios
    .put(`${INV_API}${guid}/update-location/${location}`)
    .then((r) => success(r.data))
    .catch((e) => {
      if (error) {
        error(e);
      }
    });
}

export const renameLocation = (oldLocation: string, newLocation: string, success: (r: any) => void, error?: (r: any) => void) => {
  axios
    .put(`${LOCS_API}${oldLocation}/rename-location/${newLocation}`)
    .then((r) => success(r.data))
    .catch((e) => {
      if (error) {
        error(e);
      }
    });
}
