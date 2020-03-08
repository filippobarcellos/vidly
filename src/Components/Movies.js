import React, { Component } from 'react';

import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

import MoviesTable from './MoviesTable';
import Pagination from './Common/pagination';
import ListGroup from './Common/listGroup';


class Movies extends Component {
  state = {
    movies: [],
    itemsPerPage: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: ''
  };

  componentDidMount() {
    const genres = [{ name: 'All Genres'}, ...getGenres()]

    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);

    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  }

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  }

  handleSort = path => {
    
  }

  render () {
    const { movies: allMovies, currentPage, itemsPerPage, genres, selectedGenre } = this.state;

    if(allMovies.length === 0) {
      return <p>There are no movies in the database</p>
    };

    // Get current Movies
    const indexOfLastMovie = currentPage * itemsPerPage;
    const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;

    const moviesFiltered = selectedGenre && selectedGenre._id 
      ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
      : allMovies;

    const movies = moviesFiltered.slice(indexOfFirstMovie, indexOfLastMovie);
    
    return (
        <div className="container">
          <div className="row">
            <div className="col-3">
              <ListGroup 
                genres={genres} 
                onGenreSelect={this.handleGenreSelect}
                selectedGenre={selectedGenre}
              />
            </div>
            <div className="col-9">
              <p>Showing {moviesFiltered.length} movies in the database</p>
              <MoviesTable 
                movies={movies} 
                onDelete={this.handleDelete} 
                onLike={this.handleLike}
                onSort={this.handleSort}
              />

              <Pagination 
                itemsCount={moviesFiltered.length} 
                itemsPerPage={itemsPerPage} 
                currentPage={currentPage}
                onPageChange={this.handlePageChange} 
              />
            </div>
          </div>
        </div>
    )
  }
}

export default Movies;