import React, { useState } from "react";
import styled from "styled-components";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const ModalContainer = styled.div``;

export default function ResponseView({ success, clearForm, showModal }) {
  const HeaderText = styled(DialogTitle)`
    color: ${success ? "black" : "red"};
  `;

  const [open, setOpen] = useState(success);

  const handleClose = () => {
    if (success) clearForm();
    showModal(false);
    setOpen(false);
  };

  return (
    <ModalContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <HeaderText id="alert-dialog-title">
          {success
            ? "Your email was sent successfully!"
            : "There was an error with sending your email"}
        </HeaderText>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {success
              ? "You can now close this dialog."
              : "Please check that the form fields have been filled out correctly and try again. Ensure that all SKUs are valid and have been entered correctly. If this issue persists, contact the developer."}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* Commented out until App directory is a thing again */}
          {/* <Button href="/" color="primary">
            App Directory
          </Button> */}
          <Button onClick={handleClose} color="primary" autoFocus>
            {success ? "Send Another" : "Try Again"}
          </Button>
        </DialogActions>
      </Dialog>
    </ModalContainer>
  );
}
