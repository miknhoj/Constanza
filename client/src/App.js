import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LandingPage from './components/LandingPage';
import BathroomPage from './components/BathroomPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/bathrooms/:bathroomId' component={BathroomPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
