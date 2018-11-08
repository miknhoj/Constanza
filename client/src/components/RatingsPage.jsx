import React, { Component } from 'react'
import axios from 'axios'

export default class RatingsPage extends Component {
  state = {
    rating: {}
  }

  getRating = async () => {
    let rating = {...this.state.rating}
    const response = await axios.get(`/api/bat`)
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
