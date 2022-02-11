import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbar({
  onClose = () => {},
  eventId = "error",
  isOpen = false,
  message = "",
}) {
  const classes = useStyles();

  const eventMap = {
    error: "error",
    warning: "warning",
    info: "info",
    success: "success",
  };

  return (
    <div className={classes.root}>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={onClose}>
        <Alert
          elevation={6}
          variant="filled"
          onClose={onClose}
          severity={eventMap[eventId]}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
