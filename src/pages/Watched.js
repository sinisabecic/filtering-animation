import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MovieContext } from "../contexts/MovieContext";
import Movie from "../components/Movie";

const Watched = () => {
  const { watched } = useContext(MovieContext);

  return (
    <div className="App" style={{ margin: "3rem" }}>
      <h1>Watched</h1>
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {watched.map((movie, key) => (
            <Movie key={key} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Watched;
