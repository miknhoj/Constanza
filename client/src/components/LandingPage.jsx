import React, { Component } from 'react'
import Header from './shared_components/Header';
import FoursquareVenues from './FoursquareVenues';
import BathroomList from './bathroom_components/BathroomList';
import styled from 'styled-components'

const StyledMap = styled.div`
  display: flex;
  justify-content: center;
`

export default class LandingPage extends Component {

  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`)
    window.initMap = this.initMap
  }

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 33.772866, lng: -84.366031 },
      zoom: 8
    });
  }

  render() {
    return (
      <div>
        <StyledMap>
          <div id="map"></div>
        </StyledMap>
        <FoursquareVenues />
        <BathroomList />
      </div>
    )
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

