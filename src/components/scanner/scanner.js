import { Button, CircularProgress, Grid } from "@mui/material";
import { styled } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Scanner from "react-webcam-qr-scanner";
import useUpdateBatch from "../../hooks/useUpdateBatch";

import { asyncActionError } from "../../redux/asyncReducer/asyncReducer";
import {
  clearScannedData,
  closeScanner,
  setScannedData,
} from "../../redux/scannerReducer/srannerActions";

import QrScanenrOverlay from "./qrScanOverlay";

const GridContainer = styled(Grid)({ height: "22rem", width: "100%" });
const ProgressContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Overlay = styled(QrScanenrOverlay)({
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: 1071,
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const StyledScanner = styled(Scanner)({
  width: "100%",
  transform: `translate(-50%, -50%)`,
  position: "absolute",
  left: "50%",
  top: "50%",
});

const ScannerContainer = styled(Grid)({
  width: "22rem",
  height: "22rem",
  position: "relative",
  overflow: "hidden",
  maxWidth: "unset",
});

const isValidDBId = (string) => {
  if (typeof string !== "string") {
    return false;
  }
  const regex = /^[a-zA-Z0-9]{20}$/g;
  return regex.test(string);
};

const QrScanner = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(closeScanner());
      dispatch(clearScannedData());
    };
  }, [dispatch]);

  const { loading } = useSelector((state) => state.async);
  const { dataFromDb, scannedData } = useSelector((state) => state.scanner);
  const [scannerLoaded, setScannerLoaded] = useState(false);
  useUpdateBatch(scannedData);

  const handleScannerLoad = () => {
    setScannerLoaded(true);
  };

  const handleDecode = useCallback(
    (result) => {
      if (!!result && !!dataFromDb) {
        if (result.data === dataFromDb.current) {
          dispatch(asyncActionError({ message: "the same id" }));
          return;
        }
        const isResTheSame = scannedData === result.data;
        if (isResTheSame) {
          dispatch(
            asyncActionError({ message: "you have already scanned it" })
          );
          return;
        }
        if (!isValidDBId(result.data)) {
          dispatch(asyncActionError({ message: "not valid format" }));
          return;
        }

        dispatch(setScannedData(result.data));
      } else {
      }
    },
    [scannedData, dataFromDb, dispatch]
  );

  return (
    <>
      {dataFromDb && !loading && (
        <>
          <GridContainer
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <ScannerContainer item xs={12}>
              {scannerLoaded ? (
                <Overlay />
              ) : (
                <ProgressContainer>
                  <CircularProgress />
                </ProgressContainer>
              )}
              <StyledScanner
                onDecode={handleDecode}
                onScannerLoad={handleScannerLoad}
                constraints={{
                  audio: false,
                  video: { deviceId: 1, facingMode: "environment" },
                }}
                captureSize={{ width: 1280, height: 720 }}
              />
            </ScannerContainer>
          </GridContainer>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <StyledButton
                color="primary"
                variant="contained"
                size="large"
                onClick={() => {
                  dispatch(closeScanner());
                }}
              >
                Close
              </StyledButton>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default QrScanner;
