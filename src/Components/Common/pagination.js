import React from "react";
import { useMovies } from "../../Context/useMovies";

const Pagination = () => {
  const { allMovies, currentPage, onPageChange, itemsPerPage } = useMovies();

  const totalPages = Math.ceil(allMovies.length / itemsPerPage);
  if (totalPages === 1) return null;

  const pagesArray = [...Array(totalPages).keys()].map((i) => i + 1);

  return (
    <nav>
      <ul className="pagination">
        {pagesArray.map((page, index) => (
          <li
            key={index}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <button onClick={() => onPageChange(page)} className="page-link">
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
