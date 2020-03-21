import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Vidly</Link>

      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
          <Link className="nav-link" to="/Movies">Movies</Link>
        </li>

      <li className="nav-item">
        <Link className="nav-link" to="/Rentals">Rentals</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Customers">Customers</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Login">Login</Link>
      </li>
      </ul>
</nav>
  );
}
