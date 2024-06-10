import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import CallIcon from "@mui/icons-material/Call";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: "50px",
  padding: "20px",
}));

function ContactPopUp() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CustomButton variant="outlined" onClick={handleClickOpen}>
        <CallIcon />
      </CustomButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Need Help ?
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <h2 className="pop-heading">We are ready to Help you</h2>
          <h3>Call Best Health Insurance Parker</h3>
          <Typography gutterBottom className="tell-phone-no">
            at: 1-855-914-3033 / TTY 711
          </Typography>
          <Typography gutterBottom>
            7 a.m. to 11 p.m. ET, Monday - Friday 9
          </Typography>
          <Typography gutterBottom>a.m. to 5 p.m. ET, Saturday</Typography>
          <Typography gutterBottom>
            Already a member? Call the number on the back of your member ID
            card.
          </Typography>
          <Typography gutterBottom>MO10050ST</Typography>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}

export default ContactPopUp;
