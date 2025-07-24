import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import {
  PurchaseOrder,
  PurchaseOrderLineItem,
  PurchaseOrderState,
  ProductVariant
} from "@amm/types";

import PurchaseOrderLineItemTable from "src/components/po-lineitem-table.component";
import { CreatePOLineItemModal } from "src/components/modal.create-polineitem";
import {
  createPurchaseOrder,
  updatePurchaseOrder,
} from "src/services/purchasing.service";
import { PurchaseOrdersRoute, ViewPurchaseOrderRoute } from "src/routes";
import GlobalMessageContext from "src/context/globalMessage.context";
import { MISSING_PRODUCT_IMAGE_URL, VAT_RATE } from "src/config";

import _ from "lodash";
import { CreatePOSPELineItemModal } from "src/components/modal.create-spelineitem";
import { POSummary } from "src/components/po-summary.component";
import { SupplierPicker } from "src/components/supplier-picker.component";

const EditPurchaseOrderView = (props) => {
  const uxMessage = useContext(GlobalMessageContext);
  const navigate = useNavigate();
  const addProductButton = useRef(null);

  // If we are passed a PO, then we are editing that rather than creating a new one
  const { state } = useLocation();
  const po = state ? state["po"] : undefined;
  const title = po ? `Update ${po.number}` : "Create Purchase Order";

  // const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [newPo, setNewPo] = useState<PurchaseOrder>(
    po
      ? { ...po }
      : {
          id: undefined,
          state: PurchaseOrderState.DRAFT,
          lineItems: [],
          issueDate: new Date(),
        }
  );

  const [showLineItemDialog, setShowLineItemDialog] = useState(false);
  const [showSPEDialog, setShowSPEDialog] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updatePoLineItems = (data: PurchaseOrderLineItem[]) => {
    const filtered = data.filter((li) => li.pendingDelete !== true);
    newPo.subTotal = filtered
      .map((li) => li.itemCost * li.quantityOrdered)
      .reduce((a, b) => a + b);

    newPo.taxAmount = Math.round(
      filtered
        .map((li) =>
          li.variantTaxRate
            ? (li.variantTaxRate / 100) * li.itemCost * li.quantityOrdered
            : 0
        )
        .reduce((a, b) => a + b)
    );
    newPo.total = newPo.subTotal + newPo.taxAmount;

    setNewPo({ ...newPo, lineItems: data });
  };

  const supplierChanged = (data: any, input: string) => {
    const guid = data.target.value;
    newPo.supplierId = undefined;
    setNewPo({ ...newPo, supplier: { guid: guid } });
  };

  const issueDateChanged = (date: any) => {
    setNewPo({ ...newPo, issueDate: date });
  };

  const save = () => {
    // This prevents form submission when CR is used in the line item modals
    if (showLineItemDialog || showSPEDialog) return;

    if (_.isEmpty(newPo.lineItems)) {
      uxMessage.setMessage({
        message: `Please create at least one line item`,
        severity: "warning",
      });
      return;
    }

    // Need to rip out any line items with "temp-" IDs, so we create these properly
    newPo.lineItems.forEach((li: PurchaseOrderLineItem) => {
      if (li.id < 0) {
        delete li.id;
      }

      // Delete the stock levels we stored here too
      delete li.stockOnHand;
    });

    const createOrUpdate = po ? updatePurchaseOrder : createPurchaseOrder;

    createOrUpdate({
      // Taking a copy like this prevents react from barfing on the various underlying changes that happen to the
      // object before it's sent server-side
      po: { ...newPo },
      success: (r) => {
        uxMessage.setMessage({
          message: `${r.data.number} successfully ${
            po ? "updated" : "created"
          }`,
          severity: "success",
        });

        // View the PO just created
        navigate(ViewPurchaseOrderRoute, {
          state: { selectedPo: r.data.number },
        });
      },
      failure: (r) => {
        uxMessage.setMessage({
          message: `Sorry - something went wrong`,
          severity: "error",
        });
      },
    });
  };

  const deleteLineItem = (e: any) => {
    const sku = e.currentTarget.value.substring("delete-".length);
    const data = newPo.lineItems;

    // Prevent deletion of the last item
    if (data.filter((i) => i.pendingDelete !== true).length === 1) {
      uxMessage.setMessage({
        message: "Sorry - you cannot delete the last item",
        severity: "error",
      });

      return;
    }

    // If we are editing an existing PO we set a new attribute to tell the API
    // to delete this one, otherwise we just remove it from the collection because
    // we've not saved it yet.
    if (po) {
      const li = data.filter((i) => i.variantSku === sku)[0];
      li.pendingDelete = true;

      // Number of items is stil the same, but need to trigger a refresh to hide the pendingDelete item
      updatePoLineItems(data);
    } else {
      updatePoLineItems(data.filter((i) => i.variantSku !== sku));
    }
  };

  const addLineItem = (v: ProductVariant, quantity: number) => {
    if (v) {
      // Check if this is already here, pending delete (i.e., been readded without saving)
      const deleted: PurchaseOrderLineItem = newPo.lineItems.filter(
        (i: PurchaseOrderLineItem) => i.pendingDelete && i.variantSku === v.sku
      );

      if (deleted[0]) {
        console.log(`${v.sku} was deleted - restoring`);
        // Item was previously deleted - so restore it and move it to the end of the list
        deleted[0].pendingDelete = undefined;
        deleted[0].quantityOrdered = 1;
      } else {
        // Try to find this to avoid dupes based on variantSKU, but leave it in it's place in the list
        const filtered: PurchaseOrderLineItem[] = newPo.lineItems.filter(
          // We use SKU and not GUID here in case the thing doesn't have an actual variant, like an SPE
          (i: PurchaseOrderLineItem) => i.variantSku === v.sku
        );

        if (filtered[0]) {
          filtered[0].quantityOrdered++;
        } else {
          const poliDescription = v.product
            ? `${v.product.name} ${
                v.filterValues ? "(" + v.filterValues + ")" : ""
              } ${
                v.boughtInPacks === true ? "(Pack of " + v.packSize + ")" : ""
              }`
            : v.description;
          newPo.lineItems.push({
            // the id here is needed to manipulate the table
            // but the object will need a new ID when this is
            // persisted, so we clear this out later, based on it being < 0.
            id: -v.id,
            product: v.product,
            description: poliDescription, // different for SPEs
            variantSku: v.sku,
            variantGuid: v.guid,
            variantUPC: v.barcode,
            variantSupplierCode: v.supplierCode,
            variantTaxRate: v.product?.taxable || v.taxable ? VAT_RATE : 0, // different for SPEs
            stockOnHand: v.stockOnHand,
            variantMediaURI:
              !_.isEmpty(v.imageUrls) && v.imageUrls[0].uri
                ? v.imageUrls[0]?.uri
                : MISSING_PRODUCT_IMAGE_URL,
            purchaseOrder: newPo,
            itemCost: v.buyPrice,
            quantityOrdered: quantity,
            packSize: v.packSize || 1,
            receipts: [],
          });
        }
      }

      // Use this to update the line items, as it recalculates summaries
      updatePoLineItems(newPo.lineItems);

      // Move the focus to the Add button, which has the benefit of moving the page down automatically
      addProductButton.current.scrollIntoView();
    }
  };

  return (
    <>
      <Typography variant="h1">{title}</Typography>
      <form onSubmit={handleSubmit((d) => save())}>
        <Box sx={{ m: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <SupplierPicker
                register={register}
                errors={errors}
                value={newPo.supplier?.guid}
                supplierChanged={supplierChanged}
              />
            </Grid>
            <Grid item xs={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Issue Date"
                  value={new Date(newPo.issueDate)}
                  onChange={(value) => issueDateChanged(value)}
                  format="dd-MM-yyyy"
                />
              </LocalizationProvider>
            </Grid>
            {!_.isEmpty(newPo.lineItems) && (
              <Grid item xs={4}>
                <POSummary po={newPo} hideDate />
              </Grid>
            )}
            <Grid item xs={12}>
              <Typography variant="h2">Line Items</Typography>
              <PurchaseOrderLineItemTable
                parentPo={newPo}
                onUpdate={updatePoLineItems}
                onDeleteRow={deleteLineItem}
                allowEditQuantity={true}
                hideReceiveCols={true}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setShowLineItemDialog(true)}
                sx={{ margin: 1 }}
                ref={addProductButton}
              >
                Add Product
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setShowSPEDialog(true)}
                sx={{ margin: 1 }}
              >
                Add Special Order
              </Button>
              <CreatePOLineItemModal
                open={showLineItemDialog}
                onClose={() => setShowLineItemDialog(false)}
                onSelectVariant={(v: ProductVariant, quantity: number) => {
                  addLineItem(v, quantity);
                  setShowLineItemDialog(false);
                }}
              />
              <CreatePOSPELineItemModal
                open={showSPEDialog}
                onClose={() => setShowSPEDialog(false)}
                onSave={(spe: ProductVariant, quantity: number) => {
                  addLineItem(spe, quantity);
                  setShowSPEDialog(false);
                }}
              />
            </Grid>
            <Grid item xs={6} textAlign="left">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  navigate(PurchaseOrdersRoute);
                }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={showLineItemDialog}
              >
                {!po
                  ? "Save as Draft"
                  : po.state === PurchaseOrderState.DRAFT
                  ? "Update Draft"
                  : "Update"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
};

export default EditPurchaseOrderView;
