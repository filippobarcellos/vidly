import React from 'react';

const Pagination = props => {
  const { itemsCount, itemsPerPage, currentPage, onPageChange } = props;

  const pages = [];

  // [1,2,3] array of pages
  for( let i = 1; i <= Math.ceil(itemsCount / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pages.length !== 1 ? pages.map(page => (
          <li key={page} className={currentPage === page ? "page-item active" : "page-item"}>
            <a onClick={() => onPageChange(page)} className="page-link">{page}</a>
          </li>
        )) : null }
      </ul>
    </nav>
  )
}

export default Pagination;