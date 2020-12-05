import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MoviesList from "./components/moviesList/MoviesList";
import MovieDetails from "./components/movieDetails/MovieDetails";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:id" component={MovieDetails} />
          <Route path="/" component={MoviesList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
