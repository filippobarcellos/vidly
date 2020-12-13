import React, { useState, useEffect } from "react";
import { useMovies } from "../Context/useMovies";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";

import MoviesTable from "../Components/MoviesTable";
import Pagination from "../Components/Common/pagination";
import ListGroup from "../Components/Common/listGroup";

const Movies = () => {
  const {
    allMovies,
    setAllMovies,
    currentPage,
    itemsPerPage,
    genres,
  } = useMovies();
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleDelete = (movie) => {
    allMovies.filter((m) => m._id !== movie._id);
    setAllMovies({ allMovies });
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  if (allMovies.length === 0) {
    return <p>There are no movies in the database</p>;
  }

  const movies = paginate(allMovies, currentPage, itemsPerPage);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <ListGroup
            genres={genres}
            onGenreSelect={handleGenreSelect}
            selectedGenre={selectedGenre}
          />
        </div>
        <div className="col-9">
          <p>Showing {allMovies.length} movies in the database</p>
          <MoviesTable movies={movies} onDelete={handleDelete} />

          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Movies;
