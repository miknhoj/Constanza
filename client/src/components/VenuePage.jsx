import React, { Component } from 'react'
import axios from 'axios'
import RatingsList from './shared_components/RatingsList'
import {Link} from 'react-router-dom'


export default class VenuePage extends Component {
  state = {
    venue: {
      name: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      baby_changing: '',
      sinks: '',
    },
    ratings: []
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
    const venue = this.state.venue
    return (

      <div>
        Venue
        <h1>{venue.location_name} </h1>

        <h3>{venue.street}<br></br>{venue.city}, {venue.state} {venue.zip}</h3>
        <div>
          Baby Changing Station: {venue.baby_changing}
        </div>
        <div>
          Sinks: {venue.sinks}
        </div>
        <Link to={`/venues/${this.props.match.params.venueId}/ratings/new`}><button>Rate</button></Link>
        <RatingsList ratings={this.state.ratings} users={this.state.users} aggregateState={this.aggregateState} />      </div>
    )
  }
}
