import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MovieContext } from "../contexts/MovieContext";
import Movie from "../components/Movie";

const Watchlist = () => {
  const { watchlist } = useContext(MovieContext);

  return (
    <div className="App" style={{ margin: "3rem" }}>
      <h1>Watchlist</h1>
      {!watchlist.length > 0 ? (
        <h3>Your watchlist is empty!</h3>
      ) : (
        <motion.div layout className="popular-movies">
          <AnimatePresence>
            {watchlist.map((movie, key) => (
              <Movie key={key} movie={movie} type="watchlist" />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default Watchlist;
