import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Movies from './Pages/Movies';
import Customers from './Pages/Customers';
import NotFound from './Pages/404';
import Rentals from './Pages/Rentals';
import MovieForm from './Pages/MovieForm';
import Login from './Pages/Login';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Movies} />
            <Route path="/movies" component={Movies} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    )
  }
}

export default App;
