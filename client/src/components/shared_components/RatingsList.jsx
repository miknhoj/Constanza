import React, { Component } from 'react'
import Rating from './Rating'

export default class RatingsList extends Component {
  render() {
    const ratingsList = this.props.ratings.map((rating, i) => {
      return <Rating key={i} rating={rating} />
    })
    return (
      <div>
        {ratingsList}
      </div>
    )
  }
}
