import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class BathroomList extends Component {
  state= {
    bathrooms: []
  }

  getBathroom = async () => {
    const response = await axios.get(`/api/bathrooms`)
    console.log(response)
    return response.data
  }

  componentDidMount = async () => {
    const bathrooms = await this.getBathroom()
    this.setState({bathrooms})
  }

  render() {
    const bathroomList = this.state.bathrooms.map((bathroom, i)=> {
      return (
      <Link key={i} to={`/bathrooms/${bathroom.id}`}>
        {bathroom.location_name}
      </Link>
      )
    })
    return (
      <StyledList>
        {bathroomList}
      </StyledList>
    )
  }
}

const StyledList = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`