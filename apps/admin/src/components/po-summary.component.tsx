import { TableContainer, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { shortDateFormatter, currencyFormatter } from "src/util";
import { PurchaseOrder } from "@amm/types";

export const POSummary = (props: {po: PurchaseOrder, hideDate?: boolean}) => (
    <TableContainer>
    <Table size="small">
      <TableBody>
        {!props.hideDate && props.po.issueDate && <TableRow>
          <TableCell variant="head">Issue Date</TableCell>
          <TableCell variant="body" align="right">
            {shortDateFormatter(props.po.issueDate)}
          </TableCell>
        </TableRow>}
        <TableRow>
          <TableCell variant="head">Subtotal</TableCell>
          <TableCell variant="body" align="right">
            {currencyFormatter.format(props.po.subTotal / 100)}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head">Tax Amount</TableCell>
          <TableCell variant="body" align="right">
            {currencyFormatter.format(props.po.taxAmount / 100)}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            variant="head"
            sx={{ fontWeight: "bold", fontSize: "1.1em" }}
          >
            Total
          </TableCell>
          <TableCell
            variant="body"
            align="right"
            sx={{ fontWeight: "bold", fontSize: "1.1em" }}
          >
            {currencyFormatter.format(props.po.total / 100)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
)