import React, { useContext } from "react";
import { motion } from "framer-motion";
import MovieControls from "./MovieControls";

// type cu koristiti kao identifikator koji odredjuje tip stranice/komponente
const Movie = ({ movie, type }) => {
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
      {/*  */}
      <MovieControls type={type} movie={movie} />
      {/*  */}
    </motion.div>
  );
};

export default Movie;
