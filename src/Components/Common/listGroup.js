import React from "react";

const ListGroup = ({ genres, onGenreSelect, selectedGenre }) => {
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
          onClick={() => onGenreSelect(genre)}
          style={{ cursor: "pointer" }}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
