import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Supplier } from "@amm/types";
import { FC } from "react";
import { CircularProgress, Paper } from "@mui/material";
import { dataTables } from "src/styles";

const _ = require("lodash");

interface Props {
  data: Supplier[];
  pageSize: number;
  totalRows: number;
  onPageChange: Function;
  onPageSizeChange: Function;
}

const SupplierTable: FC<Props> = (props: Props): JSX.Element => {
  if (!props.data) return <></>;

  const columns: GridColDef[] = [
    { field: "id", hide: true },
    { field: "guid", hide: true },
    { field: "name", headerName: "Name", minWidth: 300, flex: 1 },
    {
      field: "website",
      headerName: "Website",
      minWidth: 400,
      flex: 1,
      renderCell: (data) => <a href={data.value}>{data.value}</a>,
    },
    {
      field: "contacts",
      headerName: "Contact",
      minWidth: 400,
      flex: 1,
      renderCell: (data) => {
        return data.value
          .map((c) => (
            <p>
              {c.name} (<a href={"mailto:" + c.email}>{c.email}</a>)
            </p>
          ))
          .reduce((a, b) => a + b);
      },
    },
  ];

  const rows = props.data.map((s: Supplier) => {
    return {
      id: s.id,
      guid: s.guid,
      name: s.name,
      website: s.website,
      contacts: !_.isEmpty(s.contacts)
        ? s.contacts.map((e) => {
            return { name: e.name, email: e.email };
          })
        : [],
    };
  });

  return (
    <>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
      >
        <DataGrid
          components={{ LoadingOverlay: CircularProgress }}
          rows={rows}
          columns={columns}
          pageSize={props.pageSize}
          rowCount={props.totalRows}
          paginationMode="server"
          autoHeight
          density="compact"
          onRowClick={(colParams) => {
            return (window.location.href = `/purchase-orders?supplier=${colParams.row.name}`);
          }}
          onPageChange={(pageNumber, details) =>
            props.onPageChange(pageNumber, details)
          }
          onPageSizeChange={(pageSize, details) =>
            props.onPageSizeChange(pageSize, details)
          }
          sx={dataTables}
        />
      </Paper>
    </>
  );
};

export default SupplierTable;
