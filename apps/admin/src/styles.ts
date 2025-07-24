import { styled } from '@mui/material/styles';
import { TableCell, tableCellClasses, TableRow } from "@mui/material";

export const dataTables = {
  // Table headers
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: "black",
    color: "white",
  },
  // Alternating row colours
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    "& .MuiDataGrid-row": {
      "&:nth-child(2n)": { backgroundColor: "rgba(235, 235, 235, .7)" },
    },
  },
  // Disable the built in "pipe symbol" separators
  "& .MuiDataGrid-columnSeparator": {
    display: "none",
  },
  // Enable the same white border separators as used in StyledTableCell below
  "& .MuiDataGrid-columnHeaderTitleContainer": {
    borderLeft: "solid 1px white",
    paddingLeft: "4px",
    color: "white"
  },
  "& .MuiDataGrid-sortIcon": {
    color: "white"
  },
  "& .MuiDataGrid-menuIconButton": {
    color: "white"
  },
};

// Wrapped Table components to provide styling (doesn't work for DataTables - check CSS for these)
export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "black",
      color: theme.palette.common.white,
      fontWeight: "normal",
      borderLeft: "solid 1px white"
    },
    [`&.${tableCellClasses.body}`]: {
    //   fontSize: 14,
    },
  }));
  
  export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  