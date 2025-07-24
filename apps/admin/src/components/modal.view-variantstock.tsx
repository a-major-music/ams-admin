import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import { ProductVariant } from "@amm/types";

import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import { getProductWithVariantGuid, getSaleEvents } from "src/services/product.service";
import { getPurchaseOrders } from "src/services/purchasing.service";
import _ from "lodash";

export const ViewVariantStockModal = (props) => {
  const [open, setOpen] = useState(false);
  const [saleEvents, setSaleEvents] = useState([]);
  const [currentVariant, setCurrentVariant] = useState<
    ProductVariant | { error: boolean }
  >();

  useEffect(() => {
    getProductWithVariantGuid(props.variant.guid).then((p) => {
      // Avoid doing the work if we're not open
      if (!open) return;

      // There may be no product with this variant, if this was a SPE or historical product like a pack
      if (!p) {
        return setCurrentVariant({ error: true });
      }

      const v = p.variants.filter((v) => v.sku === props.variant.sku)[0];

      getPurchaseOrders(
        {
          filterModel: [{ columnField: "state", value: "active" }],
          searchTerm: v.sku,
        },
        (data) => {
          // All these POs have the sku in the line items, but some will have been received.
          // Add up all the "ordered", and all the "received" and the incoming is the difference

          const skuData = data
            .map((po) => po.lineItems)
            .reduce((a, b) => [...a, ...b], []) // flatten all line items to one array
            .map((poli) => [
              poli.variantSku,
              poli.quantityOrdered,
              poli.receipts,
            ])
            .filter((triple) => triple[0] === v.sku); // filter for the SKU we want

          const quantityOrdered = !_.isEmpty(skuData)
            ? skuData.map((sd) => sd[1]).reduce((a, b) => a + b)
            : 0;

          const received =
            quantityOrdered > 0
              ? skuData
                  .map((sd) => sd[2])
                  .filter((a) => a.length > 0)
                  .reduce((a, b) => [...a, ...b], [])
                  .map((i) => (i.received ? i.received : 0))
                  .reduce((a, b) => a + b, 0)
              : 0;

          v.incoming = quantityOrdered - received;

          getSaleEvents(
            v.sku,
            (sales) => setSaleEvents(sales),
            () => {}
          );

          setCurrentVariant(v);
        },
        () => {}
      );
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, props.variantSku]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        disabled={props.disabled}
        size={props.size}
        sx={props.sx}
      >
        <VisibilityIcon />
      </IconButton>
      <Dialog onClose={props.onCancel} open={open}>
        <DialogTitle>
          Activity for: {props.variant.sku}
          <IconButton
            onClick={handleClose}
            sx={{
              marginLeft: 2,
              marginRight: -2,
              marginTop: -2,
              cursor: "pointer",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {!currentVariant && <CircularProgress />}
          {currentVariant?.error && (
            <DialogContentText>
              Unable to show details for this variant, as it does not exist in
              the inventory. Maybe it is a historical product, such as a pack,
              or a special order?
            </DialogContentText>
          )}
          {currentVariant && !currentVariant.error && (
            <DialogContentText>
              <TableContainer>
                <Table size="small">
                  <TableBody>
                    <TableRow>
                      <TableCell variant="head">
                        <strong>Available</strong>
                      </TableCell>
                      <TableCell>{currentVariant.stockOnHand}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head">
                        <strong>Incoming</strong>
                      </TableCell>
                      <TableCell>{currentVariant.incoming}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head" colSpan={2}>
                        <strong>Sales History:</strong>
                        {_.isEmpty(saleEvents) && (
                          <Typography sx={{ p: "1em" }}>None</Typography>
                        )}
                        {!_.isEmpty(saleEvents) && (
                          <ul style={{ listStyle: "none", paddingLeft: "1em" }}>
                            {saleEvents.map((e) => (
                              <li>
                                {eval(e.data)} on{" "}
                                {new Date(e.createdAt).toLocaleDateString()} (
                                {e.sourceId})
                              </li>
                            ))}
                          </ul>
                        )}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </DialogContentText>
          )}
          <DialogActions>
            <div style={{ flex: "1 0 0" }} />
            <Button
              onClick={handleClose}
              color="secondary"
              variant="contained"
              size="small"
            >
              Close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};
