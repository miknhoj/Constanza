import React, { Component } from 'react'
import Header from './shared_components/Header';
import FoursquareVenues from './FoursquareVenues';
import BathroomList from './bathroom_components/BathroomList';

export default class LandingPage extends Component {

  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
      var map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    }

  render() {
    return (
      <div>
        <Header/>
        <div id="map"></div>
        <FoursquareVenues />
        <BathroomList/>
      </div>
    )
  } 
}

{/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    async defer></script> */}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}


