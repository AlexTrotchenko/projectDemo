import {
  CLEAR_DATA_FROM_DB,
  CLEAR_SCANNED_DATA,
  CLOSE_SCANNER,
  OPEN_SCANNER,
  SET_DATA_FROM_DB,
  SET_SCANNED_DATA,
} from "./scannerConstants";

const initialState = { dataFromDb: null, open: false, scannedData: "" };
const scannerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA_FROM_DB:
      return { ...state, dataFromDb: payload };
    case CLEAR_DATA_FROM_DB:
      return { ...state, dataFromDb: null };
    case OPEN_SCANNER:
      return { ...state, open: true };
    case CLOSE_SCANNER:
      return { ...state, open: false };
    case SET_SCANNED_DATA:
      return { ...state, scannedData: payload };
    case CLEAR_SCANNED_DATA:
      return { ...state, scannedData: "" };
    default:
      return state;
  }
};
export default scannerReducer;
