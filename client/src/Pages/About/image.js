import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  margin-bottom 1rem;

  background: url(${(props) => props.image.three }) no-repeat;

  @media (min-width: 472px) {
    background: url(${(props) => props.image.four }) no-repeat;
  }

  @media (min-width: 742px) {
    height: 100vh;
    width: 80%;
    background: url(${(props) => props.image.six }) no-repeat;
  }
  
  @media (min-width: 1100px) {
    background: url(${(props) => props.image.eight }) no-repeat;
  }
  
`

const Image = (props) => {
  return <Div passStyle={ props.style } image={ props.image }>{ props.children }</Div>
}

export default Image