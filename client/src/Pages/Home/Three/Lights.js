import React, { Component } from "react";
import { DirectionalLight, PointLight } from "three";

class Lights extends Component {
  constructor(props) {
    super(props);

    this.directionalLight = new DirectionalLight(0x4888a2);
    this.pointLight = new PointLight(0x17bebb);
  }

  componentWillMount() {
    let { directionalLight, pointLight } = this;

    directionalLight.position.z = 300;
    directionalLight.position.y = -100;
    directionalLight.position.x = 10;
    directionalLight.intensity = 0.4;

    pointLight.position.y = 0;
    pointLight.position.x = 0;
    pointLight.position.z = 400;
    pointLight.intensity = 0.7;
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    let { scene } = this.props;
    let { directionalLight, pointLight } = this;

    scene.add(directionalLight);
    scene.add(pointLight);
  }

  componentWillUnmount() {
    let { scene } = this.props;
    let { pointLight } = this;

    scene.remove(pointLight);
  }

  render() {
    return <div />;
  }
}

export default Lights;
