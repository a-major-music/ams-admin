import { FC } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { dataTables } from "../styles";
import { Backdrop, CircularProgress, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ButtonWithConfirm from "./modal.confirm-dialog.component";

interface Props {
  locations: {
    location: String;
    hasStocktake: boolean;
    stocktakeApplied: boolean;
  }[];
  loading: boolean;
  onClickStocktake: (location: string) => void;
  onClickRename: (location: string) => void;
  onDeleteStocktake: (location: string) => void;
}

const LocationsTable: FC<Props> = (props: Props): JSX.Element => {
  const columns: GridColDef[] = [
    { field: "id", hide: true },
    {
      field: "name",
      flex: 1,
      headerName: "Name",
      renderCell: (params) => (
        <>
          <Typography variant="body1">{params.value}</Typography>
          <IconButton
            size="small"
            onClick={() => props.onClickRename(params.row.location)}
          >
            <Tooltip title="Rename location">
              <EditIcon />
            </Tooltip>
          </IconButton>
        </>
      ),
    },
    {
      field: "actions",
      flex: 1,
      headerName: "Stock take actions",
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <>
          <IconButton
            size="small"
            onClick={() => props.onClickStocktake(params.row.location)}
          >
            {params.row.stocktakeApplied && params.row.hasStocktake && (
              <Tooltip title={`View applied stock take`}>
                <VisibilityIcon color="info" />
              </Tooltip>
            )}
            {!params.row.stocktakeApplied && params.row.hasStocktake && (
              <Tooltip title="Resume active stock take">
                <PlayCircleIcon color="warning" />
              </Tooltip>
            )}
            {!params.row.stocktakeApplied && !params.row.hasStocktake && (
              <Tooltip title="Start new stock take">
                <PlayCircleIcon />
              </Tooltip>
            )}
          </IconButton>
          {params.row.hasStocktake && (
            <ButtonWithConfirm
              size="small"
              title="Are you sure?"
              message="This will clear all scanned items from the stocktake. Stock levels will not be changed."
              onOk={() => props.onDeleteStocktake(params.row.location)}
            >
              <Tooltip title="Clear this stock take">
                <DeleteIcon color="error"/>
              </Tooltip>
            </ButtonWithConfirm>
            )}
        </>
      ),
    },
  ];

  const rows = props.locations.map(
    ({ location, hasStocktake, stocktakeApplied }) => {
      return {
        id: location,
        name: location,
        location,
        hasStocktake,
        stocktakeApplied,
      };
    }
  );

  return (
    <>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
      >
        <DataGrid
          columns={columns}
          rows={rows}
          pageSize={25}
          density="compact"
          autoHeight
          disableSelectionOnClick
          disableColumnFilter
          sx={dataTables}
        />
      </Paper>
      <Backdrop open={props.loading}><CircularProgress/></Backdrop>
    </>
  );
};

export default LocationsTable;
