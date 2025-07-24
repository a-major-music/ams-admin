import axios from "axios";

import { SUPPLIERS_API } from "../config";

export const getSuppliers = async (
  options: { skip?: number; take?: number, orderBy?: { field: string, dir: string } },
  dataCallback: Function,
  totalRowsCallback: Function
) => {
  const skip = options?.skip || 0;
  const take = options?.take || undefined;
  const orderBy = options?.orderBy || { name: 'asc' };

  axios.get(SUPPLIERS_API, {
    params: {
      skip: skip, take: take, orderBy: orderBy, includePurchaseOrders: false
    }
  }).then((r) => {
    dataCallback(r.data);

    axios.get(SUPPLIERS_API + "count").then((c) => {
      totalRowsCallback(c.data.rows);
    });
  });
};
