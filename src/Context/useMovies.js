import React, { createContext, useContext, useState, useEffect } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

const MoviesContext = createContext();

export const useMovies = () => useContext(MoviesContext);

export const MoviesProvider = ({ children }) => {
  const [allMovies, setAllMovies] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    setAllMovies(getMovies());
    const genres = [{ name: "All Genres" }, ...getGenres()];
    setGenres(genres);
  }, []);

  const handleLike = (id) => {
    const newMovies = allMovies.map((m) =>
      m._id === id ? { ...m, liked: !m.liked } : m
    );
    setAllMovies(newMovies);
  };

  const handleGenreSelect = (genre) => setSelectedGenre(genre);

  return (
    <MoviesContext.Provider
      value={{
        allMovies,
        setAllMovies,
        itemsPerPage,
        currentPage,
        setCurrentPage,
        handleLike,
        genres,
        selectedGenre,
        handleGenreSelect,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
