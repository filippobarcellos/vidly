import React from "react";
import { useMovies } from "../../Context/useMovies";

const ListGroup = () => {
  const { genres, handleGenreSelect, selectedGenre } = useMovies();
  return (
    <ul class="list-group">
      {genres.map((genre) => (
        <li
          key={genre._id}
          className={
            genre === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => handleGenreSelect(genre)}
          style={{ cursor: "pointer" }}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
