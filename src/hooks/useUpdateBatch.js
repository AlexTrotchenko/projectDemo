import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { updateBatch } from "../firebaseServis";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../redux/asyncReducer/asyncReducer";
import {
  clearScannedData,
  closeScanner,
} from "../redux/scannerReducer/srannerActions";

const useUpdateBatch = (batchId) => {
  const dispatch = useDispatch();
  const { lis } = useParams();

  useEffect(() => {
    if (!batchId) {
      return;
    }
    dispatch(asyncActionStart());
    updateBatch({ id: batchId, lis })
      .then((res) => {
        dispatch(closeScanner());
        dispatch(asyncActionFinish());
        dispatch(clearScannedData());
      })
      .catch((err) => {
        dispatch(asyncActionError(err));
        dispatch(asyncActionFinish());
      });
    // try {
    //   dispatch(asyncActionStart());
    //   updateBatch({ id: batchId, lis });
    //   dispatch(closeScanner());
    // } catch (error) {
    //   dispatch(asyncActionError(error));
    // } finally {
    //   dispatch(asyncActionFinish());
    //   dispatch(clearScannedData());
    // }
  }, [batchId, lis, dispatch]);
};

export default useUpdateBatch;
