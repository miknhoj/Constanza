import React, { Component } from 'react'
import styled from 'styled-components'
import { Redirect, Link } from 'react-router-dom'
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
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post(`/api/bathrooms`, this.state.newBathroom)
    console.log(response)
    const bathroomId = response.data.id

    await this.props.history.push(`/bathrooms/${bathroomId}`)
  }

  handleChange = (e) => {
    const newBathroom = { ...this.state.newBathroom }
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
              type='text'
              name='location_name'
              value={this.state.newBathroom.location_name}
              onChange={this.handleChange}
            />

            <p>Street Address</p>
            <StyledInput placeholder='Street Address'
              type='text'
              name='street'
              value={this.state.newBathroom.street}
              onChange={this.handleChange}
            />

            <p>City</p>
            <StyledInput placeholder='City'
              type='text'
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

            <p>Zip</p>
            <StyledInput placeholder='Zip'
              type="text"
              name='zip'
              value={this.state.newBathroom.zip}
              onChange={this.handleChange}
            />

            <p>Baby Changing Station</p>
            <StyledInput placeholder='Yes/No'
              type="text"
              name='baby_changing'
              value={this.state.newBathroom.baby_changing}
              onChange={this.handleChange}
            />

            <p>Number of Sinks</p>
            <StyledInput placeholder='Number of Sinks'
              type="number" min='0'
              name='sinks'
              value={this.state.newBathroom.sinks}
              onChange={this.handleChange}
            />

            <div>
              <input type='submit' value='Add New Bathroom' />
              <Link to={`/`}><button>Back</button></Link>
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

`

