import React, { Component } from 'react'
import axios from 'axios'


export default class BathroomPage extends Component {
  state = {
    bathroom: {
      location_name: '',
      street: '',
      city: '',
      zip: '',
      baby_changing: false,
      sinks: '',
    },
    ratings: []
  }

  getBathroom = async () => {
    const response = await axios.get(`/api/bathrooms/${this.props.match.params.bathroomId}`)
    console.log(response)
    return response.data

  }

  componentDidMount = async () => {
    const response = await this.getBathroom()
    this.setState(response)
  }


  render() {
    return (
      <div>
        Restroom Page


      </div>
    )
  }
}
