import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "./Auth";

import EmailNotVerified from "./components/structural/EmailNotVerified";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          currentUser.emailVerified ? (
            <RouteComponent {...routeProps} />
          ) : (
            <EmailNotVerified email={currentUser.email} />
          )
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;
