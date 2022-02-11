import {
  CLEAR_DATA_FROM_DB,
  CLEAR_SCANNED_DATA,
  CLOSE_SCANNER,
  OPEN_SCANNER,
  SET_DATA_FROM_DB,
  SET_SCANNED_DATA,
} from "./scannerConstants";

export const setDataFromDb = (data) => {
  return { type: SET_DATA_FROM_DB, payload: data };
};
export const clearDataFromDb = () => {
  return { type: CLEAR_DATA_FROM_DB };
};
export const openScanner = () => {
  return { type: OPEN_SCANNER };
};
export const closeScanner = () => {
  return { type: CLOSE_SCANNER };
};
export const setScannedData = (data) => {
  return { type: SET_SCANNED_DATA, payload: data };
};
export const clearScannedData = () => {
  return { type: CLEAR_SCANNED_DATA };
};
