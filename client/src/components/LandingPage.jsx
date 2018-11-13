import React, { Component } from 'react'
import FoursquareVenues from './FoursquareVenues';
import BathroomList from './bathroom_components/BathroomList';
import styled from 'styled-components'
import axios from 'axios';
import { Link } from 'react-router-dom'

require('dotenv').config()

const StyledMap = styled.div`
  display: flex;
  justify-content: center;
`
const StyledList = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;
`
export default class LandingPage extends Component {
  state = {
    venues: []
  }

  componentDidMount() {
    this.getVenues()
  }

  renderMap = () => {
    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`)
    window.initMap = this.initMap
  }

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 33.772866, lng: -84.366031 },
      zoom: 15
    })

    this.state.venues.map(myVenue => {
      return new window.google.maps.Marker({
        position: { lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng },
        map: map,
        title: myVenue.venue.name
      })
    })
  }

  getVenues = () => {
    const client_id = process.env.REACT_APP_CLIENT_ID
    const client_secret = process.env.REACT_APP_CLIENT_SECRET
    const endPoint = `https://api.foursquare.com/v2/venues/explore?client_id=${client_id}&client_secret=${client_secret}&`
    const parameters = {
      query: "toilet",
      near: "Atlanta,GA",
      v: "20181112"

    }
    axios.get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        console.log(response.data.response.groups[0].items)
        this.setState({
          venues: response.data.response.groups[0].items
        }, this.renderMap())
      })
      .catch(error => {
        console.log("ERROR!! " + error)
      })
  }

  render() {

    return (
      <StyledList >
        <div>
          <StyledMap>
            <div id="map"></div>
          </StyledMap>
          <Link to={"/new"}><button>Add a New Bathroom</button></Link>
          <FoursquareVenues />
          <BathroomList />
        </div>
      </StyledList>
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

