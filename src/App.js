import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Movies from './Components/Movies';
import Customers from './Components/Customers';
import NotFound from './Components/404';
import Rentals from './Components/Rentals';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/movies" component={Movies} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </>
    )
  }
}

export default App;
