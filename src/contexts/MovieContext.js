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

  const removeFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: id });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED_LIST", payload: id });
  };

  const moveToWatchlist = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };

  return (
    <MovieContext.Provider
      value={{
        watchlist: state.watchlist, //? napravljen je uslov u movieReducer za ovo. initialState.watchlist
        watched: state.watched,
        addMovieToWatchList,
        markAsWatched,
        removeFromWatchlist,
        removeFromWatched,
        moveToWatchlist,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
