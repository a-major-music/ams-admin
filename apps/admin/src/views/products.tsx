import { Product } from "@amm/types";

import { Button, Grid, Typography } from "@mui/material";
import { GridSelectionModel } from "@mui/x-data-grid";

import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import Search from "../components/search.component";
import ProductTable from "../components/product-table.component";
import { getProducts, searchProducts, updateProduct } from "../services/product.service";
import { useNavigate } from "react-router-dom";
import { EditProductRoute, ViewProductRoute } from "src/routes";
import { useStickyState } from "src/util";
import GlobalMessageContext from "src/context/globalMessage.context";
import TagEditor from "src/components/product-tag-editor";
import _ from "lodash";

const ProductsView = () => {
  const [productData, setProductData] = useStickyState<Product[]>(
    [],
    "product.productData"
  );
  const [currentSkip, setCurrentSkip] = useStickyState<number>(
    0,
    "product.currentSkip"
  );
  const [currentTake, setCurrentTake] = useStickyState<number>(
    25,
    "product.currentTake"
  );
  const [totalRows, setTotalRows] = useStickyState<number>(
    0,
    "product.totalRows"
  );
  const [searchTerm, setSearchTerm] = useStickyState<string>(
    "",
    "product.searchTerm"
  );

  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>();
  const uxMessage = useContext(GlobalMessageContext);

  useEffect(() => {
    // If search term is set then don't do a full get for products
    if (searchTerm === undefined || searchTerm === "") {
      setLoading(true);
      getProducts(
        { skip: currentSkip, take: currentTake },
        (data) => {
          setLoading(false);
          setProductData(data);
        },
        setTotalRows,
        (error) => {
          setLoading(false);
          setProductData([]);
          uxMessage.setMessage({
            message: "Sorry - we seem to be having some troubles right now... please try again later!",
            severity: "error",
          });
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSkip, currentTake]);

  const setSkip = (page, details) => {
    setCurrentSkip(page * currentTake);    
  };

  const setTake = (pageSize, details) => {
    const oldTake = currentTake;
    setCurrentTake(pageSize);
    setCurrentSkip(Math.trunc(currentSkip * (oldTake / currentTake)));
  };

  const doSearch = (st: string) => {
    setSearchTerm(st);
    searchProducts({ search: st }, setProductData, setTotalRows);
  };

  const _onSelectProduct = (p: Product) => {
    navigate(ViewProductRoute, { state: { selectedProduct: p } });
  };

  const _onDelete = (tags: string[]) => {
    _updateProductTags(tags, true)
  }

  const _onAddTags = (newTags: string[]) => {
    _updateProductTags(newTags, false);
  }

  const _updateProductTags = (tags: string[], toDelete: boolean) => {
    productData && selectionModel
        // Pull the selected products out of the productData
        .map((id:number) => productData.find(p => p.id === id))
        // Filter the tag out of tags on those products 
        .map((p:Product) => { 
          // Take a copy of the product so we're not mutating the one used by the grid
          const updatedProduct = {...p}; 

          if (toDelete) {
            updatedProduct.tags = p.tags ? p.tags.filter((t:string) => !tags.includes(t)) : []; 
          }
          else {
            updatedProduct.tags = [...new Set([...updatedProduct.tags, ...tags])]
          }

          return updatedProduct;
        }) 
         // Update the product
        .map((p:Product) => {
          return updateProduct({
            product: p, 
            success: () => { 
              if (!_.isEmpty(searchTerm)) {
                searchProducts({ take: currentTake, search: searchTerm }, setProductData, setTotalRows);
              }
              else {
                getProducts({ skip: currentSkip, take: currentTake },setProductData, setTotalRows);
              }

              uxMessage.setMessage({
                message: `Successfully updated ${p.variants[0].sku.substring(0, 8)}!`, 
                severity: "info"
              });
            }, 
            failure: () => { uxMessage.setMessage({ message: `Sorry - a problem occurred!`, severity: "error"})}
          })
        });
  }

  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([])

  return (
    <>
      <Typography variant="h1">Products</Typography>
      <Box sx={{ m: 1, textAlign: "right" }}>
        <Button
          variant="contained"
          size="small"
          color="inherit"
          onClick={() =>
            navigate(EditProductRoute, {
              state: { selectedProduct: undefined, createNew: true },
            })
          }
        >
          Create Product
        </Button>
      </Box>
      <Box sx={{ m: 1 }}>
        <div style={{ textAlign: "center" }}>
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            doSearch={(st: string) => doSearch(st)}
            clearOnEnter={false}
            onReset={() => {
              setSearchTerm("");
              setLoading(true);
              getProducts(
                { skip: currentSkip, take: currentTake },
                (data) => {
                  setLoading(false);
                  setProductData(data);
                },
                setTotalRows
              );
            }}
          />
        </div>
      </Box>
      <Box sx={{ m: 3 }}></Box>
      <Box sx={{ m: 1 }}>
        <ProductTable
          loading={loading}
          productData={productData}
          pageSize={currentTake}
          totalRows={totalRows}
          onSelectProduct={_onSelectProduct}
          onPageChange={setSkip}
          onPageSizeChange={setTake}
          showChecks={true}
          onSelectionModelChange={(model) => setSelectionModel(model)}
          selectionModel={selectionModel}
        />
      </Box>
      {!_.isEmpty(selectionModel) && (
        <Box sx={{ m: 5 }}>
          <Grid container>
            <Grid item xs={3} />
            <Grid item xs={6}>
              <TagEditor 
                products={selectionModel.map(id => productData.find((p:Product) => p.id === id))} 
                onDelete={_onDelete}
                onAdd={_onAddTags}
              />          
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default ProductsView;
