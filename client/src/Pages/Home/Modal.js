import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { TweenMax } from 'gsap'


const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10vh;
  height: 28rem;
  width: 100vw;

  @media (min-width: 742px) {
    top: 20vh;
  }
`

const Span = styled.span`
  color: #f2f2f2;
  // font-family
  // font-sizes

  &:hover {
    color: #ddd;
  }
`


class Modal extends Component {
  // }
  render() {
    const navItems = [{name: 'Home', path: '/'}, {name: 'About', path: '/about'}, {name: 'Blog', path: '/blog'}, {name: 'Contact', path: '/contact'}]
    const activeLink = {
      'color': '#274156'
    }
    const navItemPositioning = {
      'textDecoration': 'none',
      'marginTop': '1.4rem',
      'marginBottom': '1.4rem'
    }
    return (
      <div className="overlay" ref={x => this.overlay = x}>
        <Div>
          <Link style={ navItemPositioning } to='/'>
            <Span style={ activeLink }>Home</Span>
          </Link>
          <Link style={ navItemPositioning } to='/about'>
            <Span>About</Span>
          </Link>
          <Link style={ navItemPositioning } to='/blog'>
            <Span>Blog</Span>
          </Link>
          <Link style={ navItemPositioning } to='/contact'>
            <Span>Contact</Span>
          </Link>
        </Div>
      </div>
    )
  }
}

export default Modal