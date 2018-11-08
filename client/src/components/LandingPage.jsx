import React, { Component } from 'react'
import BathroomList from './BathroomList';
import Header from './shared_components/Header';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <BathroomList/>
      </div>
    )
  }
}
