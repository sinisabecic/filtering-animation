import React, { createContext, useReducer } from "react";
import { ageReducer } from "../reducers/ageReducer";

export const AgeContext = createContext();

export const AgeContextProvider = (props) => {
  //age je 20 i pripada ageReduceru kome ce da se preko dispatch-a radi izracunavanje
  const [age, dispatch] = useReducer(ageReducer, 0);

  return (
    //   value={{ age, dispatch }} ovo je zapravo eksportovanje na neki nacin
    <AgeContext.Provider value={{ age, dispatch }}>
      {props.children}
    </AgeContext.Provider>
  );
};

//! Probati da se napravi context za fetchovanje nekog apija po type: 'GET_ALL' npr
