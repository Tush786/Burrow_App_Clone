import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

function PrivateRoute({ children }) {
  const Token = Cookies.get('token');

  if (!Token) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
