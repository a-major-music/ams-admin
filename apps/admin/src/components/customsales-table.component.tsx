import { IconButton, Link } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { dataTables } from "src/styles";
import DoneIcon from "@mui/icons-material/Done";
import AddIcon from "@mui/icons-material/Add";

interface CustomSalesTableProps {
  data: any[];
  onDone: (rowId: number) => void;
  onIgnore: (title: string) => void;
}

export default function CustomSalesTable(props: CustomSalesTableProps) {
  const columns: GridColDef[] = [
    { field: "id", hide: true },
    { field: "createdAt", headerName: "Order date", flex: 2, renderCell: (params) => new Date(params.row.createdAt).toUTCString()},
    {
      field: "orderURL",
      headerName: "Shopify Order URL",
      flex: 3,
      renderCell: (params) => {
        return <Link href={params.row.orderURL} target="new">{params.row.orderURL}</Link>;
      },
    },
    { field: "title", headerName: "Custom Title", flex: 2 },
    {
      field: "actions",
      headerName: "",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <IconButton onClick={() => props.onDone(params.row.id)}>
              <DoneIcon color="success" />
            </IconButton>
            <IconButton onClick={() => props.onIgnore(params.row.title)}>
              <AddIcon color="inherit" />
            </IconButton>
          </>
        );
      },
    },
  ];

  const rows = props.data;

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      autoHeight
      density="compact"
      //   processRowUpdate={_handleEdits}
      onProcessRowUpdateError={(e) => alert(e)}
      disableSelectionOnClick
      sx={dataTables}
    />
  );
}
