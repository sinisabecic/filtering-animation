import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

export const PrivateRoute = ({ children }) => {
  // console.log(authTokens, "context");
  const { authTokens } = useContext(AuthContext);

  return authTokens ? children : <Navigate to="/login" />;
};
