import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleMenu } from '../../actions'
import HomeNav from './homeNav'
import Renderer from './Three/Renderer'
import './home.css'


class Home extends Component {
  // componentWillUnmount() {
  //   this.props.toggleMenu(this.props.toggle)   
  // }

  render() {
    return (
      <div>
        <HomeNav/>
        <Renderer/>
      </div>
    )
  }
}

function mapStateToProps({ toggle }) {
  return { toggle }
}

export default connect(mapStateToProps, { toggleMenu })(Home)


