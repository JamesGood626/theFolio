import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { TweenMax } from 'gsap'


class TransitionOverlay extends Component {
  componentDidMount() {
    if (this.props.action === 'PUSH') {
      TweenMax.staggerFromTo([this.blackOverlay, this.whiteOverlay, this.blueOverlay], 1.8, {x: "-120%"}, {x: "150%"}, 0.3)
    }
    else {
      TweenMax.staggerFromTo([this.blueOverlay, this.whiteOverlay, this.blackOverlay], 1.8, {x: "120%"}, {x: "-150%"}, 0.3)
    }
  }
  
  render() {
    const { action } = this.props
    const higherZ = {
      'zIndex': '4000'
    }
    const lowerZ = {
      'zIndex': '3000'
    }
    return [
      <div id="blackOverlay" 
           style={ action ==='PUSH' ? lowerZ : higherZ } 
           className="overlay" key="1" 
           ref={x => this.blackOverlay = x} />,
      <div id="whiteOverlay" 
           className="overlay" 
           key="2" 
           ref={x => this.whiteOverlay = x} />,
      <div id="blueOverlay" 
           style={ action ==='PUSH' ? higherZ : lowerZ } 
           className="overlay" 
           key="3" 
           ref={x => this.blueOverlay = x} />
    ]
  }
}

export default TransitionOverlay