<<<<<<< HEAD
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
=======
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { TweenMax } from 'gsap'

>>>>>>> parent of 87f7400... Had to set height auto on project's section container.

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10vh;
  height: 28rem;
  width: 100vw;
  max-width: 100%;

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
    const navItems = [{name: 'Home', path: '/'}, {name: 'About', path: '/about'}, {name: 'Projects', path: '/projects'}, {name: 'Contact', path: '/contact'}]
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
          <Link style={ navItemPositioning } to='/projects'>
            <Span>Projects</Span>
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