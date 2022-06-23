import React, { useEffect, useState } from "react";
import { apiCallMovie } from "../services/api";
import Movie from "../components/Movie";
import Filter from "../Filter";
import { motion, AnimatePresence } from "framer-motion";
import CircularProgress from "@mui/material/CircularProgress";

const Movies = () => {
  const apiKey = "8183d234f0477cb5b9dea44a1fca8b09";

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchSearchedMovies = async () => {
      await apiCallMovie
        .get(
          `/search/movie?api_key=${apiKey}&language=en-US&include_adult=true&query=${search}`
        )
        .then((res) => {
          setPopular(res.data.results);
          setFiltered(res.data.results);
          setIsLoaded(true);
          console.log(res.data.results);
        })
        .catch((err) => console.log(err));
    };

    if (search) {
      const timeoutId = setTimeout(
        () => !!search && fetchSearchedMovies(),
        500
      );
      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      fetchPopular();
    }
  }, [search, isLoaded]);

  //
  //* Get popular movies
  const fetchPopular = async () => {
    await apiCallMovie
      .get(`/movie/popular?api_key=${apiKey}`)
      .then((res) => {
        console.log(res.data);

        setPopular(res.data.results);
        setFiltered(res.data.results);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App" style={{ margin: "3rem" }}>
      {!isLoaded ? (
        <CircularProgress />
      ) : (
        <div className="App" style={{ margin: "3rem" }}>
          <div style={{ margin: "1rem" }}>
            <input
              type="text"
              name="movie"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <Filter
            popular={popular}
            setFiltered={setFiltered}
            setActiveGenre={setActiveGenre}
            activeGenre={activeGenre}
          />
          <motion.div layout className="popular-movies">
            <AnimatePresence>
              {filtered.map((movie, key) => (
                <Movie key={key} movie={movie} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Movies;
