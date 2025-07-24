import { PurchaseOrderLineItemReceipt } from "@amm/types";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { StyledTableCell, StyledTableRow } from "src/styles";
import { currencyFormatter } from "src/util";
import ButtonWithConfirm from "./modal.confirm-dialog.component";

interface Props {
  onDeleteReceipts: () => void;
  receipts: PurchaseOrderLineItemReceipt[];
  date: Date;
}

const ReceivedLineItemTable: FC<Props> = (props: Props): JSX.Element => (
  <Box sx={{ margin: 2 }} >
    <Grid container sx={{ marginBottom: 2 }} alignItems="end">
      <Grid item xs={6}>
        <Typography variant="body1" align="left" sx={{ fontWeight: "bold" }}>
          {`Received on ${props.date.toDateString()} at ${props.date.toLocaleTimeString()}...`}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Box display="flex" justifyContent="flex-end">
          <ButtonWithConfirm
            variant="contained"
            color="primary"
            size="small"
            message="This will revert the stock receipt, affecting stock levels for all items on this PO! This is permanent! Note that cost and retail prices updated during this receipt WILL NOT be reverted."
            onOk={() => props.onDeleteReceipts()}
          >
            Revert
          </ButtonWithConfirm>
        </Box>
      </Grid>
    </Grid>
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell key="h1" sx={{ fontWeight: "bold" }} width={150}>
              SKU
            </StyledTableCell>
            <StyledTableCell key="h2" sx={{ fontWeight: "bold" }} width={400}>
              Details
            </StyledTableCell>
            <StyledTableCell key="h3" sx={{ fontWeight: "bold" }} width={150}>
              Units Received
            </StyledTableCell>
            <StyledTableCell key="h4" sx={{ fontWeight: "bold" }} width={150}>
              Received @ £
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.receipts.map((r: PurchaseOrderLineItemReceipt) => (
            <StyledTableRow key={r.id}>
              <TableCell>{r.poLineItem.variantSku}</TableCell>
              <TableCell
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {r.poLineItem.description}
              </TableCell>
              <TableCell>{r.received}</TableCell>
              <TableCell>
                {currencyFormatter.format(r.receivedPrice / 100)}
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

export default ReceivedLineItemTable;
