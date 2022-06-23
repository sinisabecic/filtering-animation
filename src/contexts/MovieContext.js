import { useReducer, createContext, useEffect } from "react";
import { movieReducer, initialState } from "../reducers/movieReducer";

export const MovieContext = createContext(initialState);

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  //action
  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const markAsWatched = (movie) => {
    dispatch({ type: "MARK_AS_WATCHED", payload: movie });
  };

  return (
    <MovieContext.Provider
      value={{
        watchlist: state.watchlist, //? napravljen je uslov u movieReducer za ovo. initialState.watchlist
        watched: state.watched,
        addMovieToWatchList,
        markAsWatched,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
