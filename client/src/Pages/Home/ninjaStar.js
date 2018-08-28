<<<<<<< HEAD
import React, { Component } from "react";
import { TweenMax } from "gsap";
=======
import React, { Component } from 'react'
import styled from 'styled-components'
import { TweenMax } from 'gsap'

>>>>>>> parent of 87f7400... Had to set height auto on project's section container.

class NinjaStar extends Component {
  componentDidMount = () => {
    TweenMax.set(this.star, {transformOrigin: 'center', rotation: 46.5})
  }

  rotateStarAndToggle = () => {
    if(!this.props.modalOpen) {
      TweenMax.to(this.star, 0.5, {rotation:181})
    }
    else {
      TweenMax.to(this.star, 0.5, {rotation:46.5})
    }
    this.props.toggleModal()
  }

  render() {
    return(
      <svg 
        className="ninjaStar"
        onClick={ this.rotateStarAndToggle } 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="-76.5 0 400 253.01"
      >
        <defs>
          <title>NinjaStarMenu</title>
          <mask id="starMask">
            <path fill="#fff" d="M748.5,253.5s-32,83-38,95c-26,0-46,42,1,53,16,27,47,96,47,96s-70-28-100-42c4-33-51-35-52,2-31,16-97,47-97,47s36-89,43-98c33-4,33-52-3-53l-44-94,95,39c0,33,54,35,53,2Z" transform="translate(-504.5 -252.48)"/>
            <circle fill="#000" cx="125.5" cy="125.52" r="15.5"/>
          </mask>
        </defs>
        <g id="maskedStar" mask="url(#starMask)" ref={ x => this.star = x }>
          <path d="M748.5,253.5s-32,83-38,95c-26,0-46,42,1,53,16,27,47,96,47,96s-70-28-100-42c4-33-51-35-52,2-31,16-97,47-97,47s36-89,43-98c33-4,33-52-3-53l-44-94,95,39c0,33,54,35,53,2Z" transform="translate(-504.5 -252.48)"/>
        </g>
      </svg>
    )
  }
}

export default NinjaStar