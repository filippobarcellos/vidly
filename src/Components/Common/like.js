import React from "react";
import { useMovies } from "../../Context/useMovies";

const Like = ({ movie }) => {
  const { handleLike } = useMovies();
  return (
    <i
      onClick={() => handleLike(movie._id)}
      className={movie.liked ? "fa fa-heart" : "fa fa-heart-o"}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
