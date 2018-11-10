import React, { Component } from 'react'
import BathroomList from './BathroomList';
import Header from './shared_components/Header';
import FoursquareVenues from './FoursquareVenues';

export default class LandingPage extends Component {

  render() {

    return (
      <div>
        <Header/>
        <FoursquareVenues />
        <BathroomList/>
      </div>
    )
  }
}
