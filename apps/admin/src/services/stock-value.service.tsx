import axios, { AxiosResponse } from "axios";
import { INV_API } from "src/config";
import { shortDateFormatter } from "src/util";

export const getStockValue = (date: Date, dataCallback: (stockValue: number) => void, errorCallback: (e: Error) => void) => {
    if (!date) {
        // If no date is provided return the current value
        return getStockValue(new Date(), dataCallback, errorCallback);
    }

    axios
        .get(`${INV_API}stockValue?date=${date.toISOString()}`)
        .then((r: AxiosResponse) => {if (dataCallback) dataCallback(r.data.netValue)})        
        .catch ((e) => {if (errorCallback) errorCallback(e)});
}