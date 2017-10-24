import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


// There's some slight buggyness whenever I resize the screen multiple times on the
// google chrome phone simulation, but whenever one loads from scratch it looks just fine.
// May be due to the canvas resize event handlers that are on the attached to the body.
// Perhaps I'll fix this in the future.

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 3rem;
  width: 5.5rem;
  font-size: 2rem;
  position: absolute;
  z-index: 100;
  color: #d0ccd0;

  @media (min-width: 742px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 5rem;
    width: 7rem;
    font-size: 3rem;
    position: absolute;
    z-index: 100;
  }

  &:hover {
    color: #35e0f0;
  }
`

const TopLeft = Div.extend`
  color: #274156;
  top: 0;
  left: 0;
  margin-left: -.5rem;
`

const TopRight = Div.extend`
  top: 0;
  right: 0;

  @media (min-width: 742px) {
    margin-right: 1rem;
  }
`

const BottomLeft = Div.extend`
  bottom: 0;
  left: 0;
  margin-left: -.5rem;
`

const BottomRight = Div.extend`
  bottom: 0;
  right: 0;
  margin-right: .5rem;

  @media (min-width: 742px) {
    margin-right: 1rem;
  }
`


const HomeNav = () => {
    return (
        <div>
            <Link style={{ 'textDecoration': 'none' }} to="/"><TopLeft>Home</TopLeft></Link>
            <Link style={{ 'textDecoration': 'none' }} to="/about"><TopRight>About</TopRight></Link>
            <Link style={{ 'textDecoration': 'none' }} to="/blog"><BottomLeft>Blog</BottomLeft></Link>
            <Link style={{ 'textDecoration': 'none' }} to="/contact"><BottomRight>Contact</BottomRight></Link>
        </div>
    )
}

export default HomeNav