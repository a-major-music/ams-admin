import {
  FormControl,
  InputLabel,
  Typography,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import _ from "lodash";
import { useEffect, useState } from "react";
import { getLocations } from "src/services/product.service";

interface LocationPickerProps {
  register: (string, any) => {};
  errors: any;
  value: string;
  locationChanged: (data: any, input: string) => void;
}
export const LocationPicker = (props: LocationPickerProps) => {
  const [locations, setLocations] = useState<string[]>([]);

  useEffect(() => {
    getLocations(setLocations, (err) => {
      console.log(err);
    });
  }, []);

  return (
    <FormControl fullWidth error={props.errors.supplier}>
      <InputLabel>Location *</InputLabel>
      {_.isEmpty(locations) && <Typography>Loading locations...</Typography>}
      {!_.isEmpty(locations) && (
        <Select
          {...props.register("location", { required: true })}
          label="Location"
          value={props.value}
          defaultValue=""
          sx={{ textAlign: "left" }}
          onChange={props.locationChanged}
        >
          {locations.map((s) => (
            <MenuItem key={s} value={s}>
              {s}
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
  );
};
