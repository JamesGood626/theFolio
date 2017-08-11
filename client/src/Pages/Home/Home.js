import React, { Component } from 'react'
import './home.css'
import HeroContent from './molecules/heroContent'
import IconRow from './organisms/iconRow'
import About from './organisms/about'
import Contact from './organisms/contact'


class Home extends Component {
  render() {
    return (
      <div>
        <HeroContent />
        <IconRow />
        <About />
        <Contact />
      </div>
    )
  }
}

export default Home