import React, { Component } from 'react'
import { DirectionalLight, PointLight } from 'three'


class Lights extends Component {
  constructor(props) {
    super(props)

    this.directionalLight = new DirectionalLight(0x4888A2)
    this.pointLight = new PointLight(0x17BEBB)
  }


  componentWillMount() {
<<<<<<< HEAD
<<<<<<< HEAD
    let { directionalLight, pointLight } = this;
    directionalLight.position.z = 300;
    directionalLight.position.y = -100;
    directionalLight.position.x = 10;
    directionalLight.intensity = 0.4;
=======
=======
>>>>>>> parent of 87f7400... Had to set height auto on project's section container.
    let { directionalLight, pointLight } = this

    directionalLight.position.z = 300
    directionalLight.position.y = -100
    directionalLight.position.x = 10
    directionalLight.intensity = 0.4
<<<<<<< HEAD
>>>>>>> parent of 87f7400... Had to set height auto on project's section container.
=======
>>>>>>> parent of 87f7400... Had to set height auto on project's section container.

    pointLight.position.y = 0
    pointLight.position.x = 0
    pointLight.position.z = 400
    pointLight.intensity = 0.7
  }

  shouldComponentUpdate() {
    return false
  }

  componentDidMount() {
    let { scene } = this.props
    let { directionalLight, pointLight } = this

    scene.add(directionalLight)
    scene.add(pointLight)
  }

  componentWillUnmount() {
    let { scene } = this.props
    let { directionalLight, pointLight } = this
    
    scene.remove(pointLight)
  }

  render() {
    return <div></div>
  }
}

export default Lights
