import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import CustomSalesTable from "src/components/customsales-table.component";
import CustomSalesIgnoreListTable from "src/components/customsalesignorelist-table.component";
import GlobalMessageContext from "src/context/globalMessage.context";
import {
  getCustomSales,
  getIgnoreList,
  deleteCustomSale,
  addIgnoreListItem,
  deleteCustomSaleByTitle,
  deleteIgnoreListItem,
} from "src/services/custom-sales.service";

export default function CustomSalesView() {
  const [customSales, setCustomSales] = useState([]);
  const [ignoreList, setIgnoreList] = useState([]);
  const uxMessage = useContext(GlobalMessageContext);

  const _refreshTables = () => {
    getCustomSales(
      (data: any[]) => {
        setCustomSales(data);
      },
      () => {
        setCustomSales([]);
        uxMessage.setMessage({
          message:
            "Sorry - we seem to be having some troubles right now... please try again later!",
          severity: "error",
        });
      }
    );

    getIgnoreList(
      (data: any[]) => {
        setIgnoreList(data);
      },
      () => {
        setIgnoreList([]);
        uxMessage.setMessage({
          message:
            "Sorry - we seem to be having some troubles right now... please try again later!",
          severity: "error",
        });
      }
    );
  };

  // Load the data tables on first load
  useEffect(() => {
    _refreshTables();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _deleteCustomSale = (id: number) => {
    deleteCustomSale(
      id,
      () => {
        uxMessage.setMessage({
            message:
              "Removed record of this custom sale",
            severity: "success",
          });
  
        _refreshTables();
      },
      () => {
        uxMessage.setMessage({
            message:
              "Sorry - we seem to be having some troubles right now... please try again later!",
            severity: "error",
          });
  
      }
    );
  };

  const _addNewIgnoreListItem = (title: string) => {
    addIgnoreListItem(
      title,
      () => {
        deleteCustomSaleByTitle(
          title,
          () => {
            uxMessage.setMessage({
                message:
                  "Moved this custom sale to the ignore list",
                severity: "success",
              });
    
            _refreshTables();
          },
          () => {
            uxMessage.setMessage({
                message:
                  "Sorry - we seem to be having some troubles right now... please try again later!",
                severity: "error",
              });
      
          }
        );
      },
      () => {
        uxMessage.setMessage({
            message:
              "Sorry - we seem to be having some troubles right now... please try again later!",
            severity: "error",
          });
  
      }
    );
  };

  const _deleteIgnoreListItem = (id: number) => {
    deleteIgnoreListItem(
      id,
      () => {
        uxMessage.setMessage({
            message:
              "Deleted entry from the ignore list",
            severity: "success",
          });

          _refreshTables();
      },
      () => {
        uxMessage.setMessage({
            message:
              "Sorry - we seem to be having some troubles right now... please try again later!",
            severity: "error",
          });  
      }
    );
  };

  return (
    <>
      <Typography variant="h1">Custom Sales Review</Typography>
      <Box sx={{ m: 1 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h4">Custom Items List</Typography>
            <CustomSalesTable
              data={customSales}
              onDone={_deleteCustomSale}
              onIgnore={_addNewIgnoreListItem}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h4">Ignore List</Typography>
            <CustomSalesIgnoreListTable
              data={ignoreList}
              onDelete={_deleteIgnoreListItem}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
