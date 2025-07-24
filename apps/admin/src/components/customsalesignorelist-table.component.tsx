import { IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { dataTables } from "src/styles";
import DeleteIcon from "@mui/icons-material/Delete";

interface CustomSalesIgnoreListProps {
  data: any[]
  onDelete: (id: number) => void
}

export default function CustomSalesIgnoreListTable(props: CustomSalesIgnoreListProps) {
  const columns: GridColDef[] = [
    { field: "id", hide: true },
    { field: "title", headerName: "Title", flex: 0.8 },
    {
      field: "actions",
      headerName: "",
      flex: 0.2,
      renderCell: (params) => {
        return (
          <IconButton onClick={() => props.onDelete(params.row.id)}><DeleteIcon color="error"/></IconButton>
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
