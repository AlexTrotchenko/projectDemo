import Header from "./ui/Header";

import BackdropOverlay from "./ui/Backdrop";
import { HashRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import ChooseLis from "./chooseLis";
import CustomizedSnackbar from "./alert";
import { useDispatch, useSelector } from "react-redux";
import ScannerPage from "./scanner/scannerPage";
import { asyncActionError } from "../redux/asyncReducer/asyncReducer";

function App() {
  const { error } = useSelector((state) => state.async);
  const dispatch = useDispatch();
  return (
    <>
      <Router>
        <Header />
        <BackdropOverlay />
        <Switch>
          <PrivateRoute exact path={"/"} component={ChooseLis} />
          <PrivateRoute exact path="/scan/:lis" component={ScannerPage} />
        </Switch>
        <CustomizedSnackbar
          onClose={() => {
            dispatch(asyncActionError(null));
          }}
          isOpen={!!error?.message}
          message={error?.message}
        />
      </Router>
    </>
  );
}

export default App;
