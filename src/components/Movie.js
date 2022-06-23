import React, { useContext } from "react";
import { motion } from "framer-motion";
import { MovieContext } from "../contexts/MovieContext";

const Movie = ({ movie }) => {
  const { addMovieToWatchList, watchlist, markAsWatched, watched } =
    useContext(MovieContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let watchedMovie = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie ? true : false;
  const watchedDisabled = watchedMovie ? true : false;

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2>Title: {movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
      <button
        className="btn"
        style={{ cursor: "pointer" }}
        disabled={watchlistDisabled}
        onClick={() => addMovieToWatchList(movie)}
      >
        {!storedMovie ? "Add to watchlist" : "Added to watchlist"}
      </button>
      {" | "}
      <button
        className="btn"
        style={{ cursor: "pointer" }}
        disabled={watchedDisabled}
        onClick={() => markAsWatched(movie)}
      >
        {!watchedMovie ? "Mark as watched" : "Watched"}
      </button>
    </motion.div>
  );
};

export default Movie;
