import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class EditRating extends Component {
  state = {
    updatedRating: {
      rating: '',
      cleaniness: '',
      privacy_level: '',
      comment: ''
    },
    rating: {

    },
    bathroom: {

    },
    redirect: false
  }

  getRating = async () => {
    const response = await axios.get(`/api/bathrooms/${this.props.match.params.bathroomId}/ratings/${this.props.match.params.ratingsId}`)
    console.log(response)
    this.setState({ updatedRating: response.data, rating: {"form_data": response.data}})
  }

  componentDidMount = async () => {
    this.getRating()
  }

  handleChange = (e) => {
    const updatedRating = { ...this.state.updatedRating }
    updatedRating[e.target.name] = e.target.value
    this.setState({ updatedRating })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`/api/bathrooms/${this.props.match.params.bathroomId}/ratings/${this.props.match.params.ratingsId}`, { "form_data": this.state.updatedRating })
    this.setState({ redirect: true })
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to={`/bathrooms/${this.props.match.params.bathroomId}`}/>
    }

    return (
      <div>
        EDIT!
        <form onSubmit={this.handleSubmit} >
          <h1>New rating for {this.state.bathroom.location_name}</h1>
          <p>Rating</p>
          <StyledInput placeholder='1-5'
            type="number" min="1" max="5"
            name='rating'
            value={this.state.updatedRating.rating}
            onChange={this.handleChange}
          />

          <p>Cleaniness</p>
          <StyledInput placeholder='1-5'
            type="number" min="1" max="5"
            name='cleaniness'
            value={this.state.updatedRating.cleaniness}
            onChange={this.handleChange}
          />

          <p>Privacy Level</p>
          <StyledInput placeholder='1-5'
            type="number" min="1" max="5"
            name='privacy_level'
            value={this.state.updatedRating.privacy_level}
            onChange={this.handleChange}
          />

          <p>Comment</p>
          <textarea placeholder='Comment'
            name='comment'
            value={this.state.updatedRating.comment}
            onChange={this.handleChange}
          />

          <div>
            <input type='submit' value='Update' />
          </div>

        </form>
      </div>
    )
  }
}

const StyledInput = styled.input`
width: 50px;
`
