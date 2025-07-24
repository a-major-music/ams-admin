import { FC, useEffect, useState } from "react";

import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import { IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { dataTables } from "src/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import DoneIcon from "@mui/icons-material/Done";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ButtonWithConfirm from "./modal.confirm-dialog.component";

import _ from "lodash";
import { SvgIconComponent } from "@mui/icons-material";

enum State {
  OK,
  BAD_LOCATION,
  COUNT_LOW,
  COUNT_HIGH,
}

const LINE_STATES = new Map<State, { message: string; icon: SvgIconComponent }>(
  [
    [
      State.BAD_LOCATION,
      {
        message: "This variant has a different location!",
        icon: ReportProblemIcon,
      },
    ],
    [
      State.COUNT_LOW,
      {
        message: "The number counted is less than the current stock level!",
        icon: KeyboardDoubleArrowDownIcon,
      },
    ],
    [
      State.COUNT_HIGH,
      {
        message: "The number counted is more than the current stock level!",
        icon: KeyboardDoubleArrowUpIcon,
      },
    ],
  ]
);

interface Props {
  loading?: boolean;
  updateLocation: (
    guid: string,
    location: string,
    callback?: () => void
  ) => void;
  location: string;
  stocktakeLines: any[];
  setStocktakeLines: (any: any) => void;
  showOnlyErrors?: boolean;
  editable?: boolean;
}

const StocktakeTable: FC<Props> = (props: Props): JSX.Element => {
  const [rows, setRows] = useState<any[]>();

  useEffect(() => {
    const newRows = props.stocktakeLines
      .map((line: any) => {
        const pv = line.variant;

        // Depending on how we got it product may have a leading capital!
        const p = pv.Product || pv.product;
        const state = _checkStateForRow(p, pv, line.count);
        const row = {
          id: pv.id,
          image: !_.isEmpty(pv.imageUrls)
            ? [pv.imageUrls[0].uri, pv.name]
            : undefined,
          stateAndSku: [pv.sku, state], // Combined field for UX - fields are provided individually below
          state: state,
          guid: pv.guid,
          sku: pv.sku,
          name: `${p.name} (${pv.filterValues})`,
          barcode: pv.barcode,
          location: props.location,
          product: p,
          scanned: line.count,
          available: pv.stockOnHand,
        };

        return row;
      })
      .filter(
        (line) => props.showOnlyErrors === false || line.state !== State.OK
      );

    setRows(newRows);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.stocktakeLines, props.showOnlyErrors]);

  const columns: GridColDef[] = [
    { field: "id", hide: true },
    {
      field: "image",
      headerName: "Image",
      sortable: false,
      minWidth: 80,
      align: "center",
      renderCell: (params) => {
        if (params.value) {
          return (
            <img src={params.value[0]} height={40} alt={params.value[1]} />
          );
        } else {
          return <Typography variant="caption">No image</Typography>;
        }
      },
    },
    {
      field: "stateAndSku",
      headerName: "SKU",
      flex: 1,
      minWidth: 200,
      filterable: false,
      renderCell: (params) => {
        if (params.value[1] === State.OK) {
          return (
            <>
              <DoneIcon color="success" />
              &nbsp;{params.value[0]}
            </>
          );
        } else {
          const message: string = LINE_STATES.get(params.value[1]).message;
          const Icon: SvgIconComponent = LINE_STATES.get(params.value[1]).icon;
          return (
            <>
              <Tooltip title={message}>
                <Icon color="warning" />
              </Tooltip>
              &nbsp;{params.value[0]}
            </>
          );
        }
      },
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 450,
      flex: 1,
      filterable: false,
    },
    {
      field: "barcode",
      headerName: "Barcode",
      minWidth: 150,
      flex: 1,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: "scanned",
      headerName: "# Scanned",
      align: "center",
      flex: 1,
      editable: props.editable,
      type: "number",
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: "available",
      headerName: "On Hand",
      align: "center",
      flex: 1,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      disableColumnMenu: true,
      sortable: false,
      filterable: false,
      flex: 1,
      minWidth: 140,
      align: "left",
      renderCell: (params) => (
        <>
          <Tooltip title="Delete this row">
            <IconButton
              disabled={!props.editable}
              onClick={(e) => _deleteRow(e, params.row)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          {params.row.state === State.BAD_LOCATION && (
            <ButtonWithConfirm
              renderAsIcon
              disabled={!props.editable}
              onOk={() => _updateLocation(params.row)}
              message={`This will change the location of ${params.row.sku} from ${params.row.product.location} to ${props.location}. `}
            >
              <Tooltip
                title={`Update location of ${params.row.sku} to ${props.location}`}
              >
                <EditLocationAltIcon />
              </Tooltip>
            </ButtonWithConfirm>
          )}
          <ButtonWithConfirm
            renderAsIcon
            disabled={!props.editable || params.row.scanned === 0}
            message={`This will set the stock level of ${params.row.sku} to 0 in ${props.location}.`}
            onOk={() => _setScannedToZero(params.row)}
          >
            <Tooltip title={`Set available stock of ${params.row.sku} to 0`}>
              <RemoveCircleOutlineIcon />
            </Tooltip>
          </ButtonWithConfirm>
        </>
      ),
    },
  ];

  const _checkStateForRow = (p, pv, count) => {
    if (p.location !== props.location) return State.BAD_LOCATION;
    if (count < pv.stockOnHand) return State.COUNT_LOW;
    if (count > pv.stockOnHand) return State.COUNT_HIGH;
    return State.OK;
  };

  const _deleteRow = (e, row) => {
    props.setStocktakeLines(
      props.stocktakeLines.filter((line) => line.variant.sku !== row.sku)
    );
  };

  const _setScannedToZero = (row: any) => {
    props.stocktakeLines.find((line) => line.variant.sku === row.sku).count = 0;

    props.setStocktakeLines([...props.stocktakeLines]);

    return row;
  };

  const _handleEdits = (
    newRow: GridRowModel,
    oldRow: GridRowModel
  ) => {
    newRow.scanned = newRow.scanned >= 1 ? newRow.scanned : 1;

    props.stocktakeLines.find((line) => line.variant.sku === newRow.sku).count =
      +newRow.scanned;

    props.setStocktakeLines([...props.stocktakeLines]);

    return newRow;
  };

  const _updateLocation = (row: any) => {
    props.updateLocation(row.product.guid, row.location, () => {
      const v = props.stocktakeLines.find(
        (line) => line.variant.sku === row.sku
      ).variant;
      const p = v.product || v.Product;
      p.location = row.location;

      props.setStocktakeLines([...props.stocktakeLines]);
    });
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      {rows && (
        <DataGrid
          loading={props.loading}
          experimentalFeatures={{ newEditingApi: true }}
          rows={rows}
          columns={columns}
          autoHeight
          density="compact"
          processRowUpdate={_handleEdits}
          onProcessRowUpdateError={(e) => alert(e)}
          disableSelectionOnClick
          sx={dataTables}
        />
      )}
    </Paper>
  );
};

export default StocktakeTable;
