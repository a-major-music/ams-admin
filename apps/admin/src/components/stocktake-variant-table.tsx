import { FC, useEffect, useState } from "react";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Paper, Typography } from "@mui/material";
import { dataTables } from "src/styles";

import { ProductVariant } from "@amm/types";

import _ from "lodash";

interface Props {
  loading?: boolean;
  variants: ProductVariant[];
  onRowClick: (row: any) => void;
}

const StocktakeVariantTable: FC<Props> = (props: Props): JSX.Element => {
  const [rows, setRows] = useState<any[]>();

  useEffect(() => {
    const newRows = props.variants.filter((v) => v.stockOnHand > 0).map((pv: ProductVariant) => {
      const p = pv.product;
      const row = {
        id: pv.id,
        image: !_.isEmpty(pv.imageUrls)
          ? [pv.imageUrls[0].uri, pv.name]
          : undefined,
        sku: pv.sku,
        name: `${p.name} (${pv.filterValues})`,
        barcode: pv.barcode,
        stockOnHand: pv.stockOnHand
      };

      return row;
    });

    // console.log(newRows);
    setRows(newRows);
  }, [props.variants]);

  const columns: GridColDef[] = [
    { field: "id", hide: true },
    {
      field: "image",
      headerName: "Image",
      sortable: false,
      minWidth: 80,
      align: "center",
      renderCell: (params) => {
        if (params.value) {
          return (
            <img src={params.value[0]} height={40} alt={params.value[1]} />
          );
        } else {
          return <Typography variant="caption">No image</Typography>;
        }
      },
    },
    {
      field: "sku",
      headerName: "SKU",
      flex: 1,
      filterable: false,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 400,
      flex: 1,
      filterable: false,
    },
    {
      field: "barcode",
      headerName: "Barcode",
      flex: 1,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: "stockOnHand",
      headerName: "Stock on Hand",
      align: "center",
      flex: 1,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
    },
  ];

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      {rows && (
        <DataGrid
          localeText={{noRowsLabel:"Well done! Everything in this location has been scanned!"}}
          loading={props.loading}
          rows={rows}
          columns={columns}
          autoHeight
          density="compact"
          disableSelectionOnClick
          sx={dataTables}
          onRowClick={(r) => props.onRowClick(props.variants.find((v) => v.sku === r.row.sku))}
        />
      )}
    </Paper>
  );
};

export default StocktakeVariantTable;
