import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

const _ = require("lodash");

interface Props {
  doSearch: (searchTerm: string) => void; // Called when the search form is submitted
  setSearchTerm: Function; // Called when the search term changes
  searchTerm: string; // Current value of the search term
  onReset: Function; // Called to reload all the products
  placeholderText?: string;
  selfFocus?: boolean; // If true the component will attempt to steal focus
  noAutoSubmit?: boolean; // It true disable auto submit of the search after 2s
  disabled?: boolean; // Component is disabled, but shown
  clearOnEnter: boolean; // If false enter will not clear the field, leaving the value intact
}
const Search = (props: Props) => {
  const [localSearchTerm, setLocalSearchTerm] = useState<string>("");

  const handleTextEntry = (e) => {
    setLocalSearchTerm(e.target.value.replace(/^\s*/, ""));
  };

  useEffect(() => {
    setLocalSearchTerm(props.searchTerm);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (localSearchTerm.length >= 3 && !props.noAutoSubmit) {
      const delayDebounceFn = setTimeout(() => {
        props.doSearch(localSearchTerm);
      }, 1000);

      return () => clearTimeout(delayDebounceFn);
    } else if (localSearchTerm.length === 0) {
      props.onReset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localSearchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.doSearch(localSearchTerm);
    setLocalSearchTerm("");
  };

  const placeholder =
    props.placeholderText ||
    "Search by either part of the name, barcode or SKU";
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
      onSubmit={handleSubmit}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
        autoFocus={true}
        autoComplete="off"
        value={localSearchTerm}
        onChange={handleTextEntry}
        onKeyPress={(e) => props.clearOnEnter === false && e.key === "Enter" && e.preventDefault()}
        inputRef={(input) => input && props.selfFocus && input.focus()}
        disabled={props.disabled || false}
      />
      {_.isEmpty(localSearchTerm) && (
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          disabled={props.disabled || false}
        >
          <SearchIcon />
        </IconButton>
      )}
      {!_.isEmpty(localSearchTerm) && (
        <IconButton
          sx={{ p: "10px" }}
          aria-label="clear"
          disabled={props.disabled || false}
          onClick={() => {
            setLocalSearchTerm("");
            props.setSearchTerm("");
            props.onReset();
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </Paper>
  );
};

export default Search;
