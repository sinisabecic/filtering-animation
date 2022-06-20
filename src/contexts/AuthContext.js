import { createContext, useContext, useEffect, useState } from "react";
import { apiCall } from "../services/api";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const accessTokens = localStorage.getItem("accessToken");
  const [authTokens, setAuthTokens] = useState(accessTokens);

  useEffect(() => {
    apiCall.defaults.headers.common["Authorization"] = `Bearer ${authTokens}`;
  }, [authTokens]);

  const setTokens = (token) => {
    localStorage.setItem("accessToken", token);

    setAuthTokens(token);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setTokens }}>
      {children}
    </AuthContext.Provider>
  );
};
