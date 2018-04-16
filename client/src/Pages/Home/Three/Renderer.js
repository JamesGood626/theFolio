import React, { Component } from 'react'
import { WebGLRenderer } from 'three'
import Scene from './Scene'
import Camera from './Camera'
import Lights from './Lights'
import Logo from './Logo'



class Renderer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      camera: null,
      scene: null,
      mouseX: 0,
      mouseY: 0,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      windowHalfX: (window.innerWidth/2),
      windowHalfY: (window.innerHeight/2)
    }

    this.renderer = new WebGLRenderer({ antialias: true })

    this.animate = this.animate.bind(this)
    this.threeRender = this.threeRender.bind(this)
    this.getCamera = this.getCamera.bind(this)
    this.getScene = this.getScene.bind(this)
    this.isTouchDevice = this.isTouchDevice.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)
    this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this)
  }


  componentDidMount() {
    // ComponentDidMount won't fire until the scene has been retrieved by this.getScene
    // The set timeout ensures that the model is loaded before loader is removed.
    setTimeout(this.props.toggleLoader, 2500)
    let { screenWidth, screenHeight } = this.state
    let { renderer } = this
    document.body.appendChild(this.container)

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(screenWidth, screenHeight)
    renderer.domElement.style.position = "relative"
    this.container.appendChild(renderer.domElement)

    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.shadowMap.enabled = true;

    window.addEventListener('resize', this.onWindowResize, false)
    document.addEventListener('mousemove', this.onDocumentMouseMove, false)
  }


  componentWillUnmount() {
    let { renderer } = this
    document.body.removeChild(this.container)

    cancelAnimationFrame(this.animationLoop)
    window.removeEventListener('resize', this.onWindowResize, false)
    document.removeEventListener('mousemove', this.onDocumentMouseMove, false)


    renderer.dispose()
    renderer.forceContextLoss()
    renderer.context = undefined
    renderer.domElement = undefined
  }
  
  // This allows the component to update only on initial load to accomdate
  // Fetching of THREE scene and camera object references
  // After that, all setStates on mouseMove won't trigger a re-render
  // This will do for now, but I may need to refactor later.
  shouldComponentUpdate() {
    let { state } = this

    if((state.camera && state.scene) != null) {
      return false
    }
    else {
      return true
    }
  }


  componentDidUpdate() {
    let { camera, scene } = this.state
  
    camera.lookAt( scene.position )
    this.renderer.render(scene, camera)
    this.animate()
  }


  animate() {
    let { animate, threeRender } = this

    this.animationLoop = requestAnimationFrame(animate)
    threeRender()
  }


  threeRender() {
    let { renderer } = this
    let { camera, scene, mouseX, mouseY } = this.state

    if(this.isTouchDevice()) {
      if(camera.position) {
        let timer = Date.now() * 0.0005

        camera.position.x = Math.sin(timer) * 120 * Math.cos(timer)
        camera.position.z = Math.sin(timer) * 120 * Math.sin(timer)

        camera.lookAt( scene.position )
      }
    }

    camera.position.x += (mouseX/16 - camera.position.x) * .10
    camera.position.y += (-mouseY/16 - camera.position.y) * .10
    camera.lookAt(scene.position)
    renderer.render(scene, camera)
  }


  getCamera(prop) {
    this.setState(state => ({ ...state, camera: prop }))
  }


  getScene(prop) {
    this.setState(state => ({ ...state, scene: prop }))
  }


  isTouchDevice() {
    return (('ontouchstart' in window)
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0));
  }


  onDocumentMouseMove( event ) {
    let { windowHalfX, windowHalfY } = this.state

    let newMouseX = (event.clientX - windowHalfX)
    let newMouseY = (event.clientY - windowHalfY)

    this.setState(state => ({ ...state, mouseX: newMouseX, mouseY: newMouseY }))
  }


  onWindowResize(event) {
    let { camera } = this.state
    let { renderer } = this

    let newHalfX = (window.innerWidth/2)
    let newHalfY = (window.innerHeight/2)
    let newScreenWidth = window.innerWidth
    let newScreenHeight = window.innerHeight

    if(newScreenWidth <= 600) {
      camera.position.z = 90
    }
    else if(newScreenWidth > 600 && newScreenWidth <= 1200) {
      camera.position.z = 70
    }
    else {
      camera.position.z = 50
    }

    camera.aspect = (newScreenWidth/newScreenHeight)
    camera.updateProjectionMatrix()
    renderer.setSize(newScreenWidth, newScreenHeight)

    this.setState(state => ({ 
      ...state, 
      screenWidth: newScreenWidth,
      screenHeight: newScreenHeight,
      windowHalfX: newHalfX, 
      windowHalfY: newHalfY 
    }))
  }


  render() {
    console.log("Here is the scene")
    console.log(this.state.scene)
    return (
      <div ref={el => this.container = el}>
        <Camera passUpProps={ this.getCamera }/>
        <Scene passUpProps={ this.getScene }>
          { scene => {
              return (
                <div>
                  <Lights scene={ scene }/> 
                  <Logo scene={ scene }/>
                </div>
              )
            } 
          }
        </Scene>
      </div>
    )
  }
}

export default Renderer


// Just to quickly Recap what's going on here.
// 1. Renderer is the top THREE component
// (Camera and Scene are it's immediate children, with Scene having Lights and Cube as children)
// 2. References to the THREE scene and camera objects(which can be used to update values on within Renderer)
// are being obtained via getCamera and getScene, which execute upon Scene and Camera's componentWillMount lifecycle method
// 3. The Scene component is passing the THREE scene object to it's children(Lights and Cube) via a render prop
// So that the children can make use of scene.add(light/mesh)

// That sums up everything thus far
// Next Steps:
// create screenWidth/Height, windowHalfX/Y, mouseX/Y state in renderer, so that they may be
// updated within Renderer via event listeners.

// All in all, this is quite a monolithic component, but it encapsulates the initialization of the
// THREE renderer and scene objects, runs the render/animate loop, and handles events
// The only thing I could see potentially moving out to separate components to server as a parent to this
// component, would be the eventListeners.
// Oh, and perhaps utilizing context to get the THREE scene and camera object references as opposed to
// passing getter functions to the respective components, triggering a second render upon load due to setState
// and therefore having to throw a if/else statement in the shouldComponentUpdate

// Ah, and perhaps refactor for more reusability (by passing props instead of setting camera.position.z = 50 for example within the child components) 
// in the future after the above has been settled