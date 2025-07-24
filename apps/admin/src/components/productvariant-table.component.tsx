import { FC, useEffect, useState } from "react";

import { Product, ProductVariant, WeightUnit } from "@amm/types";
import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import { IconButton, MenuItem, Paper, Select, Typography } from "@mui/material";
import { currencyFormatter } from "src/util";
import { ViewVariantStockModal } from "./modal.view-variantstock";
import { dataTables } from "src/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import _ from "lodash";

interface Props {
  parentProduct: Product;
  setParentProduct?: (p: Product) => void;
  editMode?: boolean;
  hideSkus?: boolean;
}

const ProductVariantTable: FC<Props> = (props: Props): JSX.Element => {
  const editMode = props.editMode === true;
  const [rows, setRows] = useState();

  useEffect(() => {
    const newRows = props.parentProduct?.variants
      ?.filter((pv) => pv["pendingDelete"] !== true)
      .map((pv: ProductVariant) => {
        const row = {
          id: pv.id,
          guid: pv.guid,
          image: !_.isEmpty(pv.imageUrls)
            ? [pv.imageUrls[0].uri, pv.name]
            : undefined,
          sku: pv.sku,
          supplierCode: pv.supplierCode,
          barcode: pv.barcode,
          retailPrice: currencyFormatter.format(pv.retailPrice / 100),
          previousPrice: currencyFormatter.format(pv.previousPrice / 100),
          buyPrice: currencyFormatter.format(pv.buyPrice / 100),
          packSize: pv.boughtInPacks ? pv.packSize : 1,
          available: pv.stockOnHand,
          location: props.parentProduct.location,
          weight: pv.weight || 0,
          weightUnit: pv.weightUnit,
        };

        if (filterNames) {
          const filterValues: string[] = pv.filterValues.split(",");
          let filterIdx: number;

          for (filterIdx = 0; filterIdx < filterNames.length; filterIdx++) {
            row[filterNames[filterIdx]] = filterValues[filterIdx];
          }
        }

        return row;
      });

    setRows(newRows);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.parentProduct]);

  const columns: GridColDef[] = [
    { field: "id", hide: true },
    { field: "guid", hide: true },
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
      minWidth: 150,
      flex: 1,
      editable: editMode,
      hide: props.hideSkus === true,
    },
    {
      field: "supplierCode",
      headerName: "Supplier Code",
      minWidth: 150,
      flex: 1,
      editable: editMode,
    },
    {
      field: "barcode",
      headerName: "Barcode",
      minWidth: 150,
      flex: 1,
      editable: editMode,
    },
    {
      field: "retailPrice",
      headerName: "Retail £",
      minWidth: 100,
      flex: 1,
      align: "right",
      editable: editMode,
      renderCell: (params) => (
        <Typography
          variant="body2"
          color={
            +params.value.replaceAll(/[^0-9]/g, "") <
            +params.row.previousPrice.replaceAll(/[^0-9]/g, "")
              ? "error"
              : "default"
          }
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "previousPrice",
      headerName: "Previous £",
      minWidth: 100,
      flex: 1,
      align: "right",
      editable: editMode,
    },
    {
      field: "buyPrice",
      headerName: "Buy £",
      minWidth: 100,
      flex: 1,
      align: "right",
      editable: editMode,
    },
    {
      field: "packSize",
      type: "number",
      headerName: "Pack Size",
      minWidth: 100,
      flex: 1,
      align: "right",
      editable: editMode,
    },
  ];

  const filterNames: string[] = props.parentProduct?.filterFields?.split(",");

  if (filterNames) {
    filterNames.forEach((f: string) => {
      if (f !== "") {
        columns.push({
          field: f,
          headerName: f,
          minWidth: 100,
          flex: 1,
          align: "left",
          editable: editMode,
        });
      }
    });
  }

  columns.push({
    field: "weight",
    headerName: "Weight",
    type: "number",
    minWidth: 75,
    flex: 1,
    editable: editMode,
  });

  columns.push({
    field: "weightUnit",
    headerName: "Unit",
    minWidth: 60,
    flex: 1,
    editable: editMode,
    renderCell: (params) => (
      <>
        {editMode && (
          <Select
            value={params.row.weightUnit}
            onChange={(e) => _handleEditWeightUnit(params.row.sku, e)}
          >
            <MenuItem key={WeightUnit.G} value="g">
              <Typography variant="caption">g</Typography>
            </MenuItem>
            <MenuItem key={WeightUnit.KG} value="Kg">
              <Typography variant="caption">Kg</Typography>
            </MenuItem>
          </Select>
        )}
        {!editMode && (
          <Typography variant="caption">{params.row.weightUnit}</Typography>
        )}
      </>
    ),
  });

  // Don't show these if we are editing the variants.
  if (!editMode) {
    columns.push({
      field: "available",
      headerName: "On Hand",
      align: "center",
      minWidth: 90,
      flex: 1,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      editable: false,
    });

    columns.push({
      field: "location",
      headerName: "Location",
      sortable: false,
      filterable: false,
      minWidth: 150,
      flex: 1,
      disableColumnMenu: true,
      editable: false,
    });

    columns.push({
      field: "view",
      headerName: "Activity",
      disableColumnMenu: true,
      sortable: false,
      filterable: false,
      minWidth: 100,
      flex: 1,
      align: "center",
      renderCell: (params) => (
        <ViewVariantStockModal color="inherit" variant={params.row} />
      ),
      editable: false,
    });
  }

  // Only show if we ARE editing the variants.
  if (editMode) {
    columns.push({
      field: "actions",
      headerName: "Delete",
      disableColumnMenu: true,
      sortable: false,
      filterable: false,
      flex: 1,
      align: "center",
      renderCell: (params) => (
        <IconButton
          disabled={props.parentProduct.variants.length === 1}
          onClick={(e) => _deleteRow(e, params.row)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    });
  }

  // Called when exiting an edit state
  const _handleEdits = (
    newRow: GridRowModel,
    oldRow: GridRowModel
  ): GridRowModel => {
    const v: ProductVariant = props.parentProduct.variants.filter(
      (i) => i.sku === oldRow.sku // use the old row in case it's the SKU that has changed.
    )[0];

    // Check we are not trying to set a duplicate sku, as this will mess with this routine next time around
    if (
      newRow.sku !== oldRow.sku &&
      props.parentProduct.variants.filter((v) => v.sku === newRow.sku).length >
        0
    ) {
      alert("That SKU is already in use in this product!");
      newRow.sku = oldRow.sku;
    } else {
      v.sku = newRow.sku;
    }

    v.supplierCode = newRow.supplierCode;
    v.barcode = newRow.barcode;
    v.retailPrice = +newRow.retailPrice.replaceAll(/[^0-9]/g, "");
    v.previousPrice = +newRow.previousPrice.replaceAll(/[^0-9]/g, "");
    v.buyPrice = +newRow.buyPrice.replaceAll(/[^0-9]/g, "");
    v.packSize = +newRow.packSize;
    v.boughtInPacks = newRow.packSize > 1;
    v.filterValues = _getFilterValues(newRow, props.parentProduct);
    v.weight = +newRow.weight;

    // This hack sets or removes the sale tag automatically when an item is given a sale price
    if (v.previousPrice > v.retailPrice) {
      if (props.parentProduct.tags.indexOf("sale") === -1) {
        props.parentProduct.tags.push("sale");
      }
    } else {
      if (props.parentProduct.tags.indexOf("sale") !== -1) {
        props.parentProduct.tags.splice(
          props.parentProduct.tags.indexOf("sale"),
          1
        );
      }
    }

    props.setParentProduct(props.parentProduct);

    // Finally commit the changes to the current view
    return { ...newRow };
  };

  // A special case, as we manage this dropdown ourselves
  const _handleEditWeightUnit = (sku: string, e) => {
    const v = e.target.value;
    props.parentProduct.variants.filter((v) => v.sku === sku)[0].weightUnit = v;
    props.setParentProduct(props.parentProduct);
  };

  const _getFilterValues = (row: any, p: Product): string => {
    return p.filterFields
      ? p.filterFields
          .split(/\s*,\s*/)
          .map((key: string) => row[key])
          .join(",")
      : "";
  };

  const _deleteRow = (e, row) => {
    const d = props.parentProduct.variants.find((i) => i.sku === row.sku);

    // If this was already there flag it for deletion, but if we only just added it (without saving) just remove it
    if (d) {
      if (d.id > 0) {
        d["pendingDelete"] = true;
      } else {
        console.log(d);
        props.parentProduct.variants.splice(
          props.parentProduct.variants.indexOf(d),
          1
        );
      }
      props.setParentProduct(props.parentProduct);
    }
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      {rows && (
        <DataGrid
          experimentalFeatures={{ newEditingApi: true }}
          rows={rows}
          columns={columns}
          autoHeight
          density="compact"
          hideFooter={true}
          processRowUpdate={_handleEdits}
          onProcessRowUpdateError={(e) => alert(e)}
          disableSelectionOnClick
          sx={dataTables}
        />
      )}
    </Paper>
  );
};

export default ProductVariantTable;
