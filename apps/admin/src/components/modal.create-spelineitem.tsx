import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { ProductType } from "@amm/types";
import { useForm } from "react-hook-form";

import { useState } from "react";
import { currencyFormatter } from "src/util";

interface Props {
  open: boolean;
  onClose: any;
  onSave: any;
}

const _generateSPESku = () => {
  const d = new Date();
  const p: string[] = [];

  p[0] = (d.getFullYear() - 2000).toString();
  p[1] = (d.getMonth() + 1).toString().padStart(2, "0");
  p[2] = d.getDate().toString().padStart(2, "0");
  p[3] = d.getHours().toString().padStart(2, "0");
  p[4] = d.getMinutes().toString().padStart(2, "0");

  return `SPE${p.reduce((a, b) => a.concat(b))}`;
};

export const CreatePOSPELineItemModal = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const initialFormData = {
    sku: "",
    id: Date.now(), // SPEs don't have an ID, but still need one to be in a DataTable
    type: "",
    supplierCode: "",
    description: "",
    details: "",
    buyPriceStr: "£0.00",
    buyPrice: 0,
    quantity: 1,
    taxable: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  const _onChange = (e) => {
    const k = e.target.id || e.target.name;
    const v = e.target.value;
    const d = { ...formData, [k]: v };

    // Set the correct tax if the type has changed
    if (k === "type") {
      d.taxable = v !== ProductType.BOOK;
    }

    if (k === "quantity") {
      d.quantity = +v < 1 ? 1 : +v;
    }

    // Convert the string representation of the buy price into the actual, pence based buyPrice
    if (k === "buyPriceStr") {
      d.buyPrice = +v.replace(/[^0-9]/g, "");
      d.buyPriceStr = currencyFormatter.format(d.buyPrice / 100);
    }

    setFormData({ ...formData, ...d });
  };

  const _save = () => {
    const f = { ...formData };
    setFormData(initialFormData);
    props.onSave(f, f.quantity);
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      fullWidth
    >
      <form
        onSubmit={handleSubmit(
          (d) => _save(),
          (e) => console.log(e)
        )}
      >
        <DialogTitle>Add Special Order</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            <Grid item xs={4}>
              <FormControl fullWidth error={'sku' in errors}>
                <TextField
                  required
                  id="sku"
                  label="SKU"
                  value={formData.sku}
                  onChange={_onChange}
                />
              </FormControl>
              <Button
                variant="text"
                size="small"
                color="primary"
                onClick={() => setFormData({...formData, sku: _generateSPESku()})}
                sx={{textTransform: "none"}}
              >
                  Generate SKU</Button>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth error={'type' in errors}>
                <InputLabel>Type *</InputLabel>
                <Select
                  {...register("type", { required: true })}
                  label="Type"
                  id="type"
                  value={formData.type}
                  required
                  sx={{ textAlign: "left" }}
                  onChange={_onChange}
                >
                  {[
                    ProductType.BOOK,
                    ProductType.ACCESSORY,
                    ProductType.GIFT,
                    ProductType.INSTRUMENT,
                    ProductType.OTHER,
                  ].map((t) => (
                    <MenuItem key={t} id={t} value={t}>
                      {t}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth error={'supplierCode' in errors}>
                <TextField
                  required
                  id="supplierCode"
                  label="Supplier Code"
                  value={formData.supplierCode}
                  onChange={_onChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth error={'description' in errors}>
                <TextField
                  required
                  id="description"
                  label="Description"
                  value={formData.description}
                  onChange={_onChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth error={'details' in errors}>
                <TextField
                  id="details"
                  label="Optional further details about the special order"
                  value={formData.details}
                  onChange={_onChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={10}>
              <input
                type="number"
                hidden={true}
                id="buyPrice"
                value={formData.buyPrice}
                {...register("buyPrice", { min: 1 })}
              />
              <FormControl fullWidth error={'buyPrice' in errors}>
                <TextField
                  error={'buyPrice' in errors}
                  required
                  id="buyPriceStr"
                  label="Price to Customer"
                  value={formData.buyPriceStr}
                  onChange={_onChange}
                />
                {'buyPrice' in errors && (
                  <FormHelperText>
                    Please enter a buy price, excluding any VAT
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <TextField
                  required
                  id="quantity"
                  label="Quantity"
                  value={formData.quantity}
                  onChange={_onChange}
                  type="number"
                />
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="secondary" onClick={() => {setFormData(initialFormData); props.onClose()}}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
