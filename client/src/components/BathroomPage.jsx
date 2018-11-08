import React, { Component } from 'react'
import axios from 'axios'
import RatingsList from './shared_components/RatingsList';


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
    user: {},
    ratings: []
  }

  getBathroom = async () => {
    const response = await axios.get(`/api/bathrooms/${this.props.match.params.bathroomId}`)
    console.log(response)
    return response.data
  }

  aggregateState = (response) => {
    this.setState({ bathroom: response[0], ratings: response[1], users: response[2] })
  }

  componentDidMount = async () => {
    const response = await this.getBathroom()
    this.aggregateState(response)
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
      <RatingsList ratings={this.state.ratings} />


      </div>
    )
  }
}
