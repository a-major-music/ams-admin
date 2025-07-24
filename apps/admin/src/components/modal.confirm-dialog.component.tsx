import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ExtendButtonBase,
  IconButton,
} from "@mui/material";

const ButtonWithConfirm = (props: ButtonWithConfirmProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
    props.onOk();
  };

  const handleCancel = () => {
    setOpen(false);
    if (props.onCancel instanceof Function) {
      props.onCancel();
    }
  };

  const title = props.title ? props.title : "Are you sure?";

  const ButtonTag: ExtendButtonBase<any> = props.renderAsIcon
    ? IconButton
    : Button;

  return (
    <>
      <ButtonTag
        onClick={handleClick}
        variant={props.variant}
        color={props.color}
        disabled={props.disabled}
        size={props.size}
        sx={props.sx}
      >
        {props.children}
      </ButtonTag>
      <Dialog onClose={props.onCancel} open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.message}</DialogContentText>
          <DialogActions>
            <Button
              onClick={handleCancel}
              color="secondary"
              variant="contained"
            >
              {props.cancelButtonLabel ? props.okButtonLabel : "Cancel"}
            </Button>
            <div style={{ flex: "1 0 0" }} />
            <Button
              onClick={handleOk}
              color="primary"
              variant="contained"
              autoFocus
            >
              {props.okButtonLabel ? props.okButtonLabel : "Ok"}
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export type ButtonWithConfirmProps = {
  children: any;
  title?: string;
  variant?: "text" | "outlined" | "contained";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  onOk?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
  okButtonLabel?: string;
  cancelButtonLabel?: string;
  message?: string;
  sx?: any;
  renderAsIcon?: boolean;
  size?: string;
  disabled?: boolean;
};

export default ButtonWithConfirm;
