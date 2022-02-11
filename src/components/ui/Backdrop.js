import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const BackdropOverlay = () => {
  const { loading, initialized } = useSelector((state) => state.async);
  return (
    <Backdrop open={!initialized || loading}>
      <CircularProgress size={34} />
    </Backdrop>
  );
};
export default BackdropOverlay;
