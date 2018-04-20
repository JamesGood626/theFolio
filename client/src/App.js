import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Route, Switch  } from 'react-router-dom'
import { TransitionGroup, Transition } from 'react-transition-group'
import { TweenMax } from 'gsap'
import styled from 'styled-components'

import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import About from './Pages/About'
import BlogPost from './Pages/Blog/BlogPost'

import TransitionOverlay from './UtilComponents/TransitionOverlay'


const Section = styled.section`
  position: absolute;
  z-index: 1000;
  height: 100%;
  width: 100vw;
`

// this.props.history.action provides PUSH or POP on each page navigation
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      transitionOverlayActive: false,
      precursorDeactivateTransitionOverlay: false,
      navVisible: true 
    }

    this.toggleNav = this.toggleNav.bind(this)
    this.activateTransitionOverlay = this.activateTransitionOverlay.bind(this)
    this.deactivatePrecursorTransitionOverlay = this.deactivatePrecursorTransitionOverlay.bind(this)
    this.deactivateTransitionOverlay = this.deactivateTransitionOverlay.bind(this)
    this.enterTransition = this.enterTransition.bind(this)
    // this.leaveTransition = this.leaveTransition.bind(this)
  }

  componentDidMount() {
    if (this.props.location.pathname === '/') {
      this.toggleNav()
    }
    if(this.containerDiv) {
      this.containerDiv.addEventListener('wheel', this.preventScroll)
      this.containerDiv.addEventListener('touchstart', this.preventScroll)
    }
  }
  
  componentWillUnmount() {
    this.containerDiv.removeEventListener('wheel', this.preventScroll)
    this.containerDiv.removeEventListener('touchstart', this.preventScroll)
  }

  toggleNav() {
    this.setState((prevState, state) => ({
      navVisible: !prevState.navVisible
    }))
  }

  activateTransitionOverlay() {
    this.setState((prevState, state) => ({
      transitionOverlayActive: !prevState.transitionOverlayActive
    }))
    this.setState((prevState, state) => ({
      precursorTransitionOverlayActive: !prevState.precursorTransitionOverlayActive
    }))
    setTimeout(this.deactivatePrecursorTransitionOverlay, 1000)
    setTimeout(this.deactivateTransitionOverlay, 1800)
  }

  deactivateTransitionOverlay() {
    this.setState((prevState, state) => ({
      transitionOverlayActive: !prevState.transitionOverlayActive
    }))
  }

  // precursorTransitionOverlayActive is necessary to ensure the new transitioned page content will be
  // displayed before the transition animation finishes
  // Content from both routes will be visible upon transition Without setting displayNone on the Section
  deactivatePrecursorTransitionOverlay() {
    this.setState((prevState, state) => ({
      precursorTransitionOverlayActive: !prevState.precursorTransitionOverlayActive
    }))
  }

  enterTransition(node) {
    if (this.props.location.pathname === '/') {
      setTimeout(this.toggleNav, 1000)
    }
    if (this.props.location.pathname !== '/' && !this.state.navVisible) {
      setTimeout(this.toggleNav, 1000)
      if (document.body.style.overflowY != 'scroll') {
        document.body.style.overflowY = 'scroll'
      }
    }
    this.activateTransitionOverlay()
  }

  preventScroll = event => {
    if(this.state.transitionOverlayActive) {
      event.preventDefault()
    }
	}

  // leaveTransition(node) {
  //   console.log('LEAVE TRANSITION RUNNING')
  // }
  render() {
    const preventScroll = {
      'overflow': 'hidden',
      'position': 'absolute',
      'height': '100vh',
      'width': '100vw'
    }
    const containerDivStyle = {
      'height': '100%',
      'width': '100vw'
    }
    // const overflowScrolling = {
    //   'WebkitOverflowScrolling': 'touch'
    // }
    const displayNone = {
      // This display none is crucial for preventing premature visibility of mounting component.
      'display': 'none'
    }
    let { location } = this.props
    const { transitionOverlayActive, precursorTransitionOverlayActive, navVisible } = this.state
    const navItems = [{name: 'Home', path: '/'}, {name: 'About', path: '/about'}, {name: 'Blog', path: '/blog'}, {name: 'Contact', path: '/contact'}]
    return (
      <div style={ transitionOverlayActive ? preventScroll : containerDivStyle } ref={x => this.containerDiv = x}>
        <Navbar homeRouteStyle={ navVisible ? null : displayNone } location={ location } menuItems={ navItems }/>
        <TransitionGroup>
          <Transition
            in={ this.props.in }
            key={ location.pathname }
            timeout={{
              enter: 500,
              exit: 500,
            }}
            mountOnEnter={ false }
            unmountOnExit={ true } 
            onEnter={ this.enterTransition }
          >
            <Section style={ precursorTransitionOverlayActive ? displayNone : null }>
              <Switch location={ location }>
                <Route exact path="/" component={ Home }/>
                <Route exact path="/about" component={ About }/>
                <Route exact path="/blog" component={ Blog }/>
                <Route exact path="/contact" component={ Contact }/>
                <Route exact path="/blog/:postId" component={ BlogPost }/>
              </Switch>
            </Section>
          </Transition>
        </TransitionGroup>
        { transitionOverlayActive ? <TransitionOverlay action={ this.props.history.action }/> : null}
      </div> 
    )
  }
}

export default withRouter(App)
