import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MovieContext } from "../contexts/MovieContext";
import Movie from "../components/Movie";

const Watched = () => {
  const { watched } = useContext(MovieContext);

  return (
    <div className="App" style={{ margin: "3rem" }}>
      <h1>Watched</h1>
      {!watched.length > 0 ? (
        <h3 className="text-danger">Your watched list is empty!</h3>
      ) : (
        <motion.div layout className="popular-movies">
          <AnimatePresence>
            {watched.map((movie, key) => (
              <Movie key={key} movie={movie} type="watched" />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default Watched;
