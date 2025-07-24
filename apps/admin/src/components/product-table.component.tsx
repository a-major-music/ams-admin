import { DataGrid, GridColDef, GridSelectionModel } from "@mui/x-data-grid";
import { Product, Supplier } from "@amm/types";
import { FC, useEffect, useState } from "react";
import { Paper } from "@mui/material";
import _ from "lodash";
import { dataTables } from "src/styles";
import { currencyFormatter } from "src/util";
import { getSuppliers } from "src/services/supplier.service";
import TagChips from "./tag-chips";

interface Props {
  productData: Product[];
  pageSize: number;
  totalRows: number;
  onSelectProduct: Function;
  onPageChange: Function;
  onPageSizeChange: Function;
  loading: boolean;
  showChecks?: boolean;
  onSelectionModelChange?: (model: GridSelectionModel) => void;
  selectionModel?: GridSelectionModel;
}

const ProductTable: FC<Props> = (props: Props): JSX.Element => {
  const productGuidMap: Map<string, Product> = props.productData.reduce(
    (map: Map<string, Product>, p: Product) => {
      map[p.guid] = p;
      return map;
    },
    {}
  );

  // Load the suppliers into state
  const [suppliers, setSuppliers] = useState([]);

  const columns: GridColDef[] = [
    { field: "id", hide: true },
    { field: "guid", hide: true },
    {
      field: "image",
      headerName: "Image",
      sortable: false,
      minWidth: 80,
      align: "center",
      renderCell: (params) => (
        <img
          src={params.value[0]}
          height={40}
          width={40}
          alt={params.value[1]}
        />
      ),
    },
    { field: "name", headerName: "Name", minWidth: 400, flex: 2 },
    { field: "supplier", headerName: "Supplier", minWidth: 200, flex: 1 },
    {
      field: "tags",
      headerName: "Tags",
      minWidth: 400,
      flex: 2,
      sortable: false,
      renderCell: (params) => <TagChips tags={params.value} />,
    },
    { field: "productType", headerName: "Type", minWidth: 100, flex: 0.5 },
    {
      field: "available",
      headerName: "Available",
      minWidth: 150,
      flex: 0.5,
      sortable: false,
      renderCell: (params) => {
        const n = params.value[0];
        const nV = params.value[1];
        const color = n === 0 ? "orange" : "green";
        const suffix = nV !== 1 ? "s" : "";
        return (
          <div>
            <span style={{ color: color }}>{n}</span> in {nV} variant{suffix}
          </div>
        );
      },
    },
    {
      field: "priceRange",
      headerName: "Price",
      minWidth: 150,
      flex: 0.6,
      sortable: false,
      align: "right",
      renderCell: (params) => {
        const minPrice = params.value[0];
        const maxPrice = params.value[1];

        // return `${minPrice}-${maxPrice}`
        if (minPrice === maxPrice) {
          return currencyFormatter.format(minPrice / 100);
        }

        return `${currencyFormatter.format(
          minPrice / 100
        )}-${currencyFormatter.format(maxPrice / 100)}`;
      },
    },
    { field: "location", headerName: "Location", minWidth: 150, flex: 1 },
  ];

  const rows = props.productData.map((p: Product) => {
    const stockOnHand = p.variants
      .map((v) => v.stockOnHand)
      .reduce((a, b) => a + b);

    const _fixedUri = p.variants[0].imageUrls[0]
      ? p.variants[0].imageUrls[0].uri
      : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

    const prices: number[] = p.variants.map((v) => +v.retailPrice);

    return {
      id: p.id,
      guid: p.guid,
      image: [_fixedUri, p.name],
      name: p.name,
      supplier: suppliers.filter((s: Supplier) => s.guid === p.supplierGuid)[0]
        ?.name,
      tags: p.tags,
      productType: p.productType,
      available: [stockOnHand, p.variants.length],
      priceRange: [Math.min(...prices), Math.max(...prices)],
      location: p.location,
    };
  });

  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          height: "1000px",
          alignItems: "center",
        }}
      >
        <DataGrid
          loading={props.loading}
          rows={rows}
          columns={columns}
          pageSize={props.pageSize}
          rowCount={props.totalRows}
          paginationMode="server"
          // autoHeight
          density="compact"
          onRowClick={(colParams) => {
            props.onSelectProduct(productGuidMap[colParams.row.guid]);
          }}
          onPageChange={(pageNumber, details) =>
            props.onPageChange(pageNumber, details)
          }
          onPageSizeChange={(pageSize, details) =>
            props.onPageSizeChange(pageSize, details)
          }
          checkboxSelection={props.showChecks || false}
          onSelectionModelChange={props.onSelectionModelChange}
          selectionModel={props.selectionModel}
          sx={dataTables}
        />
      </Paper>
    </>
  );
};

export default ProductTable;
