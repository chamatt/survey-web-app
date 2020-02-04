import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import { COORDINATOR } from '../../utils/constants';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.data?.role?.toUpperCase() === COORDINATOR;

  return (
    <Route
      {...rest}
      render={props =>
        isAdmin === true ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default ProtectedRoute;
