import React, { Component } from 'react'
import axios from 'axios';

export default class Rating extends Component {
  // state = {
  //   bathroom: {}
  // }

  // getBathroom = async () => {
  //   const response = await axios.get(`/api/bathrooms/${this.props.rating.bathroom_id}`)
  //   console.log(response)
  //   this.setState({bathroom: response})
  // }

  handleDelete = async () => {
    await axios.delete(`/api/bathrooms/${this.props.rating.bathroom_id}/ratings/${this.props.rating.id}`)
    await this.props.aggregateState()
  }
  
  render() {
    const rating = this.props.rating
    return (
      <div>
        <div>
          <div>Username: {rating.user_id}</div>
          <div>Rating:{rating.rating}</div>
          <div>Cleaniness: {rating.cleaniness}</div>
          <div>Privacy Level: {rating.privacy_level}</div>
          <div>Comment: {rating.comment}</div>
          <button>Edit</button>
          <button onClick={this.handleDelete}>Remove</button>
        </div>
      </div>
    )
  }
}
