import { PurchaseOrder } from "@amm/types";

import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import {
  deletePurchaseOrder,
  getPurchaseOrders,
} from "../services/purchasing.service";

import PurchaseOrderTable from "src/components/po-table.component";
import GlobalMessageContext from "src/context/globalMessage.context";

import { useNavigate } from "react-router-dom";

import { EditPurchaseOrderRoute, ViewPurchaseOrderRoute } from "src/routes";
import Search from "../components/search.component";
import { useStickyState } from "src/util";

const PurchaseOrdersView = (props) => {
  const navigate = useNavigate();

  const [poData, setPOData] = useStickyState<PurchaseOrder[]>([], "po.poData");
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTermFinal, setSearchTermFinal] = useStickyState<String>(
    "",
    "po.searchTermFinal"
  );
  const [searchTerm, setSearchTerm] = useStickyState<String>(
    "",
    "po.searchTerm"
  );
  const [currentSkip, setCurrentSkip] = useStickyState<number>(
    0,
    "po.currentSkip"
  );
  const [currentTake, setCurrentTake] = useStickyState<number>(
    25,
    "po.currentTake"
  );
  const [sortModel, setSortModel] = useStickyState<any>(
    [{ field: "number", sort: "desc"}],
    "po.sortModel"
  );
  const [filterModel, setFilterModel] = useStickyState<any>(
    [{ columnField: "state", operatorValue: "is", value: "po.active" }],
    "po.filterModel"
  );
  const [totalRows, setTotalRows] = useStickyState<number>(0, "po.totalRows");

  const uxMessage = useContext(GlobalMessageContext);

  useEffect(() => {
    _initPurchaseOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSkip, currentTake, sortModel, filterModel, searchTermFinal]);

  useEffect(() => {
    setCurrentSkip(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterModel]);

  // Initialize the PO data. If a poNumber is provided this is set as the selectedPO
  const _initPurchaseOrders = (poNumber?: string, callback?: Function) => {
    getPurchaseOrders(
      {
        skip: currentSkip,
        take: currentTake,
        sortModel: sortModel,
        filterModel: filterModel,
        searchTerm: searchTermFinal,
      },
      (data) => {
        setPOData(data);

        if (callback) callback();
      },
      (rows) => {
        setTotalRows(rows);
      },
      (error) => {
        setLoading(false);
        setPOData([]);
        uxMessage.setMessage({
          message:
            "Sorry - we seem to be having some troubles right now... please try again later!",
          severity: "error",
        });
      }
    );
  };

  const _setSkip = (page, details) => {
    setCurrentSkip(page * currentTake);
  };

  const _setTake = (pageSize, details) => {
    const oldTake = currentTake;
    setCurrentTake(pageSize);
    setCurrentSkip(Math.trunc(currentSkip * (oldTake / currentTake)));
  };

  const _onDelete = (guid?: string) => {
    deletePurchaseOrder({
      guid: guid,
      success: () => {
        uxMessage.setMessage({
          message: `Purchase Order Deleted`,
          severity: "success",
        });

        _initPurchaseOrders();
      },
      failure: () => {
        uxMessage.setMessage({
          message: `Sorry - something went wrong!`,
          severity: "error",
        });
      },
    });
  };

  const _search = (st: string) => {
    setSearchTerm(st);
    setSearchTermFinal(st);
  };

  const _reset = () => {
    setSearchTerm("");
    setSearchTermFinal("");
  };

  const _onSelectRow = (po: PurchaseOrder) => {
    navigate(ViewPurchaseOrderRoute, { state: { selectedPo: po.number } });
  };

  return (
    <>
      <Typography variant="h1">Purchase Orders</Typography>
      <Box sx={{ m: 1, textAlign: "right" }}>
        <Button
          variant="contained"
          size="small"
          color="inherit"
          onClick={() =>
            navigate(EditPurchaseOrderRoute)
          }
        >
          Create Purchase Order
        </Button>
      </Box>
      <Box sx={{ m: 1 }}>
        <div style={{ textAlign: "center" }}>
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            doSearch={_search}
            onReset={_reset}
            placeholderText="Please enter a PO number, SKU, barcode or supplier code"
            clearOnEnter={false}
          />
        </div>
      </Box>
      <Box sx={{ m: 3 }}></Box>
      <Box sx={{ m: 1 }}>
        <PurchaseOrderTable
          loading={loading}
          data={poData}
          pageSize={currentTake}
          totalRows={totalRows}
          onSelectRow={_onSelectRow}
          onPageChange={_setSkip}
          onPageSizeChange={_setTake}
          onSortModelChange={setSortModel}
          onFilterModelChange={setFilterModel}
          onDelete={_onDelete}
        />
      </Box>
    </>
  );
};

export default PurchaseOrdersView;
