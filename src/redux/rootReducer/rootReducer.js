import { combineReducers } from "redux";
import asyncReducer from "../asyncReducer/asyncReducer";
import authReducer from "../authReducer/authReducer";
import scannerReducer from "../scannerReducer/scannerReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  async: asyncReducer,
  scanner: scannerReducer,
});

export default rootReducer;
