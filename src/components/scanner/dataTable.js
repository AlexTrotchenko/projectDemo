import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { DateTime } from "luxon";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { listenCurrentValues } from "../../firestoreService";
import {
  openScanner,
  setDataFromDb,
} from "../../redux/scannerReducer/srannerActions";
import useFirestoreDoc from "../../hooks/useFirestoreDoc";

const formatDate = (date) => {
  return DateTime.fromJSDate(date.toDate()).toLocaleString({
    ...DateTime.DATETIME_SHORT,
    hour12: false,
  });
};

const dateDiff = (date) => {
  const difference = DateTime.now()
    .diff(DateTime.fromJSDate(date.toDate()), [
      "months",
      "days",
      "hours",
      "minutes",
      "seconds",
    ])
    .toObject();
  const { days, hours, minutes } = difference;

  return ` ${days} d ${hours} h ${minutes} min`;
};

const DataTable = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.async);
  const { dataFromDb } = useSelector((state) => state.scanner);
  const { lis } = useParams();

  useFirestoreDoc({
    shouldExecute: Boolean(lis),
    query: () => listenCurrentValues(lis),
    data: ({ data, current }) =>
      dispatch(setDataFromDb({ data, current: current.id })),
    deps: [lis, dispatch],
  });

  return (
    <>
      {dataFromDb && !loading && (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Typography variant="h3" align="center">
              {dataFromDb.data.hmota}
            </Typography>
            <Grid />
            <Grid item>
              <TableContainer component={Paper}>
                <Table aria-label="custom table">
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Was made
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {formatDate(dataFromDb.data.dateTime)}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Use after
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {formatDate(dataFromDb.data.readyDateTime)}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Odstatie
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {dateDiff(dataFromDb.data.dateTime)}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Start of pressing:
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {formatDate(dataFromDb.data.startOfPressing)}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Time of pressing:
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {dateDiff(dataFromDb.data.startOfPressing)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              size="large"
              onClick={() => {
                dispatch(openScanner());
              }}
            >
              Start new
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default DataTable;
