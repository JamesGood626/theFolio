import React, { Component } from "react";
import { Scene, Color } from "three";

class ThreeScene extends Component {
  constructor(props) {
    super(props);
    this.scene = new Scene();
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    this.onWindowResize = this.onWindowResize.bind(this);
  }

  componentWillMount() {
    this.scene.background = new Color(0xfbfcff);
    this.props.passUpProps(this.scene);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    let { scene } = this;

    // It's weird, three children in the array, yet after this is executed,
    // pointLight remains in the array, did scene.remove(pointLight) in Light's
    // componentWillUnmount to mitigate this, but strange...
    scene.children.map(child => scene.remove(child));
  }

  onWindowResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  render() {
    return <div>{this.props.children(this.scene)}</div>;
  }
}

export default ThreeScene;
