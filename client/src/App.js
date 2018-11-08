import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LandingPage from './components/LandingPage';
import BathroomPage from './components/BathroomPage';
import RatingsList from './components/shared_components/RatingsList';
import NewRatingPage from './components/NewRatingPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/bathrooms/:bathroomId' component={BathroomPage} />
          <Route exact path='/bathrooms/:bathroomId/ratings' component={RatingsList} />
          <Route exact path='/bathrooms/:bathroomId/ratings/new' component={NewRatingPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
