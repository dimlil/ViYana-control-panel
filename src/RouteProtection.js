import jsCookie from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

function RouteProtection({children}) {
  const isAuth = jsCookie.get('user');
  return isAuth ? children : <Navigate to="/login" replace />;
}

export default RouteProtection;
