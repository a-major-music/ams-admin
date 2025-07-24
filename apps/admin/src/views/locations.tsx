import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LocationsTable from "src/components/locations-table.component";
import GlobalMessageContext from "src/context/globalMessage.context";
import { LocationsRoute, StocktakeRoute } from "src/routes";
import { getAllStocktakes } from "src/services/stocktake.service";
import { getLocations, renameLocation } from "../services/product.service";
import { deleteStockTake } from "src/services/stocktake.service";
import { Stocktake } from "@amm/types";
import EnterValue from "src/components/modal.enter-value.component";

const LocationsView = () => {
  const uxMessage = useContext(GlobalMessageContext);
  const [locations, setLocations] = useState<
    { location: String; hasStocktake: boolean; stocktakeApplied: boolean }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editLocationDialogOpen, setEditLocationDialogOpen] =
    useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] = useState<string>();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Only do this when first loaded, or when the selectedLocation is reset (because a location name will have been updated)
    if (!selectedLocation)
      getLocations(
        (locs) => {
          getAllStocktakes(
            (stocktakes: Stocktake[]) => {
              setLocations(
                locs.map((loc) => {
                  const st = stocktakes.find((st) => st.location === loc);

                  return {
                    location: loc,
                    hasStocktake: st === undefined ? false : true,
                    stocktakeApplied: st?.applied,
                  };
                })
              );
              setLoading(false);
            },
            (err) => {
              setLoading(false);
              setLocations([]);
              uxMessage.setMessage({
                message:
                  "Sorry - we seem to be having some troubles right now... please try again later!",
                severity: "error",
              });
            }
          );
        },
        (err) => {
          setLoading(false);
          setLocations([]);
          uxMessage.setMessage({
            message:
              "Sorry - we seem to be having some troubles right now... please try again later!",
            severity: "error",
          });
        }
      );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLocation]);

  const _onClickStocktake = (location: string) => {
    return navigate(StocktakeRoute, { state: { selectedLocation: location } });
  };

  const _onClickRename = (location: string) => {
    // Opens the dialog to get the new name for a location
    setSelectedLocation(location);
    setEditLocationDialogOpen(true);
  };

  const _onDeleteStocktake = (location: string) => {
    setSelectedLocation(location)

    deleteStockTake(location,
      () => {      
        setSelectedLocation(null)
        
        uxMessage.setMessage({ 
          message: `Stocktake for ${location} cleared`, 
          severity: "success"});
      });
  }

  const _doRename = (value: string) => {
    // Sets the new name, and closes the dialog down
    setEditLocationDialogOpen(false);
    renameLocation(
      selectedLocation,
      value,
      (data) => {
        uxMessage.setMessage({
          message: `${
            data?.count ? data.count : "All "
          } products moved from '${selectedLocation}' to '${value}'`,
          severity: "success",
        });
        setSelectedLocation(undefined);
        navigate(LocationsRoute);
      },
      (err) => {
        uxMessage.setMessage({
          message:
            "Sorry - we seem to be having some troubles right now... please try again later!",
          severity: "error",
        });
        setSelectedLocation(undefined);
      }
    );
  };

  return (
    <>
      <Typography variant="h1">Locations</Typography>
      <Box sx={{ m: 1 }}>
        <Grid container>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <LocationsTable
              loading={loading}
              locations={locations}
              onClickStocktake={_onClickStocktake}
              onClickRename={_onClickRename}
              onDeleteStocktake={_onDeleteStocktake}
            />
          </Grid>
        </Grid>
      </Box>
      <EnterValue
        open={editLocationDialogOpen}
        onCancel={() => setEditLocationDialogOpen(false)}
        titleText={`Rename Location ${selectedLocation}`}
        placeholder="New location"
        updateButtonLabel="Update Location"
        message="Please enter the new location name. Note that if this location already exists then any products being moved will be merged into this new location!"
        confirmMessage={`Please confirm you wish to move all products from location ${selectedLocation} to [value]. If this location already exists products will be merged. This operation cannot be undone!`}
        onSubmitValue={(value: string) => _doRename(value)}
      />
    </>
  );
};

export default LocationsView;
