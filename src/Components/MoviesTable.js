import React from 'react';
import { Link } from 'react-router-dom';

import Like from './Common/like';

const MoviesTable = ({ movies, onDelete, onLike, onSort }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th onClick={() => onSort('title') } >Title</th>
          <th onClick={() => onSort('genre.name') } >Genre</th>
          <th onClick={() => onSort('numberInStock') } >Stock</th>
          <th onClick={() => onSort('dailyRentalRate') } >Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {movies.map(movie => (
          <tr key={movie._id} >
            <td>
              <Link to={`/movies/${movie._id}`}>
                {movie.title}
              </Link>
            </td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like 
                liked={movie.liked} 
                onClick={() => onLike(movie)} 
              />
            </td>
            <td>
              <button 
                onClick={() => onDelete(movie)} 
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
  )
}

export default MoviesTable;