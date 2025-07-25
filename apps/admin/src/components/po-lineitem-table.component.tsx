import { FC, useEffect, useState } from "react";
import { PurchaseOrderState } from "@amm/types";

import {
  PurchaseOrder,
  PurchaseOrderLineItem,
  PurchaseOrderLineItemReceipt,
  ProductVariant,
} from "@amm/types";
import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { currencyFormatter } from "../util";
import DeleteIcon from "@mui/icons-material/Delete";
import { MISSING_PRODUCT_IMAGE_URL } from "../config";
import ReceivedLineItemTable from "./received-lineitem-table.component";
import { ViewVariantStockModal } from "./modal.view-variantstock";
import { dataTables } from "../styles";

const _ = require("lodash");

interface Props {
  parentPo: PurchaseOrder;
  onUpdate?: Function;
  onSelectRow?: Function;
  onDeleteRow?: Function;
  onRowsToReceiveChange?: Function;
  onDeleteReceipts?: (receipts: PurchaseOrderLineItemReceipt[]) => void;
  allowEditQuantity?: boolean;
  hideReceiveCols?: boolean;
}

const PurchaseOrderLineItemTable: FC<Props> = (props: Props): JSX.Element => {
  const parentPo = props.parentPo;

  const updateQuantity = (e) => {
    const id = +e.target.id.substring("quantity-".length);
    const newQuantity = +e.target.value > 0 ? +e.target.value : 1;

    // -ve IDs are made positive because of MUI grid, hence the abs() calls
    const item = parentPo.lineItems.filter((i) => Math.abs(i.id) === Math.abs(id))[0];

    // Use a delta as some items may already have been received.
    const delta = newQuantity - item.quantityOrdered;
    item.quantityOrdered += delta;

    // Quick check to prevent reducing the quantityOrdered to below what has already been received
    const alreadyReceived = !_.isEmpty(item.receipts)
      ? item.receipts.map((r) => r.received).reduce((a, b) => a + b)
      : 0;

    if (item.quantityOrdered < alreadyReceived) {
      item.quantityOrdered = alreadyReceived;
    }

    props.onUpdate(parentPo.lineItems);
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      hide: true,
    },
    { field: "guid", hide: true },
    {
      field: "image",
      headerName: "Image",
      sortable: false,
      minWidth: 80,
      flex: 1,
      align: "center",
      renderCell: (params) => (
        <img
          src={params.value[0]}
          height={40}
          alt={params.value[1]}
          onClick={() => window.open(params.value[0])}
          style={{ cursor: "pointer" }}
        />
      ),
    },
    // { field: "sku", headerName: "SKU", width: 140 },
    {
      field: "details",
      headerName: "Item Name",
      minWidth: 350,
      flex: 1,
      renderCell: (params) => (
        <Grid container style={{ textAlign: "left" }}>
          <Grid item xs={12}>
            <strong>
              {params.value.poli.product
                ? params.value.poli.product.name
                : params.value.poli?.description}
            </strong>
          </Grid>
          <Grid item xs={12}>
            {params.value.poli.product
              ? `${params.value.poli.product.productType} - ${params.value.variant.sku}`
              : `Special Order - ${params.value.poli.variantSku}`}
          </Grid>
        </Grid>
      ),
    },
    { field: "packSize", headerName: "Pack Size", flex: 1, align: "right" },
    {
      field: "barcode",
      headerName: "Barcode",
      flex: 1,
      editable: props.allowEditQuantity,
      minWidth: 140,
    },
    {
      field: "supplierCode",
      headerName: "Supplier Code",
      minWidth: 140,
      flex: 1,
      editable: props.allowEditQuantity,
    },
    {
      field: "quantityOrdered",
      headerName: "Quantity",
      minWidth: 100,
      align: "right",
      flex: 1,
      renderCell: (params) =>
        props.allowEditQuantity ? (
          <TextField
            id={"quantity-" + params.row.id}
            inputProps={{
              style: { textAlign: "right" },
              min: 1,
            }}
            type="number"
            value={params.value}
            onChange={(e) => updateQuantity(e)}
          />
        ) : (
          params.value
        ),
    },
    {
      field: "taxRate",
      headerName: "Tax",
      minWidth: 40,
      flex: 1,
      align: "right",
    },
    {
      field: "stockOnHand",
      headerName: "Current Stock Level",
      minWidth: 40,
      flex: 1,
      align: "right",
    },
  ];

  if (props.allowEditQuantity && props.onDeleteRow) {
    columns.push({
      field: "delete",
      disableColumnMenu: true,
      sortable: false,
      filterable: false,
      minWidth: 70,
      flex: 1,
      headerName: "Delete",
      renderCell: (params) => (
        <IconButton
          value={"delete-" + params.row.sku}
          onClick={(e) => props.onDeleteRow(e)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    });
  }

  if (props.hideReceiveCols !== true) {
    columns.push({
      field: "quantityToReceive",
      type: "number",
      headerName: "To Receive",
      editable: true,
      flex: 1,
      align: "right",
    });
    columns.push({
      field: "receivePrice",
      headerName: "Receive @ £",
      width: 100,
      editable: true,
      flex: 1,
      align: "right",
    });
    columns.push({
      field: "retailPrice",
      headerName: "Retail £",
      width: 80,
      flex: 1,
      editable: true,
      align: "right",
    });
  }

  columns.push({
    field: "view",
    headerName: "View",
    disableColumnMenu: true,
    sortable: false,
    filterable: false,
    minWidth: 60,
    flex: 1,
    align: "center",
    renderCell: (params) => (
      <ViewVariantStockModal color="inherit" variant={params.row} />
    ),
  });

  // Build the main table of unreceived, not deleted things
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (!_.isEmpty(parentPo?.lineItems)) {
      setRows(
        parentPo.lineItems
          .map((poli) => {
            // Calculate and store the quantity left to receive so we can use
            // it later. This is no longer stored in the DB, but calculated fresh
            // each time it's needed.
            const qtr =
              poli.quantityOrdered -
              poli.receipts.map((r) => r.received).reduce((a, b) => a + b, 0);

            return { ...poli, qtr: qtr };
          })
          .filter((poli) => poli.pendingDelete !== true && poli.qtr > 0)
          .map((poli: PurchaseOrderLineItem) => {
            // console.log(poli);
            // We filtered out items pending delete and those with no quantity to receive in this section, but we'll add the receipts on the
            // end in a minute.
            if (poli.product) {
              const variant: ProductVariant = poli.product.variants.filter(
                (v) => v.guid === poli.variantGuid
              )[0];

              const row = {
                id: Math.abs(poli.id), // New items may have -ve IDs, but this upsets MUI grid
                guid: variant.guid,
                sku: variant.sku,
                barcode: poli.variantUPC,
                image: [poli.variantMediaURI || "", poli.name],
                details: { poli, variant },
                supplierCode: poli.variantSupplierCode,
                packSize: poli.packSize || 1,
                quantityOrdered: poli.quantityOrdered,
                taxRate: `${poli.variantTaxRate}%`,
                stockOnHand: poli.stockOnHand,
                quantityToReceive: poli.qtr,
                receivePrice: currencyFormatter.format(poli.itemCost / 100),
                retailPrice: currencyFormatter.format(
                  (poli.retailPriceTmp || variant?.retailPrice || 0) / 100
                ),
                receive: poli,
                view: poli,
              };

              return row;
            }

            // This product is not in our inventory service - maybe a new one, or an SPE.
            return {
              id: poli.id,
              guid: poli.guid,
              sku: poli.variantSku,
              barcode: poli.variantUPC,
              image: [MISSING_PRODUCT_IMAGE_URL, poli.name],
              details: { poli },
              supplierCode: poli.variantSupplierCode,
              packSize: 1,
              quantityOrdered: poli.quantityOrdered,
              taxRate: `${poli.variantTaxRate}%`,
              stockOnHand: "N/A",
              quantityToReceive: poli.qtr,
              receivePrice: currencyFormatter.format(poli.itemCost / 100),
              retailPrice: "N/A",
            };
          })
      );
    }
  }, [parentPo]);

  // Build a map of received items by date for later rendering
  const [receiptsByDate, setReceiptsByDate] =
    useState<Map<Date, PurchaseOrderLineItemReceipt[]>>();

  useEffect(() => {
    const r = new Map<Date, PurchaseOrderLineItemReceipt[]>();

    if (!_.isEmpty(parentPo?.lineItems)) {
      parentPo?.lineItems
        .filter((poli) => !_.isEmpty(poli.receipts))
        .forEach((poli) => {
          poli.receipts.forEach((receipt) => {
            let receipts = r.get(receipt.date);

            if (!receipts) {
              receipts = [];
            }

            receipt["poLineItem"] = poli;
            receipts.push(receipt);
            r.set(receipt.date, receipts);
          });
        });

      setReceiptsByDate(r);
    }
  }, [parentPo]);

  // Set up selection checkboxes for receiving line items
  const enableSelection =
    props.onRowsToReceiveChange && parentPo.state === PurchaseOrderState.ACTIVE
      ? true
      : false;

  // Setup a selection model for the receive checkboxes - an array of IDs which are selected
  const [selectionModel, setSelectionModel] = useState([]);

  useEffect(() => {
    if (props.onRowsToReceiveChange) {
      props.onRowsToReceiveChange(
        rows.filter((r) => selectionModel.includes(r.id))
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectionModel]);

  // When the checkbox selection changes update the list of rows to receive in the parent, for when the receipt button is pressed.
  const _selectionChange = (model) => {
    if (enableSelection) {
      setSelectionModel(model);
    }
  };

  // Called when exiting an edit state
  const _handleEdits = (
    newRow: GridRowModel,
    oldRow: GridRowModel
  ): GridRowModel => {
    if (newRow.quantityToReceive > newRow.quantityOrdered)
      newRow.quantityToReceive = newRow.quantityOrdered;
    if (newRow.quantityToReceive < 1) newRow.quantityToReceive = 1;

    const r = rows.filter((i) => i.id === newRow.id)[0];
    r.quantityToReceive = newRow.quantityToReceive;
    r.receivePrice = `£${Number(
      newRow.receivePrice.replace(/[^0-9.]/g, "")
    ).toFixed(2)}`;
    r.retailPrice = `£${Number(
      newRow.retailPrice.replace(/[^0-9.]/g, "")
    ).toFixed(2)}`;

    newRow.receivePrice = r.receivePrice;
    newRow.retailPrice = r.retailPrice;

    // If we are receiving we need to update the RowsToReceive model
    if (props.onRowsToReceiveChange) {
      // Make sure this edited row is checked (if checkboxes are enabled)
      if (!selectionModel.includes(newRow.id)) {
        setSelectionModel([...selectionModel, newRow.id]);
      }

      // Pass the new row in the row data to the parent with the same selection model
      props.onRowsToReceiveChange(
        rows.filter((r) => selectionModel.includes(r.id))
      );
    } else {
      // We are not receiving, so we must be changing some other details
      const item = parentPo.lineItems.filter(
        (i) => i.variantGuid === newRow.guid
      )[0];
      item.variantUPC = newRow.barcode;
      item.variantSupplierCode = newRow.supplierCode;
      props.onUpdate(parentPo.lineItems);
    }

    // Finally commit the changes to the current view
    return newRow;
  };

  // The first box is all the unreceived items, and is hidden if there are none. This is followed
  // by any number of ReceivedLineItemTable components
  return (
    <>
      {_.isEmpty(parentPo.lineItems) && (
        <Box sx={{ m: 1 }}>
          <p>
            Please create some line items by selecting either Add Product or Add
            Special Order
          </p>
        </Box>
      )}
      {!_.isEmpty(rows) && (
        <Box sx={{ m: 2 }}>
          <Typography variant="body1" align="left" sx={{ fontWeight: "bold" }}>
            {rows.length} row{rows.length > 1 ? "s" : ""} {parentPo.state !== PurchaseOrderState.DRAFT ? " not yet received..." : ""}
          </Typography>
          <DataGrid
            experimentalFeatures={{ newEditingApi: true }}
            checkboxSelection={enableSelection}
            selectionModel={enableSelection && selectionModel}
            onSelectionModelChange={enableSelection && _selectionChange}
            rows={rows}
            columns={columns}
            autoHeight
            density="compact"
            rowHeight={60}
            processRowUpdate={_handleEdits}
            onProcessRowUpdateError={(e) => alert(e)}
            disableSelectionOnClick
            sx={dataTables}
          />
        </Box>
      )}
      {!_.isEmpty(receiptsByDate) && <Divider />}
      {!_.isEmpty(receiptsByDate) &&
        Array.from(receiptsByDate.entries())
          .sort()
          .reverse()
          .map((entry) => (
            <Box>
              <ReceivedLineItemTable
                onDeleteReceipts={() => {
                  props.onDeleteReceipts(entry[1]);
                }}
                receipts={entry[1]}
                date={new Date(entry[0])}
              />
            </Box>
          ))}
    </>
  );
};

export default PurchaseOrderLineItemTable;
