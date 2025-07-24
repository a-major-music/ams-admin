import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Search from "./search.component";
import { Product, ProductVariant } from "@amm/types";
import { searchProducts } from "src/services/product.service";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { currencyFormatter } from "src/util";

import _ from "lodash";
import { dataTables } from "src/styles";

interface Props {
  open: boolean;
  onClose: any;
  onSelectVariant: (variant: ProductVariant, quantity: number) => void;
}

export const CreatePOLineItemModal = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productData, setProductData] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const [variantGuidMap, setVariantGuidMap] =
    useState<Map<string, ProductVariant>>();

  useEffect(() => {
    if (!_.isEmpty(productData)) {
      setVariantGuidMap(
        productData
          .map((p) =>
            p.variants.map((v) => {
              v.product = p;
              return v;
            })
          )
          .reduce((map: Map<string, ProductVariant>, pv: ProductVariant[]) => {
            pv.map((v) => (map[v.guid] = v));
            return map;
          }, {})
      );
    }
  }, [productData]);

  const search = (st: string) => {
    setSearchTerm(st);
    searchProducts({ search: st, take: 20 }, setProductData);
  };

  const _updateQuantity = (e) => {
    const q = +e.target.value;
    if (q >= 1) {
      setQuantity(q);
    }
  };

  const resetSearch = () => {
    setSearchTerm("");
    setProductData([]);
  };

  const columns: GridColDef[] = [
    { field: "id", hide: true },
    { field: "guid", hide: true },
    {
      field: "image",
      headerName: "Image",
      sortable: false,
      width: 80,
      renderCell: (params) => (
        <img src={params.value[0]} height={40} alt={params.value[1]} />
      ),
    },
    { field: "sku", headerName: "SKU", sortable: false, minWidth: 200, flex: 1 },
    {
      field: "name",
      headerName: "Name",
      sortable: false,
      minWidth: 400,
      flex: 1,
      renderCell: (params) => (
        <p>
          {params.value[0]}
          <br />
          <Typography variant="caption">({params.value[1]})</Typography>
        </p>
      ),
    },
    { field: "buyPrice", headerName: "Cost", sortable: false },
  ];

  const rows = [];

  if (productData) {
    productData.forEach((p: Product) => {
      rows.push(
        ...p.variants.map((pv: ProductVariant) => {
          return {
            id: pv.id,
            guid: pv.guid,
            stockOnHand: pv.stockOnHand,
            image: [pv.imageUrls[0]?.uri, p.name],
            sku: pv.sku,
            name: [p.name, pv.filterValues],
            buyPrice: currencyFormatter.format(pv.buyPrice / 100),
          };
        })
      );
    });
  }

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{marginTop: 1}} alignItems="flex-end">
          <Grid item xs={10}>
            <Search
              searchTerm={searchTerm}
              onReset={resetSearch}
              setSearchTerm={setSearchTerm}
              doSearch={search}
              clearOnEnter={false}
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                required
                id="quantity"
                label="Quantity"
                value={quantity}
                onChange={_updateQuantity}
                type="number"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <DataGrid
              sx={{ ...dataTables, ...{ height: "400px" } }}
              columns={columns}
              rows={rows}
              hideFooter
              density="compact"
              disableColumnFilter
              disableColumnMenu
              disableColumnSelector
              pageSize={100}
              onRowClick={(colParams) => {
                setSearchTerm("");
                setProductData(undefined);
                props.onSelectVariant(
                  variantGuidMap[colParams.row.guid],
                  quantity
                );
                setQuantity(1);
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="secondary" onClick={props.onClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
