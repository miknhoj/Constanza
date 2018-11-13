import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

export default class BathroomList extends Component {
  state = {
    bathrooms: []
  }

  getBathroom = async () => {
    const response = await axios.get(`/api/bathrooms`)
    return response.data
  }

  componentDidMount = async () => {
    const bathrooms = await this.getBathroom()
    this.setState({ bathrooms })
  }

  render() {
    const bathroomList = this.state.bathrooms.map((bathroom, i) => {
      return (
        <div key={i} >
          <StyledLink  to={`/bathrooms/${bathroom.id}`}>
            {bathroom.location_name}
          </StyledLink>
        </div>
      )
    })
    return (

      <div>
        {bathroomList}
      </div>
    )
  }
}
