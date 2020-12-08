export const paginate = (allMovies, currentPage, itemsPerPage) => {
  const indexOfLastMovie = currentPage * itemsPerPage;
  const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;

  // let moviesPaginated;

  return allMovies.slice(indexOfFirstMovie, indexOfLastMovie);
};
