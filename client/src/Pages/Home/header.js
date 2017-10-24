import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // width: 20rem;
  // height: 20rem;
  position: absolute;
  z-index: 99;
  
  top: 0;
  bottom: 0;
  left:0;
  right:0;
  margin: auto auto 0 auto;
  width:50%;
  height: 30%;
`

const P = styled.p`
  font-family: 'Tangerine', cursive;
  font-size: 2.4rem;
  color: #35e0f0;

  @media (min-width: 742px) {
    font-size: 4rem;
  }
`

const Header = () => {
    return (
      <Div>
        <P>React Developer</P>
      </Div>
    )
}

export default Header


