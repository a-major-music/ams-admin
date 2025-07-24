import { Product } from "@amm/types";

import {
  Backdrop,
  Button,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  Table,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/system";
import { ReactNode, useContext, useEffect, useState } from "react";
import ProductVariantTable from "src/components/productvariant-table.component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { EditProductRoute, ProductsRoute } from "src/routes";
import _ from "lodash";
import {
  deleteProduct,
  getProduct,
  updateProduct,
} from "src/services/product.service";
import ButtonWithConfirm from "src/components/modal.confirm-dialog.component";
import GlobalMessageContext from "src/context/globalMessage.context";
import { getSuppliers } from "src/services/supplier.service";
import { SHOPIFY_URL } from "src/config";
import TagChips from "src/components/tag-chips";

const ViewProductView = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state["selectedProduct"];
  const { palette } = useTheme();
  const uxMessage = useContext(GlobalMessageContext);
  const [showPublishingSpinner, setShowPublishingSpinner] = useState(false);

  // Load the suppliers into state
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    getSuppliers(
      {},
      (data) => setSuppliers(data),
      () => {}
    );
  }, []);

  // Load the selectedProduct into a state variable
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  useEffect(() => {
    getProduct(product.guid).then((p) => {setSelectedProduct(p)});
  }, [product]);

  // Product to be viewed should be passed as selectedProduct, so redirect to the full list if it's not.
  if (_.isEmpty(product)) {
    navigate(ProductsRoute);
  }

  const _updatePublishedFlag = (val: boolean) => {
    setShowPublishingSpinner(true);
    selectedProduct.publishedToShopify = val;

    setSelectedProduct(selectedProduct);

    const message = `Product "${selectedProduct.name}" has been ${
      val ? "published to" : "removed from"
    } Shopify`;

    updateProduct({
      product: selectedProduct,
      success: (publishedProduct) => {
        console.log(publishedProduct.data);
        uxMessage.setMessage({ message: message, severity: "success" });
        setShowPublishingSpinner(false);
        setSelectedProduct(publishedProduct.data);
      },
      failure: () => {
        setShowPublishingSpinner(false);
        uxMessage.setMessage({
          message: "Something went wrong - please check the logs!",
          severity: "error",
        });
      },
    });
  };

  const [shopifyPageLink, setShopifyPageLink] = useState("");

  useEffect(() => {
    if (selectedProduct?.shopifyId) {
      setShopifyPageLink(
        `${SHOPIFY_URL}/admin/products/${selectedProduct.shopifyId.substring(
          selectedProduct.shopifyId.lastIndexOf("/") + 1
        )}`
      );
    } else {
      setShopifyPageLink("");
    }
  }, [selectedProduct]);

  const summaryTableRow = (props: {
    heading: string,
    value?: string,
    element?: ReactNode,
    asChip?: boolean,
    chipColor?:
      | "default"
      | "success"
      | "error"
      | "primary"
      | "secondary"
      | "info"
      | "warning",
}) => (
    <TableRow sx={{ verticalAlign: "top", height: "20px" }}>
      <TableCell variant="head" width={150}>
        <Typography variant="body2" color={palette.primary.light}>
          {props.heading}
        </Typography>
      </TableCell>
      <TableCell variant="body">
        {props.value && !props.asChip && (
          <Typography variant="body2">{props.value}</Typography>
        )}
        {props.value && !props.element && props.asChip && (
          <Chip
            variant="outlined"
            label={props.value}
            color={props.chipColor || "success"}
            size="small"
          />
        )}
        {props.element}
      </TableCell>
    </TableRow>
  );
  return (
    <>
      <Backdrop open={!selectedProduct}>
        <Typography variant="h3">Loading...</Typography>
        <CircularProgress />
      </Backdrop>
      {selectedProduct && (
        <>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h2" align="left">
                <Link to={ProductsRoute}>Products</Link>
                &nbsp;&gt;&nbsp;{selectedProduct.name}
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ p: 2, textAlign: "right" }}>
              {selectedProduct.publishedToShopify && (
                <ButtonWithConfirm
                  variant="contained"
                  size="small"
                  color="primary"
                  message="This will remove the product from Shopify!"
                  sx={{ marginRight: 2 }}
                  onOk={() => _updatePublishedFlag(false)}
                >
                  Unpublish
                </ButtonWithConfirm>
              )}
              {!selectedProduct.publishedToShopify && (
                <ButtonWithConfirm
                  variant="contained"
                  size="small"
                  color="secondary"
                  message="This will publish the product to Shopify!"
                  sx={{ marginRight: 2 }}
                  onOk={() => _updatePublishedFlag(true)}
                >
                  Publish
                </ButtonWithConfirm>
              )}
              <Button
                variant="contained"
                color="inherit"
                size="small"
                onClick={() =>
                  navigate(EditProductRoute, {
                    state: {
                      selectedProduct: selectedProduct,
                      createNew: false,
                    },
                  })
                }
                sx={{ marginRight: 2 }}
              >
                Edit Product
              </Button>
              <ButtonWithConfirm
                variant="contained"
                color="primary"
                size="small"
                message="This will permanently delete this product and it's variants. This cannot be undone!"
                onOk={() =>
                  deleteProduct({
                    product: selectedProduct,
                    success: () => {
                      uxMessage.setMessage({
                        severity: "success",
                        message: "Product deleted successfully",
                      });
                      navigate(ProductsRoute);
                    },
                    failure: (e) => {
                      console.error(e);
                      uxMessage.setMessage({
                        severity: "error",
                        message: "Sorry - something went wrong!",
                      });
                    },
                  })
                }
              >
                Delete Product
              </ButtonWithConfirm>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ margin: 1 }} />

              <Table size="small">
                {summaryTableRow({heading: "Name", value: selectedProduct.name})}
                {summaryTableRow({heading: "Description", value: selectedProduct.description})}
                {summaryTableRow({heading: "Location", value: selectedProduct.location})}
                {summaryTableRow({heading: "Supplier", value: 
                  suppliers.filter(
                    (s) => s.guid === selectedProduct.supplierGuid
                  )[0]?.name
                  })}
                {summaryTableRow({heading: "Brand", value: selectedProduct.brand})}
                {summaryTableRow({
                  heading: "Tags", 
                  element: (<TagChips tags={selectedProduct.tags}/>)
                })}
                {summaryTableRow({
                  heading: "Variant Filters",
                  value: _.isEmpty(selectedProduct.filterFields)
                    ? "None"
                    : selectedProduct.filterFields
                })}
                {summaryTableRow({
                  heading: "Publish Status",
                  value: selectedProduct.publishedToShopify && !selectedProduct.shopifyId ?
                    "Error" : selectedProduct.publishedToShopify
                      ? "Published"
                      : "Unpublished",
                  asChip: true,
                  chipColor: selectedProduct.publishedToShopify && !selectedProduct.shopifyId ? "error" : selectedProduct.publishedToShopify ? "success" : "warning",
                  element: showPublishingSpinner && (<CircularProgress size={"1em"} />)
                })}
                {selectedProduct.shopifyId &&
                  summaryTableRow({heading: "Shopify Page", element: <a href={shopifyPageLink} target="_new">{shopifyPageLink}</a>})}
                {!selectedProduct.shopifyId && selectedProduct.publishedToShopify && !showPublishingSpinner &&
                  summaryTableRow({heading: "Shopify Page", value: "Error - this item is not successfully published - please try unpublishing and publishing again."})}
              </Table>
            </Grid>
            <Divider sx={{ margin: 1 }} />
            <Grid item xs={12}>
              <ProductVariantTable parentProduct={selectedProduct} />
            </Grid>
            <Grid item xs={12}>
              <Button
                color="secondary"
                size="small"
                variant="contained"
                onClick={() => navigate(ProductsRoute)}
                sx={{ float: "left", marginTop: 2 }}
              >
                Back
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default ViewProductView;
