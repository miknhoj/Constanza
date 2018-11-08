import React, { Component } from 'react'
import axios from 'axios'
import RatingsList from './shared_components/RatingsList';
import {Link} from 'react-router-dom'


export default class BathroomPage extends Component {
  state = {
    bathroom: {
      location_name: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      baby_changing: '',
      sinks: '',
    },
    ratings: []
  }

  getBathroom = async () => {
    const response = await axios.get(`/api/bathrooms/${this.props.match.params.bathroomId}`)
    return response.data
  }

  getUsers = async () => {
    const users = await axios.get(`/api/users`)
    return users.data
  }

  aggregateState = (response, users) => {
    this.setState({ bathroom: response[0], ratings: response[1], users: users})
  }

  componentDidMount = async () => {
    const response = await this.getBathroom()
    const users = await this.getUsers()
    this.aggregateState(response, users)
  }


  render() {
    const bathroom = this.state.bathroom
    return (
      <div>
        Restroom Page
        <h1>{bathroom.location_name}</h1>

        <h3>{bathroom.street}<br></br>{bathroom.city}, {bathroom.state} {bathroom.zip}</h3>
        <div>
          Baby Changing Station: {bathroom.baby_changing}
        </div>
        <div>
          Sinks: {bathroom.sinks}
        </div>
        <Link to={`/bathrooms/${this.props.match.params.bathroomId}/ratings/new`}><button>Rate</button></Link>
      <RatingsList ratings={this.state.ratings} users={this.state.users} />


      </div>
    )
  }
}
