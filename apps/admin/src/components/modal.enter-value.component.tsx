import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import ButtonWithConfirm from "./modal.confirm-dialog.component";

interface Props {
  open: boolean;
  titleText?: string;
  placeholder?: string;
  message?: string;
  confirmMessage?: string;
  onSubmitValue: (string) => void;
  onCancel: () => void;
  updateButtonLabel?: string;
}

const EnterValue = (props: Props) => {
  const [newValue, setNewValue] = useState<string>("");

  const _onSubmit = () => {
    props.onSubmitValue(newValue);
    setNewValue("");
  }

  const _onCancel = () => {
    props.onCancel();
    setNewValue("");

  }
  return (
    <Dialog open={props.open}>
      <DialogTitle>
        {props.titleText || "Please enter the new value"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Box sx={{ m: 1 }}>
            <p>
              {props.message || "Please enter the new value in the field below"}
            </p>
            <TextField
              value={newValue}
              autoFocus
              variant="standard"
              fullWidth
              required
              label={props.placeholder || "New value"}
              onChange={(e) => setNewValue(e.target.value)}
            />
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.onCancel()}
        >
          Cancel
        </Button>
        <ButtonWithConfirm
          variant="contained"
          color="primary"
          disabled={newValue === ""}
          message={
            props.confirmMessage
              ? props.confirmMessage.replace(/\[value\]/g, newValue)
              : `Please confirm you wish to set the new value of ${newValue}...`
          }
          onOk={() => _onSubmit()}
          onCancel={() => _onCancel()}
        >
          {props.updateButtonLabel || "Update"}
        </ButtonWithConfirm>
      </DialogActions>
    </Dialog>
  );
};

export default EnterValue;
