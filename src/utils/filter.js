export const filter = (allMovies, selectedGenre, setCurrentPage) => {
  const filteredMovies = allMovies.filter(
    (m) => m.genre._id === selectedGenre._id
  );

  setCurrentPage(1);
  return filteredMovies;
};
