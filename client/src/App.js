import React, { Component } from 'react'
// import { findDOMNode } from 'react-dom'
import { withRouter } from 'react-router'
import { Route, Switch  } from 'react-router-dom'
// import ReactTransitionGroup from 'react-addons-transition-group'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { TransitionGroup, Transition } from 'react-transition-group'
import { TweenMax } from 'gsap'
import styled from 'styled-components'

import Navbar from './Pages/Navbar'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact'
import About from './Pages/About'
import BlogPost from './Pages/Blog/BlogPost'

//Somehow z-index 1000 fixed the overlapping of the navbar
const Section = styled.section`
  position: absolute;
  z-index: 1000;
  width: 100vw;
  padding-bottom: 2rem;
`

// Okay, so this.props.history.length is a reliable source for determining the
// size of the routing stack
// As well as this.props.history.action giving PUSH or POP on each page navigation
// Either of those could feasibly be used for manipulating the transition animation
// On second consideration, length isn't declining on each POP action, so perhaps just make use 
// of action to determine whether navigation is forwards or backwards
class App extends Component {
  constructor(props) {
    super(props)
    console.log("App's props")
    console.log(this.props.location)
    this.enterTransition = this.enterTransition.bind(this)
    this.leaveTransition = this.leaveTransition.bind(this)
  }

  // action ftw, successfully manages forward and backward routing navigation animations.
  enterTransition(node) {
    let { action } = this.props.history

    if (action === 'PUSH') {
      TweenMax.fromTo(node, 0.5, {x: -100, opacity: 0}, {x: 0, opacity: 1})
    }
    else {
      TweenMax.fromTo(node, 0.5, {x: 100, opacity: 0}, {x: 0, opacity: 1})
    }
  }

  leaveTransition(node) {
    let { action } = this.props.history

    if (action === 'PUSH') {
      TweenMax.fromTo(node, .3, {x: 0, opacity: 1}, {x: 100, opacity: 0})
    }
    else {
      TweenMax.fromTo(node, .3, {x: 0, opacity: 1}, {x: -100, opacity: 0})
    }
  }


  // The { ...route } object spread is an interesting use case
  // Slightly resembles the example in react-router's docs for Route's render prop
  // Annnd as of right now, wrapping Switch in a transition group doesn't trigger
  // componentWillAppear at all for the routes
  // The github example is making use of CSSTransitionGroup
  render() {
    // More than likely going to have to move this to redux store to keep track of active link
    // Or handle this by using App component's state.
    let { location } = this.props
    const navItems = [{name: 'Home', path: '/'}, {name: 'About', path: '/about'}, {name: 'Blog', path: '/blog'}, {name: 'Contact', path: '/contact'}]
    return (
      <div>
        <Navbar location={ location } menuItems={ navItems }/>
        <TransitionGroup>
          <Transition
            in={ this.props.in }
            key={ location.pathname }
            timeout={ 500 }
            mountOnEnter={ true }
            unountOnExit={ true } 
            onEnter={ this.enterTransition }
            onExit={ this.leaveTransition }  
          >
            <Section> 
              <Switch location={ location }>
                <Route exact path="/about" component={ About }/>
                <Route exact path="/blog" component={ Blog }/>
                <Route exact path="/contact" component={ Contact }/>
                <Route exact path="/blog/:postId" component={ BlogPost }/>
              </Switch>
            </Section> 
          </Transition>
        </TransitionGroup> 
      </div> 
    )
  }
}

export default withRouter(App)

// Okay, just for documentation purposes, I'll list a few of the issues I'm having
// This is with App being exported withRouter(App) and then rendered in index.js with
// Provider => BrowserRouter => withRouter(App) parent child hierarchy

// 1. Trying to use react-transition-group w/ or w/ out plus
//    When I wrap the Switch, no componentWillAppear/Leave lifecycle hooks are added.
//    -The only thing I can think of to remedy this is to create an HOC that wraps the
//    -About, Contact, etc components in TransitionGroup, and then use that HOC in the
//    -Route's component prop
//    -However, I believe that won't remedy the main problem I'm having, which is to ensure
//    -That the unmounting component stays visible while it's transitioning out and the
//    -new component is transitioning in.

// 2. Wrapping Switch in ReactCSSTransitionGroup animates components in, but doesn't
//    Satisfactorily animate them with the requirements delineated in the last few lines
//    listed above.
//    -This leads to be believe that I'll need to make use of Route's children func
//    -As React Router's docs specifiy that it could be useful for animation,
//    -match's usage inside the children func is still somewhat elusive to me,
//    -but logging it out for About I get an object that contains
//    {path: "/about", url:"/about", isExact: true, params: (contains a __proto__ object)}


// I need to step away from this and learn the History API and come back later
