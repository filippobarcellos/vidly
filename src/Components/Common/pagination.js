import React from "react";
import { useMovies } from "../../Context/useMovies";

const Pagination = () => {
  const { allMovies, currentPage, setCurrentPage, itemsPerPage } = useMovies();

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
            <button className="page-link" onClick={() => setCurrentPage(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
