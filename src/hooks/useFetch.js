import { useReducer, useEffect } from "react";
import axios from "axios";
import { ACTIONS, apiReducer, initialState } from "../reducers/apiReducer";

export const useFetch = (url) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.API_REQUEST });
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: ACTIONS.ERROR, payload: e.error });
      });
  }, [url]);

  return state;
};
