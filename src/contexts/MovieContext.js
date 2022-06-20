//! Jos uvijek nista od ovoga ne radi. Ovo je osnov za V4 Tmdb-a

import { createContext, useEffect, useState } from "react";
import { apiCallMovie } from "../services/api";

export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const accessTokens = localStorage.getItem("accessMovieToken");
  const [movieTokens, setMovieTokens] = useState(accessTokens);

  useEffect(() => {
    apiCallMovie.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${movieTokens}`;
  }, [accessTokens]);

  const setTokens = (token) => {
    localStorage.setItem("accessMovieToken", token);

    setMovieTokens(token);
  };

  return (
    <MovieContext.Provider value={{ movieTokens, setTokens }}>
      {children}
    </MovieContext.Provider>
  );
};
