import React, { Component } from 'react'
import Rating from './Rating'
import styled from 'styled-components'

const StyledRating = styled.div`
  text-decoration: none;
`


export default class RatingsList extends Component {
  render() {
    const ratingsList = this.props.ratings.map((rating, i) => {
      return <Rating key={i} rating={rating} ratings={this.props.ratings} aggregateState={this.props.aggregateState} />
    })
    return (
      <StyledRating>
        {ratingsList}
      </StyledRating>
    )
  }
}
