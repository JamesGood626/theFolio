import React, { Component } from 'react'
// import GSAP from 'gsap'

class AnimatedWrapper extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount(){
    console.log(this.props.children)
    // Okay, so props is available on all of the props. children
    // You can get access to the path (i.e. "/" or "/about")
    // The wrapper is also wrapped in the Router, so location should be available within this component
    // I could do that method, or maybe make use of the match component, and make use of refs to hook into
    // a gsap animation.

    // Rethinking the above
    // Upon reading the docs it would appear as though the match object is only available to route components.
    // As such, so the idea is to have the animated component match ALL "/" paths by omitting exact before the
    // path. THEN within the AnimatedWrapper will be a new route configuration, with all of the web pages
    // routes.

    // The idea here is that I should then be able to assign the result of the match
  }

  render() {
    return <div>{ this.props.children }</div>
  }
}

export default AnimatedWrapper

