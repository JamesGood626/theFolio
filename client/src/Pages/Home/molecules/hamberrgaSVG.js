import React, { Component } from 'react'
import { toggleMenu } from '../../../actions'
import { connect } from 'react-redux'
import { TweenMax, TimelineMax } from 'gsap'

class hamberrgaSVG extends Component {
  constructor(props) {
    super(props)
    
    this.animateMenu = this.animateMenu.bind(this)
  }
  
  componentDidMount() {
    this.tl = new TimelineMax({ paused: true })
    this.tl.add( TweenMax.to(this.bar1, .5, {svgOrigin: "40 0", y: 20, rotation: "-=310"}) )
    this.tl.add( TweenMax.to(this.bar2, .2, {opacity: 0, rotation: 360}), "-=0.5" )
    this.tl.add( TweenMax.to(this.bar3, .5, { svgOrigin: "15 5", x: -15, y: 12,  rotation: 310}), "-=0.5" )
  }
  
  animateMenu() {    
    // console.log('In animateMenu before tl.play and tl.reverse: ' + this.props.toggle)
    if(this.props.toggle === false) { 
      this.tl.play()
    }
    else {
      this.tl.reverse()
    }
    
    this.props.toggleMenu(this.props.toggle)
  }
    
  render() {
    return (
      <div onClick={ this.animateMenu } className="svg-box">
        <svg xmlns="http://www.w3.org/2000/svg" className="svg-view" width="180" height="140" viewBox="-60 -60 180 140"> 
          <g id="Layer_2" data-name="Layer 2">
            <g className="hamberrga" id="Layer_1-2" data-name="Layer 1"> 
              <g id="bar-1" ref={bar1 => this.bar1 = bar1}>
                <polygon className="hamberrga" points="4.11 0.5 73.01 0.5 70.86 5.88 0.88 5.88 4.11 0.5"/> 
              </g>
              <g id="bar-2" ref={bar2 => this.bar2 = bar2} >
                <polygon className="hamberrga" points="11 17.09 68.38 17.09 66.59 22.6 8.31 22.6 11 17.09"/>
              </g>
              <g id="bar-3" ref={bar3 => this.bar3 = bar3}>
                <polygon className="hamberrga" points="4.11 33.41 73.01 33.41 70.86 38.8 0.88 38.8 4.11 33.41"/>
              </g>  
            </g>
          </g>
        </svg>
      </div>    
    )
  }
}

function mapStateToProps({ toggle }) {
  return { toggle }
}

export default connect(mapStateToProps, { toggleMenu })(hamberrgaSVG)