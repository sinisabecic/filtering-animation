import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

//! Komponenta samo za dugmad

const MovieControls = ({ movie, type }) => {
  const {
    addMovieToWatchList,
    watchlist,
    markAsWatched,
    watched,
    removeFromWatchlist,
    removeFromWatched,
  } = useContext(MovieContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let watchedMovie = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie ? true : false;
  const watchedDisabled = watchedMovie ? true : false;

  return (
    <>
      {type === "watchlist" && (
        <>
          {storedMovie ? (
            <button
              className="btn"
              style={{ cursor: "pointer" }}
              onClick={() => removeFromWatchlist(movie.id)}
            >
              Remove from watchlist
            </button>
          ) : (
            <>
              <button
                className="btn"
                style={{ cursor: "pointer" }}
                //   disabled={watchlistDisabled}
                onClick={() => addMovieToWatchList(movie)}
              >
                Add to watchlist
              </button>{" "}
              <button
                className="btn"
                style={{ cursor: "pointer" }}
                disabled={watchedDisabled}
                onClick={() => markAsWatched(movie)}
              >
                Mark as watched
              </button>
            </>
          )}
        </>
      )}

      {type === "watched" && (
        <>
          {watchedMovie ? (
            <button
              className="btn"
              style={{ cursor: "pointer" }}
              onClick={() => removeFromWatched(movie.id)}
            >
              Remove from watched
            </button>
          ) : (
            <button
              className="btn"
              style={{ cursor: "pointer" }}
              onClick={() => markAsWatched(movie)}
            >
              Mark as watched
            </button>
          )}
        </>
      )}
    </>
  );
};

export default MovieControls;
