import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LandingPage from './components/LandingPage';
import BathroomPage from './components/bathroom_components/BathroomPage';
import RatingsList from './components/shared_components/RatingsList';
import NewRatingPage from './components/NewRatingPage';
import EditRating from './components/EditRating';
import VenuePage from './components/VenuePage';
import './App.css'
import Header from './components/shared_components/Header';
import NewBathroom from './components/bathroom_components/NewBathroom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/bathrooms/:bathroomId' component={BathroomPage} />
          <Route exact path='/new' component={NewBathroom}/>
          <Route exact path='/venues/:venueId' component={VenuePage} />
          <Route exact path='/bathrooms/:bathroomId/ratings' component={RatingsList} />
          <Route exact path='/bathrooms/:bathroomId/ratings/new' component={NewRatingPage}/>
          <Route exact path='/bathrooms/:bathroomId/ratings/:ratingsId/edit' component={EditRating}/>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
