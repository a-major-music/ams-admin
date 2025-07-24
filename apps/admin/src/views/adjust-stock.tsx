import { ProductVariant } from "@amm/types";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import _ from "lodash";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonWithConfirm from "src/components/modal.confirm-dialog.component";
import { CreatePOLineItemModal } from "src/components/modal.create-polineitem";
import GlobalMessageContext from "src/context/globalMessage.context";
import { HomeRoute, ProductsRoute } from "src/routes";
import { updateVariantStockLevelAndPrices } from "src/services/product.service";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledTableCell, StyledTableRow } from "src/styles";
import { currencyFormatter } from "src/util";

type DataRow = {
  variantGuid: string;
  variantSku: string;
  stockOnHand: number;
  initialDelta: number;
  delta: number;
  buyPrice: number;
  retailPrice: number;
  buyPriceStr: string;
  retailPriceStr: string;
  imageUrl: string;
};

export const AdjustStockView = () => {
  const uxMessage = useContext(GlobalMessageContext);
  const navigate = useNavigate();
  const [rows, setRows] = useState<DataRow[]>([]);
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const addItem = (v: ProductVariant) => {
    const newRow: DataRow = {
      variantGuid: v.guid,
      variantSku: v.sku,
      stockOnHand: v.stockOnHand,
      initialDelta: 0,
      delta: 0,
      buyPrice: v.buyPrice,
      buyPriceStr: currencyFormatter.format(v.buyPrice / 100),
      retailPrice: v.retailPrice,
      retailPriceStr: currencyFormatter.format(v.retailPrice / 100),
      imageUrl: v.imageUrls[0]?.uri,
    };

    // Check we don't already have this in the list
    if (rows.filter((r) => r.variantSku === v.sku).length > 0) {
      uxMessage.setMessage({
        message: `${v.sku} already in the list!`,
        severity: "warning",
      });

      return;
    }

    if (newRow.stockOnHand < 0)
      newRow.initialDelta = newRow.delta = Math.abs(newRow.stockOnHand);

    setRows([...rows, newRow]);
  };

  const applyChanges = () => {
    rows.forEach((r) => {
      updateVariantStockLevelAndPrices(
        r.variantGuid,
        r.delta,
        r.retailPrice,
        r.buyPrice
      ).then(() => {
        uxMessage.setMessage({
          message: "Stock updated",
          severity: "success",
        });

        navigate(HomeRoute);
      });
    });
  };

  const _onChange = (row, e) => {
    const sku = row.variantSku;
    const field = e.target.name;

    const r = rows.filter((r) => r.variantSku === sku)[0];

    switch (field) {
      case "delta":
        r.delta =
          +e.target.value < -r.stockOnHand ? -r.stockOnHand : +e.target.value;
        break;

      case "buyPrice":
        r.buyPrice = e.target.value.replace(/[^0-9]/g, "");
        r.buyPriceStr = currencyFormatter.format(r.buyPrice / 100);
        break;

      case "retailPrice":
        r.retailPrice = e.target.value.replace(/[^0-9]/g, "");
        r.retailPriceStr = currencyFormatter.format(r.retailPrice / 100);
        break;
    }

    setRows([...rows]);
  };

  const _deleteRow = (sku) => {
    setRows([...rows.filter((r) => r.variantSku !== sku)]);
  };

  return (
    <>
      <Typography variant="h1">Adjust Stock</Typography>
      <Box sx={{ m: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}/>
          <Grid item xs={8}>
          {_.isEmpty(rows) && (
        <>
          <p>
            Please use the "Add Variant" button below to add products to this
            list, then use the up and down arrows to set the required stock
            adjustment. You may also update the cost and retail price on this
            screen.
          </p>
        </>
      )}

          </Grid>
          <Grid item xs={2}/>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate(ProductsRoute)}
              sx={{ margin: 1 }}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setShowDialog(true)}
              sx={{ margin: 1 }}
            >
              Add Variant
            </Button>
            <CreatePOLineItemModal
              open={showDialog}
              onClose={() => setShowDialog(false)}
              onSelectVariant={(v: ProductVariant) => {
                addItem(v);
                setShowDialog(false);
              }}
            />
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "right" }}>
            <ButtonWithConfirm
              variant="contained"
              color="primary"
              onCancel={() => setShowDialog(false)}
              onClose={() => setShowDialog(false)}
              onOk={() => applyChanges()}
              sx={{ margin: 1 }}
              message="This will update stock levels and prices instantly in AMS and Shopify."
              disabled={_.isEmpty(rows)}
            >
              Apply Adjustments
            </ButtonWithConfirm>
          </Grid>

          <Grid item xs={12}>
            {!_.isEmpty(rows) && (
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell width={"5%"}></StyledTableCell>
                      <StyledTableCell width={"23%"}>SKU</StyledTableCell>
                      <StyledTableCell width={"12%"}>Available</StyledTableCell>
                      <StyledTableCell width={"12%"}>
                        Adjustment
                      </StyledTableCell>
                      <StyledTableCell width={"12%"}>
                        After Adjustment
                      </StyledTableCell>
                      <StyledTableCell width={"12%"}>Buy Price</StyledTableCell>
                      <StyledTableCell width={"12%"}>
                        Retail Price
                      </StyledTableCell>
                      <StyledTableCell width={"12%"}>
                        Delete Row
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((r: DataRow) => (
                      <StyledTableRow>
                        <TableCell>
                          <img
                            src={r.imageUrl}
                            alt={r.variantSku}
                            height="35px"
                          />
                        </TableCell>
                        <TableCell>{r.variantSku}</TableCell>
                        <TableCell>{r.stockOnHand}</TableCell>
                        <TableCell>
                          <TextField
                            name="delta"
                            size="small"
                            type="number"
                            value={r.delta}
                            onChange={(e) => _onChange(r, e)}
                          />
                        </TableCell>
                        <TableCell>{r.stockOnHand + r.delta}</TableCell>
                        <TableCell>
                          <TextField
                            name="buyPrice"
                            size="small"
                            value={r.buyPriceStr}
                            onChange={(e) => _onChange(r, e)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name="retailPrice"
                            size="small"
                            value={r.retailPriceStr}
                            onChange={(e) => _onChange(r, e)}
                          />
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={(e) => _deleteRow(r.variantSku)}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
