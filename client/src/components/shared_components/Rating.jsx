import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class Rating extends Component {
  render() {
    const rating = this.props.rating
    return (
      <div>
        <div>
          <div>Username: {rating.user_id}</div>
          <div>Rating:{rating.rating}</div>
          <div>Cleaniness: {rating.cleaniness}</div>
          <div>Comment: {rating.comment}</div>
        </div>
      </div>
    )
  }
}