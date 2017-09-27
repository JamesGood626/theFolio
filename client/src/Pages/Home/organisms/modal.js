import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ModalMenuItem from '../molecules/modalMenuItem'
import FeatherIcon from '../../../Img/feather.svg'
import GithubIcon from '../../../Img/github.svg'


class Modal extends Component {
  

  componentDidMount() {
    document.body.classList.add('modal-open')
  }

  componentWillUnmount() {
    document.body.classList.remove('modal-open')
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-menu-items-container">
          <div className="modal-group">
            <div className="feather-circle-container">
              <Link  to='/blog'> 
                <ModalMenuItem iconRef={ featherIcon => this.featherIcon= featherIcon } 
                               circId="feather-circle" imgId="feather-icon" icon={ FeatherIcon } altText="feather icon" /> 
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