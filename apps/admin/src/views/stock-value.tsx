import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useEffect, useState } from "react";
import { getStockValue } from "src/services/stock-value.service";
import { currencyFormatter } from "src/util";

const StockValueView = () => {
    const [date, setDate] = useState<Date>(new Date());
    const [stockValue, setStockValue] = useState<number>(0);

    useEffect(() => {
        getStockValue(date, (value) => setStockValue(value), (e) => console.error(e));
    }, [date]);

    function _dateChanged(e: Date) {
        setDate(e);
    }

    return <>
        <Typography variant="h1">Stock Value</Typography>
        <Box sx={{ m: 1, textAlign: "left" }}>
            <Grid container>
                <Grid item xs={2}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Issue Date"
                            value={date}
                            onChange={(value) => _dateChanged(value)}
                            format="dd-MM-yyyy"
                            maxDate={new Date()}                            
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">The value of stock at the end of <strong>{date.toDateString()}</strong> was:</Typography>
                    <Typography variant="h6" color={"red"}>{currencyFormatter.format(stockValue / 100)}</Typography>
                </Grid>
            </Grid>
        </Box>
    </>
}

export default StockValueView;