import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

export default class FoursquareVenues extends Component {
  state = {
    venues: []
  }

  getVenues = async () => {
    const response = await axios.get(`/api/foursquare`)
    // console.log(response)
    return response.data.response.venues
  }

  componentDidMount = async () => {
    const venues = await this.getVenues()
    this.setState({ venues })
  }

  render() {
    const venues = this.state.venues.map((venue, i) => {
      return (
        <div key={i}>
          <StyledLink to={`/venues/${venue.id}`}>
            {venue.name}
          </StyledLink>
        </div>
      )
    })
    return (
      <div>
        {venues}
      </div>
    )
  }
}
