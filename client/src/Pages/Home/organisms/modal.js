import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { TweenMax } from 'gsap'
import ModalMenuItem from '../molecules/modalMenuItem'
import FeatherIcon from '../../../Img/feather.svg'
import GithubIcon from '../../../Img/github.svg'


class Modal extends Component {
  constructor(props) {
    super(props)

    this.circleTransition = this.circleTransition.bind(this)
    
    this.state = {
      featherCircle: [],
      featherIcon: '',
      githubCircle: [],
      redirect: false
    }
  }

  componentDidMount() {
    document.body.classList.add('modal-open')
    // console.log(this.featherCircle) still had access to these here, so I set them to state,
    // console.log(this.githubCircle)  so that circleTransition can make reference to it. And it works...
    // console.log(this.featherIcon)
    this.setState({
      featherCircle: this.featherCircle,
      featherIcon: this.featherIcon,
      githubCircle: this.githubCircle
    }) 
  }

  componentWillUnmount() {
    document.body.classList.remove('modal-open')
  }

  circleTransition() {
    // console.log('Inside circleTransition: ' + this.state.featherCircle)

    TweenMax.to(this.state.featherIcon, 0, { opacity: 0 })
    TweenMax.to(this.state.featherCircle, 4, { position: "absolute", zIndex: 3000,  height: '2000px', width: '2000px', scaleX: '-15%', scaleY: '-15%' })
  }
  
  render() {
    return (
      <div className="modal">
        <div className="modal-menu-items-container">
          <div className="modal-group">
            <div className="feather-circle-container">
              <Link  to='/blog'> 
                <ModalMenuItem pageTransition={ this.circleTransition } circleRef={ featherCircle => this.featherCircle = featherCircle } 
                               iconRef={ featherIcon => this.featherIcon= featherIcon } circId="feather-circle" imgId="feather-icon" icon={ FeatherIcon } altText="feather icon" /> 
              </Link>
            </div>
            <div className="modal-text-container">
              <h2 id="feather-menu-link">Blog</h2>
            </div>
          </div>
          <div className="modal-group">
            <div className="github-circle-container">
              <a href="https://github.com/JamesGood626">
                <ModalMenuItem circId="github-circle" imgId="github-icon" icon={ GithubIcon } altText="github icon" />
              </a>
            </div>
            <div className="modal-text-container">
              <h2 id="github-menu-link">Github</h2>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}

export default Modal