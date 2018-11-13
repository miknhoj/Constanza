import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class NewBathroom extends Component {
  state = {
    newBathroom: {
      location_name: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      baby_changing: '',
      sinks: '',
    },
    redirect: false,
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`/api/bathrooms`, { "form_data": this.state.bathroom })
    this.setState({
      bathroom: {
        location_name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        baby_changing: '',
        sinks: ''
      }
    })
    this.setState({ redirect: true })
  }

  handleChange = (e) => {
    const newBathroom = { ...this.state.newBathroom}
    newBathroom[e.target.name] = e.target.value
    this.setState({ newBathroom })
  }
  render() {
    return (
      <div>
        < StyledContainer>
          <form onSubmit={this.handleSubmit} >
            <h1>Add a New Bathroom</h1>
            <p>Location Name</p>
            <StyledInput placeholder='Location Name'
              type="text"
              name='Location Name'
              value={this.state.newBathroom.location_name}
              onChange={this.handleChange}
            />

            <p>Street Address</p>
            <StyledInput placeholder='Street Address'
              type="text"
              name='Street Address'
              value={this.state.newBathroom.street}
              onChange={this.handleChange}
            />

            <p>City</p>
            <StyledInput placeholder='City'
              type="text"
              name='city'
              value={this.state.newBathroom.city}
              onChange={this.handleChange}
            />

            <p>State</p>
            <StyledInput placeholder='State'
              type="text"
              name='state'
              value={this.state.newBathroom.state}
              onChange={this.handleChange}
            />

            <div>
              <input type='submit' value='Rate' />
              <Link to={`/bathrooms/${this.props.match.params.bathroomId}`}><button>Back</button></Link>
            </div>

          </form>
        </StyledContainer>
      </div >
    )
  }
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledInput = styled.input`
width: 50px;
`

