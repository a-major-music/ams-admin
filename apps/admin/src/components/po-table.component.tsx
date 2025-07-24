import { DataGrid, GridColDef, GridFilterModel } from "@mui/x-data-grid";
import {
  PurchaseOrder,
  PurchaseOrderLineItem,
  PurchaseOrderLineItemReceipt,
  PurchaseOrderState,
} from "@amm/types";
import { FC, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";

import { useSearchParams } from "react-router-dom";
import StateChip from "./state-chip.component";
import ButtonWithConfirm from "./modal.confirm-dialog.component";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { PURCHASING_API } from "src/config";
import { currencyFormatter, useStickyState } from "src/util";
import { dataTables } from "src/styles";

interface Props {
  data: PurchaseOrder[];
  pageSize: number;
  totalRows: number;
  onSelectRow: Function;
  onPageChange: Function;
  onPageSizeChange: Function;
  onSortModelChange: Function;
  onFilterModelChange: Function;
  onDelete: Function;
  loading?: boolean;
}

const PurchaseOrderTable: FC<Props> = (props: Props): JSX.Element => {
  // Possible to redirect to this page with some params
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const deletePurchaseOrder = (guid) => {
    props.onDelete(guid);
  };

  const filterModel: GridFilterModel = {
    items: [
      {
        columnField: "supplier",
        operatorValue: "startsWith",
        value: searchParams.get("supplier"),
      },
    ],
  };

  const guidMap: Map<string, PurchaseOrder> = props.data.reduce(
    (map: Map<string, PurchaseOrder>, p: PurchaseOrder) => {
      map[p.guid] = p;
      return map;
    },
    {}
  );

  const columns: GridColDef[] = [
    { field: "id", hide: true },
    { field: "guid", hide: true },
    { field: "number", headerName: "PO Number", minWidth: 100, flex: 1 },
    {
      field: "state",
      headerName: "Status",
      minWidth: 100,
      flex: 1,
      align: "center",
      renderCell: (params) => <StateChip state={params.value} />,
    },
    {
      field: "receiveStatus",
      headerName: "Received",
      minWidth: 100,
      flex: 1,
      align: "center",
      renderCell: (params) => {
        const po: PurchaseOrder = params.value;

        const quantityOrdered = po.lineItems
          .map((i: PurchaseOrderLineItem) => i.quantityOrdered)
          .reduce((a, b) => a + b);

        const qtr = quantityOrdered -
          po.lineItems
          .map((poli: PurchaseOrderLineItem) => poli.receipts)
          .reduce((a, b) => [...a, ...b], [])
          .map((r: PurchaseOrderLineItemReceipt) => r.received)
          .reduce((a, b) => a + b, 0);

        if (po.state === PurchaseOrderState.RECEIVED) {
          return <CircleIcon />;
        } else if (
          quantityOrdered === qtr
        ) {
          return <CircleOutlinedIcon />;
        } else {
          return <CircleTwoToneIcon />;
        }
      },
    },
    {
      field: "numLineItems",
      headerName: "Quantity",
      sortable: false,
      filterable: false,
      minWidth: 100,
      flex: 1,
      align: "left",
    },
    {
      field: "supplier",
      headerName: "Company Name",
      minWidth: 250,
      flex: 1,
    },
    {
      field: "totalCost",
      headerName: "Total Cost",
      minWidth: 100,
      flex: 1,
      align: "left",
      renderCell: (params) => (
        <Typography variant="body2" sx={{ fontSize: "normal", color: "green" }}>
          {params.value}
        </Typography>
      ),
    },
    { field: "issueDate", headerName: "Created", minWidth: 150, flex: 1 },
    {
      field: "buttons",
      headerName: "Actions",
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <>
          {params.value.state !== PurchaseOrderState.DRAFT && (
            <Tooltip title="PDF">
              <IconButton
                onClick={() => {
                  window.open(
                    `${PURCHASING_API}pdf/${params.value.number}`,
                    "poWindow"
                  );
                }}
              >
                <PictureAsPdfIcon />
              </IconButton>
            </Tooltip>
          )}
          {params.value.state === PurchaseOrderState.DRAFT && (
            <ButtonWithConfirm
              variant="contained"
              message={`This will permanently delete Purchase Order ${params.value.number}!`}
              color="primary"
              renderAsIcon
              onOk={() => deletePurchaseOrder(params.value.guid)}
              okButtonLabel="Delete"
            >
              <Tooltip title="Delete">
                <DeleteIcon />
              </Tooltip>
            </ButtonWithConfirm>
          )}
        </>
      ),
    },
  ];

  const rows = props.data.map((p: PurchaseOrder) => {
    return {
      id: p.id,
      guid: p.guid,
      supplier: p.supplier.name,
      number: p.number,
      state: p.state,
      issueDate: p.issueDate
        ? new Date(p.issueDate).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "",
      numLineItems: p.lineItems
        .map((i: PurchaseOrderLineItem) => i.quantityOrdered)
        .reduce((a, b) => a + b),
      receiveStatus: p,
      totalCost: currencyFormatter.format(p.total / 100),
      buttons: p,
    };
  });

  const filterButtons = [
    {
      label: "Active",
      model: {
        columnField: "state",
        operatorValue: "equals",
        value: "active",
      },
    },
    { label: "All", model: undefined },
    {
      label: "Draft",
      model: {
        columnField: "state",
        operatorValue: "equals",
        value: "draft",
      },
    },
  ];

  const [selectedFilter, setSelectedFilter] = useStickyState<any>(
    filterButtons[0],
    "po.filterButtons"
  );

  useEffect(() => {
    props.onFilterModelChange(
      selectedFilter.model ? [selectedFilter.model] : undefined
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter]);

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      <Grid container>
        {filterButtons.map((b) => {
          const sx =
            b.label === selectedFilter.label
              ? { borderBottom: "2px solid rgb(186, 34, 36)" }
              : {};
          return (
            <Grid item xs={1} sx={sx}>
              <Button
                size="small"
                variant="text"
                onClick={() => setSelectedFilter(b)}
              >
                {b.label}
              </Button>
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <DataGrid
            loading={props.loading || false}
            rows={rows}
            columns={columns}
            pageSize={props.pageSize}
            rowCount={props.totalRows}
            paginationMode="server"
            sortingMode="server"
            filterMode="server"
            autoHeight
            density="compact"
            onPageChange={(pageNumber, details) =>
              props.onPageChange(pageNumber, details)
            }
            onPageSizeChange={(pageSize, details) =>
              props.onPageSizeChange(pageSize, details)
            }
            onSortModelChange={(sm) => props.onSortModelChange(sm)}
            onFilterModelChange={(fm) => props.onFilterModelChange(fm)}
            onRowClick={(params) => props.onSelectRow(guidMap[params.row.guid])}
            initialState={{
              filter: {
                filterModel: filterModel,
              },
            }}
            sx={dataTables}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PurchaseOrderTable;
