import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CreateStocktakeLineModal } from "src/components/modal.create-stocktakeline";
import Search from "src/components/search.component";
import StocktakeTable from "src/components/stocktake-table.component";
import GlobalMessageContext from "src/context/globalMessage.context";
import { LocationsRoute } from "src/routes";
import {
  getProductsForLocation,
  updateLocation,
} from "src/services/product.service";
import {
  applyStockTake,
  deleteStockTake,
  getStocktake,
  getVariantForBarcode,
  saveStocktake,
} from "src/services/stocktake.service";

import { Product, ProductVariant } from "@amm/types";

import useSound from "use-sound";
import StocktakeVariantTable from "src/components/stocktake-variant-table";
import ButtonWithConfirm from "src/components/modal.confirm-dialog.component";

const ACK_MP3_URL = "/ack.mp3";
const ALERT_MP3_URL = "/alert.mp3";

const StocktakeView = () => {
  const uxMessage = useContext(GlobalMessageContext);
  const theme = useTheme();
  const navigate = useNavigate();
  const [playAck] = useSound(ACK_MP3_URL);
  const [playAlert] = useSound(ALERT_MP3_URL);

  const { state } = useLocation();
  const location = state["selectedLocation"];
  const [stocktakeApplied, setStocktakeApplied] = useState<boolean>(false);
  const [stocktakeLines, setStocktakeLines] = useState<any[]>([]);
  const [unscannedVariants, setUnscannedVariants] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [showOnlyErrors, setShowOnlyErrors] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getProductsForLocation(location, (data) => {
      const variants = data
        .map((p: Product) => {
          return p.variants.map((v: ProductVariant) => {
            v.product = p;
            return v;
          });
        })
        .reduce((a, b) => [...a, ...b], []);

      setUnscannedVariants(variants);

      getStocktake(
        location,
        (data) => {
          setStocktakeApplied(data.applied || false);
          setStocktakeLines(data.lines || []);
          setLoading(false);
        },
        (err) => {
          setLoading(false);
          setStocktakeLines([]);
          uxMessage.setMessage({
            message:
              "Sorry - we seem to be having some troubles right now... please try again later!",
            severity: "error",
          });
        }
      );
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const _searchForBarcode = (st: string) => {
    setSearchTerm(st);

    // setting state is not instant, so use the parameter rather than the state
    if (st && st !== "") {
      getVariantForBarcode(st, (data) => {
        if (data === "") {
          playAlert();
          setShowSearchModal(true);
        } else {
          _addVariant(data);
        }
      });
    }
  };

  const _addVariant = (v: any) => {
    // Try to find this item in case we added one already
    const existingLine = stocktakeLines.find(
      (line) => line.variant.sku === v.sku
    );

    if (existingLine) {
      // Increment the count and move this item to the front of the array
      existingLine.count += 1;
      stocktakeLines.sort((x, y) => (x === existingLine ? -1 : 0));
    } else {
      // This is new so put the new record at the front of the array
      stocktakeLines.unshift({ count: 1, variant: v });
    }

    setStocktakeLines([...stocktakeLines]);
    setSearchTerm("");

    playAck();
  };

  const _updateLocation = (
    guid: string,
    location: string,
    callback?: () => void
  ) => {
    updateLocation(
      guid,
      location,
      () => {
        uxMessage.setMessage({
          message: `Location successfully updated to ${location}`,
          severity: "success",
        });

        if (callback) callback();
      },
      (err) => {
        console.error(err);
        uxMessage.setMessage({
          message:
            "Sorry - we seem to be having some troubles right now... please try again later!",
          severity: "error",
        });
      }
    );
  };

  const _save = (success?: () => void) => {
    saveStocktake(
      location,
      JSON.parse(
        JSON.stringify(stocktakeLines, (k, v) =>
          ["Product", "product"].includes(k) ? undefined : v
        )
      ),
      () => {
        uxMessage.setMessage({
          message: `Stock take saved successfully`,
          severity: "success",
        });
        if (success) success();
      },
      (err) => {
        console.error(err);
        uxMessage.setMessage({
          message:
            "Sorry - we seem to be having some troubles right now... please try again later!",
          severity: "error",
        });
      }
    );
  };

  const _apply = () => {
    _save(() => {
      applyStockTake(
        location,
        stocktakeLines.map((line) => {
          return {
            variantSku: line.variant.sku,
            variantGuid: line.variant.guid,
            stockOnHand: line.count,
          };
        }),
        () => {
          navigate(LocationsRoute, {});
          uxMessage.setMessage({
            message: `Stock levels for location ${location} now being updated...`,
            severity: "success",
          });
        },
        (err) => {
          console.error(err);
          uxMessage.setMessage({
            message:
              "Sorry - we seem to be having some troubles right now... please try again later!",
            severity: "error",
          });
        }
      );
    });
  };

  const _clear = () => {
    deleteStockTake(location, () => {
      setStocktakeLines([]);
      setStocktakeApplied(false);

      uxMessage.setMessage({
        message: `Stocktake for location ${location} cleared successfully`,
        severity: "success",
      });
    });
  };

  const _setStocktakeLines = (stl: any) => {
    playAck();
    setStocktakeLines(stl);
  };

  return (
    <>
      <Box sx={{ m: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" align="left">
              <Link to={LocationsRoute}>Locations</Link>
              &nbsp;&gt;&nbsp;{location}&nbsp;&gt;&nbsp; Stocktake
            </Typography>
            {stocktakeApplied && (
              <Typography variant="h5" color={theme.palette.error.main}>
                Stock take has been applied and is now read only!
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Search
              selfFocus
              disabled={stocktakeApplied}
              noAutoSubmit
              doSearch={_searchForBarcode}
              onReset={() => setSearchTerm("")}
              searchTerm={searchTerm}
              setSearchTerm={(t) => setSearchTerm(t)}
              placeholderText="Please scan or enter barcode"
              clearOnEnter={true}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ float: "left" }}
              onClick={() => navigate(LocationsRoute)}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="secondary"
              //   sx={{ float: "left" }}
              disabled={stocktakeApplied}
              onClick={() => {
                setSearchTerm("");
                setShowSearchModal(true);
              }}
            >
              Manual Search
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ float: "right" }}>
              <Button
                variant="contained"
                color="info"
                disabled={stocktakeApplied}
                onClick={() => _save()}
              >
                Save
              </Button>
              <ButtonWithConfirm
                variant="contained"
                color="secondary"
                message={
                  stocktakeApplied
                    ? "This will clear this stock take from AMS."
                    : "This will clear all lines from this stock take, and delete it from AMS so you will have to start again."
                }
                onOk={() => _clear()}
                sx={{ marginLeft: "20px" }}
              >
                Clear
              </ButtonWithConfirm>
              <ButtonWithConfirm
                variant="contained"
                color="primary"
                disabled={stocktakeApplied}
                message="This will update all stock levels in AMS and Shopify and cannot be undone! Changes may take a few minutes to be fuly reflected in both systems."
                onOk={() => _apply()}
                sx={{ marginLeft: "20px" }}
              >
                Save & Apply
              </ButtonWithConfirm>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ textAlign: "left" }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={showOnlyErrors}
                      onChange={() => setShowOnlyErrors(!showOnlyErrors)}
                    />
                  }
                  label="Show only lines with errors"
                />
              </FormGroup>
            </Box>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs={7}>
            <Typography variant="h4">Scanned Stock</Typography>
            <StocktakeTable
              showOnlyErrors={showOnlyErrors}
              loading={loading}
              location={location}
              updateLocation={_updateLocation}
              stocktakeLines={stocktakeLines}
              setStocktakeLines={_setStocktakeLines}
              editable={!stocktakeApplied}
            />
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h4">Unscanned Stock</Typography>
            <StocktakeVariantTable
              variants={unscannedVariants.filter(
                (v) =>
                  !stocktakeLines.map((stl) => stl.variant.sku).includes(v.sku)
              )}
              loading={loading}
              onRowClick={(v) => {
                _addVariant(v);
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <CreateStocktakeLineModal
        open={showSearchModal}
        title={searchTerm !== "" ? "Unknown Barcode" : "Manual Search"}
        text={
          searchTerm !== ""
            ? "That barcode could not be found - please use this search to manually locate it!"
            : ""
        }
        onClose={() => {
          setShowSearchModal(false);
        }}
        onSelectVariant={(v) => {
          setShowSearchModal(false);
          _addVariant(v);
        }}
      />
    </>
  );
};

export default StocktakeView;
