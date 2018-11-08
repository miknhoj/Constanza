import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

export default class NewRatingPage extends Component {
  state = {
    newRating: {
      rating: '',
      cleaniness: '',
      privacy_level: '',
      comment: ''
    },
    bathroom: {
      location_name: ''
    },
    redirect: false,
  }

  getBathroom = async () => {
    const response = await axios.get(`/api/bathrooms/${this.props.match.params.bathroomId}`)
    this.setState({ bathroom: response.data[0] })
  }

  componentDidMount = async () => {
    this.getBathroom()
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`/api/bathrooms/${this.props.match.params.bathroomId}/ratings`, {"form_data": this.state.newRating})
    this.setState({
      rating: {
        rating: '',
        cleaniness: '',
        privacy_level: '',
        comment: '',
        bathroom_id: this.props.match.params.bathroomId
      }
    })
    this.setState({ redirect: true })
  }

  handleChange = (e) => {
    const newRating = { ...this.state.newRating }
    newRating[e.target.name] = e.target.value
    this.setState({ newRating })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/bathrooms/${this.props.match.params.bathroomId}`} />
    }
    return (
      <div>
        New Rating
        <form onSubmit={this.handleSubmit} >
          <h1>New rating for {this.state.bathroom.location_name}</h1>
          <p>Rating</p>
          <StyledInput placeholder='1-5'
            type="number" min="1" max="5"
            name='rating'
            value={this.state.newRating.rating}
            onChange={this.handleChange}
          />

          <p>Cleaniness</p>
          <StyledInput placeholder='1-5'
            type="number" min="1" max="5"
            name='cleaniness'
            value={this.state.newRating.cleaniness}
            onChange={this.handleChange}
          />

          <p>Privacy Level</p>
          <StyledInput placeholder='1-5'
            type="number" min="1" max="5"
            name='privacy_level'
            value={this.state.newRating.privacy_level}
            onChange={this.handleChange}
          />

          <p>Comment</p>
          <textarea placeholder='Comment'
            name='comment'
            value={this.state.newRating.comment}
            onChange={this.handleChange}
          />

          <div>
            <input type='submit' value='Rate' />
          </div>

        </form>
      </div>
    )
  }
}

const StyledInput= styled.input`
width: 50px;
`
