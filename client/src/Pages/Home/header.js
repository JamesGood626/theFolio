import React from 'react'
import styled from 'styled-components'


const P = styled.p`
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  font-size: 1.4rem;
  color: #0c0c0c;

  @media (min-width: 440px) {
    font-size: 2.6rem;
  }

  @media (min-width: 742px) {
    font-size: 3rem;
  }
`

const Header = (props) => {
  return (
      <P>{ props.children }</P>
  )
}

export default Header


