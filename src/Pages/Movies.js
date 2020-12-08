import React, { useState, useEffect } from "react";
import { useMovies } from "../Context/useMovies";
import { getGenres } from "../services/fakeGenreService";

import MoviesTable from "../Components/MoviesTable";
import Pagination from "../Components/Common/pagination";
import ListGroup from "../Components/Common/listGroup";
import { paginate } from "../utils/paginate";

const Movies = () => {
  const { allMovies, setAllMovies, currentPage, itemsPerPage } = useMovies();
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    setGenres(genres);
  }, []);

  const handleDelete = (movie) => {
    allMovies.filter((m) => m._id !== movie._id);
    setAllMovies({ allMovies });
  };

  const handleLike = (movie) => {
    const index = allMovies.indexOf(movie);
    allMovies[index] = { ...allMovies[index], liked: !allMovies[index].liked };
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
          <MoviesTable
            movies={movies}
            onDelete={handleDelete}
            onLike={handleLike}
          />

          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Movies;
