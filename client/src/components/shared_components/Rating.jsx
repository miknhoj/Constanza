import React, { Component } from 'react'
import axios from 'axios';

export default class Rating extends Component {

  handleDelete = async () => {
    await axios.delete(`/api/bathrooms/${this.props.rating.bathroom_id}/ratings/${this.props.rating.id}`)
    await this.props.getBathroom()
  }
  
  render() {
    const rating = this.props.rating
    return (
      <div>
        <div>
          <div>Username: {rating.user_id}</div>
          <div>Rating:{rating.rating}</div>
          <div>Cleaniness: {rating.cleaniness}</div>
          <div>Comment: {rating.comment}</div>
          <button>Edit</button>
          <button onClick={this.handleDelete}>Remove</button>
        </div>
      </div>
    )
  }
}
