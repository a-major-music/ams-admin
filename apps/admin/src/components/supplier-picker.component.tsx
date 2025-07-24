import { FormControl, InputLabel, Typography, Select, MenuItem, FormHelperText } from "@mui/material"
import { Supplier } from "@amm/types"
import _ from "lodash"
import { useEffect, useState } from "react"
import { getSuppliers } from "src/services/supplier.service"

interface SupplierPickerProps {
    register: (string, any) => {}
    errors: any
    value: string
    supplierChanged: (data: any, input: string) => void
}
export const SupplierPicker = (props:SupplierPickerProps) => {
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);

    useEffect(() => {
        getSuppliers({}, setSuppliers, () => {});
      }, []);    

      return (
        <FormControl fullWidth error={props.errors.supplier}>
          <InputLabel>Supplier *</InputLabel>
          {_.isEmpty(suppliers) && (
            <Typography>Loading suppliers...</Typography>
          )}
          {!_.isEmpty(suppliers) && (
            <Select
              {...props.register("supplier", { required: true })}
              label="Supplier"
              value={props.value}
              defaultValue=""
              sx={{ textAlign: "left" }}
              onChange={props.supplierChanged}
            >
              {suppliers.map((s) => (
                <MenuItem key={s.guid} value={s.guid}>
                  {s.name}
                </MenuItem>
              ))}
            </Select>
          )}
          {props.errors.supplier && (
            <FormHelperText>
              You must select a Supplier from the list.
            </FormHelperText>
          )}
        </FormControl>
    )
}