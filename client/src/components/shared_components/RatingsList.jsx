import React, { Component } from 'react'
import Rating from './Rating'
import styled from 'styled-components'

const StyledRating = styled.div`
  text-decoration: none;
`
const StyledDiv = styled.div`
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: #DCDCDC;	
`


export default class RatingsList extends Component {
  render() {
    const ratingsList = this.props.ratings.map((rating, i) => {
      return (
        <StyledDiv >
          <Rating key={i} rating={rating} ratings={this.props.ratings} aggregateState={this.props.aggregateState} />
        </StyledDiv >
      )
    })
    return (
      <StyledRating>
        {ratingsList}
      </StyledRating>
    )
  }
}
