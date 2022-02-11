import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import LoginForm from "./loginForm";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { authenticated } = useSelector((state) => state.auth);
  const { initialized } = useSelector((state) => state.async);
  return (
    <Route
      {...rest}
      render={(props) =>
        initialized && authenticated ? (
          <Component {...props} />
        ) : (
          <LoginForm {...props} />
        )
      }
    />
  );
}
