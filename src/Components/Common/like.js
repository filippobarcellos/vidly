import React from "react";

const Like = ({ liked, onClick }) => {
  return (
    <i
      onClick={onClick}
      className={liked ? "fa fa-heart" : "fa fa-heart-o"}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
