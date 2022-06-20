import React, { createContext } from "react";
import { useFetch } from "../hooks/useFetch";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const url = "https://inshortsapi.vercel.app/news?category=all";
  const { data: countries, loading, error } = useFetch(url);

  return (
    <CountryContext.Provider value={{ countries, loading, error }}>
      {children}
    </CountryContext.Provider>
  );
};
