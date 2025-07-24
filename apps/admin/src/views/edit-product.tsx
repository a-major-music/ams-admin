import React, { ChangeEvent, useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Product, ProductVariant, ProductType, WeightUnit } from "@amm/types";
import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { ProductsRoute, ViewProductRoute } from "src/routes";
import { useForm } from "react-hook-form";
import { SupplierPicker } from "src/components/supplier-picker.component";
import ProductVariantTable from "src/components/productvariant-table.component";
import ButtonWithConfirm from "src/components/modal.confirm-dialog.component";
import _ from "lodash";
import { createProduct, updateProduct } from "src/services/product.service";
import GlobalMessageContext from "src/context/globalMessage.context";
import { LocationPicker } from "src/components/location-picker.component";

const EditProductView = () => {
  const { palette } = useTheme();
  const {
    register,
    setError,
    setValue,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const uxMessage = useContext(GlobalMessageContext);

  const { state } = useLocation();
  const createNew = state["createNew"];
  const initialProduct: Product = {
    name: "",
    description: "",
    tags: [],
    variants: [],
    productType: "",
  };

  const [product, setProduct] = useState<Product>(
    createNew ? initialProduct : state["selectedProduct"]
  );

  const productName = createNew ? (
    <>New</>
  ) : (
    <>
      <i>Editing:</i> {product.name}
    </>
  );

  const _productTypeChanged = (data: any, input: string) => {
    const type = data.target.value;
    setProduct({
      ...product,
      productType: type,
      taxable: type !== ProductType.BOOK,
    });
  };

  const _supplierChanged = (data: any, input: any) => {
    setProduct({ ...product, supplierGuid: data.target.value });
  };

  const _locationChanged = (data: any, input: any) => {
    setProduct({ ...product, location: data.target.value });
  };

  const _tagsChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const newTags = e.target.value.split(/\s*,\s*/);

    setProduct({ ...product, tags: newTags });
  };

  const _filterFieldsChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const newFilterFields = e.target.value.replace(/\s/g, "");
    setProduct({ ...product, filterFields: newFilterFields });
  };

  const _valueChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.id;
    const value = e.target.value;

    setProduct({ ...product, [key]: value });
  };

  const _addVariant = () => {
    if (product.variants?.length > 0 && (!product.filterFields || product.filterFields?.trim() === "")) {
      product.filterFields = "Variant";
      setValue("filterFields", "Variant");
    }

    // Use the last variant as a template, if there is one
    const tempSku = `temp-${new Date().getUTCMilliseconds() % 10000}`;
    const v: ProductVariant = {
      product: product,
      retailPrice: 0,
      previousPrice: 0,
      buyPrice: 0,
      movingAverageCost: 0,
      weight: 0,
      manageStockLevels: true,
      stockOnHand: 0,
      weightUnit: WeightUnit.KG,
      sku: tempSku,
    };

    v.guid = undefined;

    // make the id -ve for new variants so we know to rip it out on save
    v.id = -(new Date().getUTCMilliseconds() % 1000);

    // base the SKU on the first variant, if there is one, and copy some other fields for convenience
    if (!_.isEmpty(product.variants)) {
      const firstSku = product.variants[0].sku.split("-")[0];
      v.sku = `${firstSku}-${tempSku.substring("temp-".length)}`;
      v.retailPrice = product.variants[product.variants.length - 1].retailPrice;
      v.buyPrice = product.variants[product.variants.length - 1].buyPrice;
      v.movingAverageCost = v.buyPrice;
      v.previousPrice = product.variants[product.variants.length - 1].previousPrice;
      v.weight = product.variants[product.variants.length - 1].weight;
      v.weightUnit = product.variants[product.variants.length - 1].weightUnit;
    }

    v.imageUrls = [];
    v.filterValues = product.filterFields
      ? product.filterFields
          .split(/\s*,\s*/)
          .map((f, i) => `${f}${product.variants.length + 1}`)
          .join(",")
      : "";

    product.variants.push(v);

    setProduct({ ...product, variants: product.variants, filterFields: product.filterFields });
  };

  if (createNew && _.isEmpty(product.variants)) {
    _addVariant();
  }

  const navigate = useNavigate();
  const _save = () => {
    if (_checkProduct(product)) {
      // Empty imageURL arrays throw the server, so remove these if we have any
      product.variants.forEach((v) => {
        if (_.isEmpty(v.imageUrls)) {
          v.imageUrls = undefined;
        }
      });

      product.tags = product.tags
        .filter((t) => !_.isEmpty(t))
        .filter((value, index, self) => {
          return self.indexOf(value) === index;
        });

      const fn = createNew ? createProduct : updateProduct;

      fn({
        product: product,
        success: (r) => {
          uxMessage.setMessage({
            message: `Product ${r.data.name} ${
              createNew ? "created" : "updated"
            } successfully`,
            severity: "success",
          });

          navigate(ViewProductRoute, {
            state: { selectedProduct: r.data },
          });
        },
        failure: (e) => {
          uxMessage.setMessage({
            message: e,
            severity: "error",
          });
        },
      });
    }
  };

  const _setProductWithChecks = (p: Product) => {
    _checkProduct(p);
    setProduct(p);
  };

  const _checkProduct = (p: Product): boolean => {
    clearErrors("variants");

    // Ensure we have at least 1 variant
    if (!p.variants || _.isEmpty(p.variants)) {
      setError("variants", { message: "Please create at least one variant" });
      return false;
    }

    // Check for duplicate SKUs
    const uniqueSkus =
      p.variants
        .filter((v) => !v.pendingDelete)
        .map((v) => v.sku)
        .filter((v, i, s) => s.indexOf(v) === i).length ===
      p.variants.filter((v) => !v.pendingDelete).length;

    // Check for duplicate supplier codes (where they're not empty)
    const variantsWithSupplierCodes = p.variants.filter(
      (v) => v.supplierCode && v.supplierCode.trim() !== ""
    );

    const uniqueSupplierCodes =
      variantsWithSupplierCodes
        .filter((v) => !v.pendingDelete)
        .map((v) => v.supplierCode)
        .filter((v, i, s) => s.indexOf(v) === i).length ===
      variantsWithSupplierCodes.filter((v) => !v.pendingDelete).length;

    if (!uniqueSupplierCodes) {
      setError("variants", {
        message: "Where supplier codes are provided they must be unique",
      });
      return false;
    }

    // Check we have filter fields if we have multiple variants.
    if (
      product.variants.filter((v) => !v.pendingDelete).length > 1 &&
      (!product.filterFields || product.filterFields.trim() === "")
    ) {
      setError("variants", {
        message:
          "You must set up variant options if there are multiple variants",
      });
      return false;
    }

    // Check for duplicate filter fields (excluding deleted items)
    const allFilterValues: string[] = p.variants
      .filter((v) => !v.pendingDelete)
      .map((v) => v.filterValues);

    if (!uniqueSkus) {
      setError("variants", { message: "Please ensure SKUs are unique" });
      return false;
    }

    const uniqueFilters = allFilterValues.filter(
      (v, i, s) => s.indexOf(v) === i
    ).length;

    if (!uniqueFilters) {
      setError("variants", {
        message: "Please ensure that filter values are unique",
      });

      return false;
    }

    return true;
  };

  return (
    <>
      <Box sx={{ m: 1 }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2" align="left">
              <Link to={ProductsRoute}>Products</Link>
              &nbsp;&gt;&nbsp;{productName}
            </Typography>
            <Divider sx={{ margin: 1 }} />
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit((d) => _save())}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              {/* {product.variants[0]?.imageUrls[0]?.uri && (
                <ImageView
                  uri={product.variants[0].imageUrls[0].uri}
                  alt={product.name}
                />
              )} */}
            </Grid>
            <Grid item xs={10}>
              <Grid container spacing={2}>
                <Grid item xs={12} />
                <Grid item xs={2}>
                  <FormControl fullWidth error={'productType' in errors}>
                    <InputLabel>Product Type *</InputLabel>
                    <Select
                      {...register("productType", { required: createNew })}
                      label="Product Type"
                      value={product.productType}
                      defaultValue="none"
                      sx={{ textAlign: "left" }}
                      onChange={_productTypeChanged}
                      disabled={!createNew}
                    >
                      <MenuItem value="none" disabled>Please select...</MenuItem>
                      <MenuItem key={ProductType.BOOK} value="Book">
                        Book
                      </MenuItem>
                      <MenuItem key={ProductType.ACCESSORY} value="Accessory">
                        Accessory
                      </MenuItem>
                      <MenuItem key={ProductType.GIFT} value="Gift">
                        Gift
                      </MenuItem>
                      <MenuItem key={ProductType.INSTRUMENT} value="Instrument">
                        Instrument
                      </MenuItem>
                      <MenuItem key={ProductType.OTHER} value="Other">
                        Other
                      </MenuItem>
                    </Select>
                    {errors.productType && (
                      <FormHelperText>
                        You must select a product type from the list.
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    id="taxable"
                    fullWidth
                    value={!product.taxable ? "No" : "Yes"}
                    label={"Taxable?"}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SupplierPicker
                    register={register}
                    errors={errors}
                    value={product?.supplierGuid ? product.supplierGuid : ""}
                    supplierChanged={_supplierChanged}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="brand"
                    fullWidth
                    value={product.brand}
                    label="Product brand *"
                    {...register("brand", { required: true })}
                    onChange={_valueChanged}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="name"
                    fullWidth
                    value={product.name}
                    label="Product name *"
                    {...register("name", { required: true })}
                    onChange={_valueChanged}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="description"
                    value={product.description.replaceAll("<br>", "\n")}
                    fullWidth
                    multiline
                    rows={5}
                    label="Product description *"
                    {...register("description", { required: true })}
                    onChange={_valueChanged}
                  />
                </Grid>
                <Grid item xs={4}>
                  <LocationPicker
                    register={register}
                    errors={errors}
                    value={product?.location ? product.location : "Unknown"}
                    locationChanged={_locationChanged}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="tags"
                    fullWidth
                    value={product.tags}
                    label="Tags"
                    onChange={_tagsChanged}
                  />
                  <FormHelperText>
                    Please separate tags with commas
                  </FormHelperText>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="filterFields"
                    fullWidth
                    value={product.filterFields ? product.filterFields : ""}
                    label={
                      product.variants.filter((v) => !v.pendingDelete).length >
                      1
                        ? "Variant Options *"
                        : "Variant Options"
                    }
                    {...register("filterFields", {
                      required:
                        product.variants.filter((v) => !v.pendingDelete)
                          .length > 1,
                    })}
                    onChange={_filterFieldsChanged}
                  />
                  <FormHelperText>
                    Please separate variant options with commas
                  </FormHelperText>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={3}>
              <Button
                color="secondary"
                size="small"
                variant="contained"
                onClick={() => {
                  if (createNew) {
                    navigate(ProductsRoute);
                  } else {
                    navigate(ViewProductRoute, {
                      state: { selectedProduct: product },
                    });
                  }
                }}
                sx={{ float: "left" }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={5}>
              {product && product.publishedToShopify && (
                <Typography variant="h6">
                  Note: product is published to Shopify
                </Typography>
              )}
              {createNew && (
                <Typography variant="h6">
                  Note: SKUs are created on first save, and may then be edited.
                </Typography>
              )}
              {errors.variants && (
                <Typography variant="h6" sx={{ color: palette.error.main }}>
                  Error: {errors.variants.message}
                </Typography>
              )}
            </Grid>
            <Grid item xs={4} sx={{ textAlign: "right" }}>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                sx={{ marginRight: 2 }}
                onClick={() => _addVariant()}
              >
                Add Variant
              </Button>
              <ButtonWithConfirm
                color="primary"
                message={
                  product.publishedToShopify
                    ? "This product is published to Shopify so this will update the product and all variants in AMS and Shopify!"
                    : "This will update all product and variant details!"
                }
                size="small"
                variant="contained"
                onOk={handleSubmit((d) => _save())}
              >
                {createNew ? "Create" : "Save"}
              </ButtonWithConfirm>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2">Variants</Typography>
            </Grid>
            <Grid item xs={12}>
              <ProductVariantTable
                parentProduct={product}
                setParentProduct={(p: Product) =>
                  _setProductWithChecks({ ...p })
                }
                editMode={true}
                hideSkus={createNew}
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default EditProductView;
