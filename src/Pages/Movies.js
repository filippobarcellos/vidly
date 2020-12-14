import React, { useState, useEffect } from "react";
import { useMovies } from "../Context/useMovies";
import { paginate } from "../utils/paginate";
import { filter } from "../utils/filter";

import MoviesTable from "../Components/MoviesTable";
import Pagination from "../Components/Common/pagination";
import ListGroup from "../Components/Common/listGroup";

const Movies = () => {
  const {
    allMovies,
    setAllMovies,
    selectedGenre,
    genres,
    currentPage,
    setCurrentPage,
    itemsPerPage,
  } = useMovies();

  const handleDelete = (movie) => {
    allMovies.filter((m) => m._id !== movie._id);
    setAllMovies({ allMovies });
  };

  if (allMovies.length === 0) {
    return <p>There are no movies in the database</p>;
  }

  const filteredMovies =
    selectedGenre && selectedGenre._id
      ? filter(allMovies, selectedGenre, setCurrentPage)
      : allMovies;

  const movies = paginate(filteredMovies, currentPage, itemsPerPage);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <ListGroup />
        </div>
        <div className="col-9">
          <p>Showing {filteredMovies.length} movies in the database</p>
          <MoviesTable movies={movies} onDelete={handleDelete} />

          <Pagination movies={filteredMovies} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
