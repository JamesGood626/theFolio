import React, { Component } from 'react'
import { connect } from 'react-redux'
import './home.css'
import { toggleMenu } from '../../actions'
import Modal from './organisms/modal'
import HeroContent from './molecules/heroContent'
import IconRow from './organisms/iconRow'
import About from './organisms/about'
import Contact from './organisms/contact'


class Home extends Component {
  // This is set to ensure that the modal menu circle item isn't expanded upon going back
  componentWillUnmount() {
    this.props.toggleMenu(this.props.toggle)   
  }

  render() {
    return (
      <div>
        { this.props.toggle && <Modal /> }
        <HeroContent toggleBool={ this.props.toggle } />
        <IconRow toggleBool={ this.props.toggle }/>
        <About />
        <Contact />
      </div>
    )
  }
}

function mapStateToProps({ toggle }) {
  return { toggle }
}

export default connect(mapStateToProps, { toggleMenu })(Home)


