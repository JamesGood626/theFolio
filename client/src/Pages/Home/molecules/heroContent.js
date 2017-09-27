import React, { Component } from 'react'
import HamberrgaSVG from './hamberrgaSVG'

class HeroContent extends Component {  
  render() {
    const styled = {
      filter: 'blur(20px)'
    }

    return (
      <div>
        <div className="svgPositionAide">
          <HamberrgaSVG />
        </div>
        <div className="home__header-container" style={ this.props.toggleBool ? styled : null }>
          <div className="home__header-content">
            <h1 className="home__main-header">James Good</h1>
            <div className="home__separation-line"></div>
            <h2 className="home__secondary-header">Web Developer</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroContent