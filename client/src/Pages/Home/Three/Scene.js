import React, { Component } from 'react'
// I'm gonna have to boil this down to see what actually needs to be imported, but later...
import { Scene, Color } from 'three'

// May consider breaking out window screen resize into a boundary component
// The reason why I'm considering this at the moment, is because I still have to figure
// out where the THREE component tree re-render will stop at.
// Scene and camera both need to re-render, and as such I don't think storing
// the values for the resized window screen inside of scene is appropriate.
// This will be flushed out...

class ThreeScene extends Component {
  constructor(props) {
    super(props)

    this.scene = new Scene()
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight

    this.onWindowResize = this.onWindowResize.bind(this)
  }

  componentWillMount() {
    this.scene.background = new Color(0xfbfcff)
    this.props.passUpProps(this.scene)
  }

  shouldComponentUpdate() {
    return false
  }

  componentWillUnmount() {
    let { scene } = this
    
    //It's weird, three children in the array, yet after this is executed,
    // pointLight remains in the array, did scene.remove(pointLight) in Light's
    // componentWillUnmount to mitigate this, but strange...
    scene.children.map(child => scene.remove(child))
  }

  onWindowResize( event ) {
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
  }

  render() {
    return <div>{this.props.children(this.scene)}</div>
  }
}



export default ThreeScene;
