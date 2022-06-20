import React, { useEffect, useState } from "react";
import { apiCallMovie } from "../services/api";
import Movie from "../components/Movie";
import Filter from "../Filter";
import { motion, AnimatePresence } from "framer-motion";

const Movies = () => {
  const apiKey = "8183d234f0477cb5b9dea44a1fca8b09";

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    await apiCallMovie
      .get(`/popular?api_key=${apiKey}`)
      .then((res) => {
        console.log(res.data);

        setPopular(res.data.results);
        setFiltered(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie, key) => (
            <Movie key={key} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Movies;
