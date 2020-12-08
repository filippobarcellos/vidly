import React, { createContext, useContext, useState, useEffect } from "react";
import { getMovies } from "../services/fakeMovieService";

const MoviesContext = createContext();

export const useMovies = () => useContext(MoviesContext);

export const MoviesProvider = ({ children }) => {
  const [allMovies, setAllMovies] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setAllMovies(getMovies());
  }, []);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <MoviesContext.Provider
      value={{
        allMovies,
        setAllMovies,
        itemsPerPage,
        currentPage,
        onPageChange,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
