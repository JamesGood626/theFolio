import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineMax } from 'gsap'

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

class Loader extends Component {
  componentDidMount() {
    const tl = new TimelineMax({ delay: 0.4, repeat: -1 })

    tl.to(this.topPoly, 0.05, {opacity: 1})
      .to(this.rightPoly, 0.05, {opacity: 1})
      .to(this.topPoly, 0.05, {opacity: 0})
      .to(this.bottomPoly, 0.05, {opacity: 1})
      .to(this.rightPoly, 0.05, {opacity: 0})
      .to(this.leftPoly, 0.05, {opacity: 1})
      .to(this.bottomPoly, 0.05, {opacity: 0})
      .to(this.leftPoly, 0.05, {opacity: 0})
  }

  render() {
    return (
      <Div id="blueOverlay" className="overlay">
        <svg height="170" width="200">
          <polygon points="100,0 130,40 100,80 70,40" style={{'opacity': '0'}} fill="#f2f2f2" ref={x => this.topPoly = x}/>
          <polygon points="135,45 165,85 135,125 105,85" style={{'opacity': '0'}} fill="#f2f2f2" ref={x => this.rightPoly = x}/>
          <polygon points="65,45 95,85 65,125 35,85" style={{'opacity': '0'}} fill="#f2f2f2" ref={x => this.leftPoly = x}/>
          <polygon points="100,90 130,130 100,170 70,130" style={{'opacity': '0'}} fill="#f2f2f2" ref={x => this.bottomPoly = x}/>
        </svg>
      </Div>
    )
  }
}

export default Loader