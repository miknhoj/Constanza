import React, { Component } from 'react'
import axios from 'axios' 


export default class VenuePage extends Component {
  state = {
    venue: {}
  }

  getVenue = async () => {
    const response = await axios.get(`/api/foursquare/${this.props.match.params.venueId}`)
    // console.log(response)
    return response
  }

  componentDidMount = async () => {
    const venue = await this.getVenue()
    console.log(venue)
    this.setState({ venue })
  }


  render() {

    return (
      <div>
        Venue
      </div>
    )
  }
}
