import React, { Component } from 'react';

import { getMovies } from '../services/fakeMovieService';

import Like from './Common/like';
import Pagination from './Common/pagination';


class Movies extends Component {
  state = {
    movies: getMovies(),
    itemsPerPage: 4,
    currentPage: 1
  };

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

  render () {
    const { movies: allMovies, currentPage, itemsPerPage } = this.state;

    if(allMovies.length === 0) {
      return <p>There are no movies in the database</p>
    };

    // Get current Movies
    const indexOfLastMovie = currentPage * itemsPerPage;
    const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;
    const movies = allMovies.slice(indexOfFirstMovie, indexOfLastMovie);
    
    return (
      <>
        <p>Showing {movies.length} movies in the database</p>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {movies.map(movie => (
              <tr key={movie._id} >
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like liked={movie.liked} onClick={() => this.handleLike(movie)} /></td>
                <td>
                  <button onClick={() => this.handleDelete(movie)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination 
          itemsCount={allMovies.length} 
          itemsPerPage={itemsPerPage} 
          currentPage={currentPage}
          onPageChange={this.handlePageChange} 
        />
      </>
    )
  }
}

export default Movies;