import React, { Component } from 'react'
import styled from 'styled-components'

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledLogo src="/images/il_570xN.1533398213_ha0f.jpg" />
        <StyledTitle >
          Constanza!
      </StyledTitle >
      </StyledHeader>
    )
  }
}

const StyledLogo = styled.img`
  height: 55px;
`
const StyledTitle = styled.div`
  font-size: 50px;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`
