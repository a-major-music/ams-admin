import { Box, Typography } from "@mui/material";
import { Supplier } from "@amm/types";
import { useEffect, useState } from "react";
import { getSuppliers } from "src/services/supplier.service";
import SupplierTable from "src/components/supplier-table.component";

const SuppliersView = () => {
    // const [ selectedSupplier, setSelectedSupplier ] = useState<Supplier>(undefined);
    const [ supplierData, setSupplierData ] = useState<Supplier[]>();
    const [ currentSkip, setCurrentSkip ] = useState(0);
    const [ currentTake, setCurrentTake ] = useState(25);
    const [ totalRows, setTotalRows ] = useState(0);

    useEffect(() => {
        getSuppliers({ skip: currentSkip, take: currentTake }, setSupplierData, setTotalRows);
      }, [currentSkip, currentTake]);

    const setSkip = (page, details) => {
        setCurrentSkip(page * currentTake);
    }

    const setTake = (pageSize, details) => {
        const oldTake = currentTake;
        setCurrentTake(pageSize);
        setCurrentSkip(Math.trunc(currentSkip * (oldTake / currentTake)))
    }

    return (
        <>
            <Typography variant="h1">Suppliers</Typography>
            <Box sx={{m: 1}}>
                <SupplierTable
                    data={supplierData}
                    pageSize={currentTake}
                    totalRows={totalRows}
                    onPageChange={setSkip}
                    onPageSizeChange={setTake}
                />
            </Box>
        </>
    );}

export default SuppliersView;