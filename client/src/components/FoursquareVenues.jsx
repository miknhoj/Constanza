import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class FoursquareVenues extends Component {
  state = {
    venues: []
  }

  getVenues = async () => {
    const response = await axios.get(`/api/foursquare`)
    console.log(response)
    return response.data.response.venues
  }

  componentDidMount = async () => {
    const venues = await this.getVenues()
    this.setState({venues})
  }

  render() {
    const venues = this.state.venues.map((venue, i) => {
      return (
       <Link to={`/venues/${venue.id}`}key={i}>
      {venue.name}
      </Link>
      )
    })
    return (
      <div>
        {venues}
      </div>
    )
  }
}
