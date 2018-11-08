import React, { Component } from 'react'
import BathroomList from './BathroomList';
import Header from './shared_components/Header';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        Landing Page!
        <img src='https://www.redfin.com/blog/wp-content/uploads/sites/5/2013/08/I285-Atlanta.jpg' alt='sample'/>
        <BathroomList/>
      </div>
    )
  }
}
