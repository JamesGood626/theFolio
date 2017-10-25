import React, { Component } from 'react'
import { PerspectiveCamera } from 'three'


class Camera extends Component {
  constructor(props) {
    super(props)
    
    this.camera = new PerspectiveCamera(20, window.innerWidth/window.innerHeight, 1, 1000)  
  }

  //Originally had camera.posion.z set to 80 for smaller screens and 50 for larger
  // but doing that makes vertical and horzontal scroll
  // I think resizing the model accordingly would be better

  componentWillMount() {
    if(window.innerWidth <= 600) {
      this.camera.position.z = 90
    }
    else if(window.innerWidth > 600 && window.innerWidth <= 1200) {
      this.camera.position.z = 70
    }
    else {
      this.camera.position.z = 50
    }
    
    this.props.passUpProps(this.camera)
  }

  shouldComponentUpdate() {
    return false
  }

  componentWillUnmount() {
    this.camera = null
  }

  render() {
    return <div></div>
  }
}

export default Camera
