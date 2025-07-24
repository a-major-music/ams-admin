import {
  PurchaseOrder,
  PurchaseOrderState,
  PurchaseOrderLineItem,
  PurchaseOrderLineItemReceipt,
} from "@amm/types";

import {
  Backdrop,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import {
  deletePurchaseOrder,
  deletePurchaseOrderLineReceipts,
  getPurchaseOrder,
  receivePurchaseOrderLines,
  updatePurchaseOrder,
} from "../services/purchasing.service";
import PurchaseOrderLineItemTable from "src/components/po-lineitem-table.component";
import GlobalMessageContext from "src/context/globalMessage.context";
import StateChip from "src/components/state-chip.component";
import ButtonWithConfirm from "src/components/modal.confirm-dialog.component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { EditPurchaseOrderRoute, PurchaseOrdersRoute } from "src/routes";
import _ from "lodash";
import { PURCHASING_API } from "src/config";
import { getInventoryForVariants, updateVariantStockLevelAndPrices } from "src/services/product.service";
import { POSummary } from "src/components/po-summary.component";

const ViewPurchaseOrderView = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const poNumber = state["selectedPo"];

  // PO to be viewed should be passed as selectedPo, so redirect to the full list if it's not.
  if (_.isEmpty(poNumber)) {
    navigate(PurchaseOrdersRoute);
  }

  // Load the selectedPo into a state variable
  const [selectedPo, setSelectedPo] = useState<PurchaseOrder>();
  const [rowsToReceive, setRowsToReceive] = useState([]);

  const uxMessage = useContext(GlobalMessageContext);

  useEffect(() => {
    getPurchaseOrder(poNumber).then((po) => {
      const variants = po.lineItems
        .filter((li) => li.variantGuid)
        .map((li) => li.variantGuid);

      // If the PO is ONLY SPEs we don't bother trying to get stock levels
      if (variants.length > 0) {
        getInventoryForVariants(variants, (inv) => {
          po.lineItems.forEach((li) => {
            const v = inv.find((i) => i.guid === li.variantGuid);
  
            // v may be null as some items may be SPEs or no longer in AMS
            li['stockOnHand'] = v?.stockOnHand || 0;  
          });

          setSelectedPo(po);
        });
      }
      else {
        setSelectedPo(po)
      }
    });
  }, [poNumber]);

  const onDelete = () => {
    _deleteReceipts(
      selectedPo.lineItems.reduce((a, b) => [...a, b.receipts], [])
    ).then(() => {
      deletePurchaseOrder({
        guid: selectedPo.guid,
        success: () => {
          navigate(PurchaseOrdersRoute);
          uxMessage.setMessage({
            message: `Purchase Order Deleted`,
            severity: "success",
          });
        },
        failure: () => {
          uxMessage.setMessage({
            message: `Sorry - something went wrong!`,
            severity: "error",
          });
        },
      });
    });
  };

  const _updatePO = (po: PurchaseOrder) => {
    updatePurchaseOrder({
      po: po,
      success: () => {
        uxMessage.setMessage({
          severity: "success",
          message: `${po.number} updated successfully`,
        });
        setSelectedPo(po);
      },
      failure: () =>
        uxMessage.setMessage({
          severity: "error",
          message: "Sorry - something went wrong",
        }),
    });
  };

  const onMakeActive = () => {
    const po = JSON.parse(JSON.stringify(selectedPo, (k, v) => k === "stockOnHand" ? undefined : v));
    _updatePO({...po, state: PurchaseOrderState.ACTIVE});
  };

  const onReceive = () => {
    const receipts = rowsToReceive.map((r) => {
      return {
        poli: selectedPo.lineItems.filter((li) => li.id === r.id)[0],
        receipt: {
          date: new Date(),
          received: r.quantityToReceive,
          receivedPrice: +r.receivePrice.replace(/[^0-9]/g, ""),
        },
      };
    });

    if (!_.isEmpty(receipts.filter((r) => r.receipt.receivedPrice === 0))) {
      // Cannot proceed without prices for all lines
      uxMessage.setMessage({
        severity: "error",
        message: "Please ensure that all lines have a Received At price set",
      });

      return;
    }

    receivePurchaseOrderLines({
      receipts: receipts,
      success: (r) => {
        // Now update the stock levels for those things received
        _updateStockLevelsAndPrices(receipts)
          .then(() => {
            // Finally make changes made to the POLI permanent, but remove the
            // state as this may have been changed behind the scenes and we don't
            // want to overwrite it
            updatePurchaseOrder({
              po: { ...selectedPo, state: undefined },
              success: () => {},
            });

            uxMessage.setMessage({
              severity: "success",
              message: `${receipts.length} lines received successfully`,
            });

            navigate(PurchaseOrdersRoute);
          })
          .catch((e) => {
            console.error(e);
            uxMessage.setMessage({
              severity: "error",
              message: e.toString(),
            });
          });
      },
      failure: (e) => {
        console.error(e);
        uxMessage.setMessage({
          severity: "error",
          message: e.toString(),
        });
      },
    });
  };

  const _deleteReceipts = async (receipts: PurchaseOrderLineItemReceipt[]) => {
    deletePurchaseOrderLineReceipts({
      receipts,
      success: (r) => {
        // Now revert the stock levels for things in that receipt
        _updateStockLevelsAndPrices(
          receipts.map((r) => {
            r.received = -r.received;
            return { poli: r.poLineItem, receipt: r };
          })
        ).then(() => {
          uxMessage.setMessage({
            severity: "success",
            message: `${r.length} lines reverted successfully`,
          });
        });
      },
      failure: (e) => {
        console.error(e);
        uxMessage.setMessage({
          severity: "error",
          message: e,
        });
      },
    });
  };

  const _updateStockLevelsAndPrices = async (receipts) => {
    const promises: Promise<any>[] = [];

    receipts.forEach((receipt) => {
      if (!receipt.poli.variantSku.startsWith("SPE")) {
        promises.push(
          updateVariantStockLevelAndPrices(
            receipt.poli.variantGuid,
            receipt.receipt.received * (receipt.poli.packSize || 1),
            receipt.poli.retailPriceTmp,
            receipt.receipt.receivedPrice
          )
        );
      }
    });

    return await Promise.all(promises);
  };

  const _rowsChanged = (rows) => {
    setRowsToReceive(rows);

    // Update the selectedPO in memory
    rows.forEach((r) => {
      const poli: PurchaseOrderLineItem = selectedPo.lineItems.filter(
        (poli) => poli.id === r.id
      )[0];

      poli.itemCost = +r.receivePrice.replace(/[^0-9]/g, "");

      // Retail prices are read from the inventory service, and referenced, so this temporary field is a
      // place to hold it to drive the front end, but also enable us to call that service when the item is
      // received.
      poli.retailPriceTmp = +r.retailPrice.replace(/[^0-9]/g, "");
    });
  };

  return (
    <>
      <Backdrop open={!selectedPo}>
        <CircularProgress />
      </Backdrop>
      {selectedPo && (
        <>
          <Box sx={{ m: 1 }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h2" align="left">
                  <Link to={PurchaseOrdersRoute}>Purchase Orders</Link>
                  &nbsp;&gt;&nbsp;{selectedPo.number}
                </Typography>
                <Divider sx={{ margin: 1 }} />
              </Grid>
              <Grid item xs={6}>
                <TableContainer>
                  <Table size="small">
                    <TableBody>
                      <TableRow>
                        <TableCell variant="body" align="left">
                          <Typography variant="h5">
                            {selectedPo.supplier.name}&nbsp;{" "}
                            <StateChip state={selectedPo.state} size="small" />
                          </Typography>
                          &nbsp;
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{ m: 2, p: 0 }}
                  display="flex"
                  justifyContent="flex-end"
                >
                  {/* Receive button */}
                  {selectedPo.state === PurchaseOrderState.ACTIVE &&
                    // Only show the button if we have stuff left to receive
                    selectedPo.lineItems
                      .map(
                        (poli: PurchaseOrderLineItem) => poli.quantityOrdered
                      )
                      .reduce((a, b) => a + b, 0) >
                      selectedPo.lineItems
                        .filter(
                          (poli: PurchaseOrderLineItem) =>
                            !_.isEmpty(poli.receipts)
                        )
                        .map((poli: PurchaseOrderLineItem) => poli.receipts)
                        .reduce((a, b) => [...a, ...b], [])
                        .map(
                          (receipt: PurchaseOrderLineItemReceipt) =>
                            receipt.received
                        )
                        .reduce((a, b) => a + b, 0) && (
                      <Tooltip title="Receive the checked items on this PO">
                        <ButtonWithConfirm
                          disabled={_.isEmpty(rowsToReceive)}
                          size="small"
                          color="primary"
                          variant="contained"
                          message={`This will record a new goods receipt for ${selectedPo.number}.`}
                          onOk={() => onReceive()}
                          sx={{ marginRight: 2 }}
                        >
                          Receive{" "}
                          {rowsToReceive.length > 0
                            ? `(${rowsToReceive.length} row${
                                rowsToReceive.length !== 1 ? "s" : ""
                              }) `
                            : ``}
                        </ButtonWithConfirm>
                      </Tooltip>
                    )}

                  {/* Download buttons */}
                  <Box>                    
                    <Tooltip title="Download CSV">
                    <Button
                      size="small"
                      variant="contained"
                      color="inherit"
                      onClick={() => {
                        window.open(
                          `${PURCHASING_API}csv/${selectedPo.number}`,
                          "poWindow"
                        );
                      }}
                    >
                      Download CSV
                    </Button>
                  </Tooltip>
                  &nbsp;
                  <Tooltip title="Download PDF">
                      <Button
                        size="small"
                        variant="contained"
                        color="inherit"
                        onClick={() => {
                          window.open(
                            `${PURCHASING_API}pdf/${selectedPo.number}`,
                            "poWindow"
                          );
                        }}
                      >
                        Download PDF
                      </Button>
                    </Tooltip>
                  </Box>
                  &nbsp;

                  {/* Make Active button */}
                  {selectedPo.state === PurchaseOrderState.DRAFT && (
                    <Tooltip title="Make Active">
                      <ButtonWithConfirm
                        size="small"
                        variant="contained"
                        message={`This will make ${selectedPo.number} active - the PO will be sent to Xero.`}
                        color="inherit"
                        onOk={() => onMakeActive()}
                        okButtonLabel="Make Active"
                      >
                        Make Active
                      </ButtonWithConfirm>
                    </Tooltip>
                  )}

                  {/* Edit button */}
                  {selectedPo.state !== PurchaseOrderState.RECEIVED && (
                    <Tooltip title="Make changes to the Purchase Order">
                      <Button
                        size="small"
                        variant="contained"
                        color="inherit"
                        onClick={() =>
                          navigate(EditPurchaseOrderRoute, {
                            state: {
                              po: selectedPo,
                            },
                          })
                        }
                        sx={{ marginLeft: 2 }}
                      >
                        Edit Order
                      </Button>
                    </Tooltip>
                  )}
                  {/* Delete button */}
                  <Tooltip title="Delete this Purchase Order">
                    <ButtonWithConfirm
                      size="small"
                      variant="contained"
                      message={`This will permanently delete Purchase Order ${selectedPo.number}!`}
                      color="primary"
                      onOk={() => onDelete()}
                      okButtonLabel="Delete"
                      sx={{ marginLeft: 2 }}
                    >
                      Delete
                    </ButtonWithConfirm>
                  </Tooltip>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={4}>
                <POSummary po={selectedPo} />
              </Grid>
            </Grid>

            <PurchaseOrderLineItemTable
              parentPo={selectedPo}
              hideReceiveCols={selectedPo.state === PurchaseOrderState.DRAFT}
              onRowsToReceiveChange={(rows) => _rowsChanged(rows)}
              onDeleteReceipts={(receipts) =>
                _deleteReceipts(receipts).then(() =>
                  navigate(PurchaseOrdersRoute)
                )
              }
            />
          </Box>
        </>
      )}
    </>
  );
};

export default ViewPurchaseOrderView;
