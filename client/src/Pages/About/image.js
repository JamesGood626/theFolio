<<<<<<< HEAD
import React, { Component } from "react";
=======
import React, { Component } from 'react'
import styled from 'styled-components'

// const Div = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 90%;
//   margin: 0 auto;
//   height: 80vh;
//   margin-top: 1rem;
//   margin-bottom: 1rem;

//   background: url(${(props) => props.image.three }) no-repeat;

//   @media (min-width: 472px) {
//     background: url(${(props) => props.image.four }) no-repeat;
//   }

//   @media (min-width: 742px) {
//     height: 80vh;
//     width: 80%;
//     background: url(${(props) => props.image.six }) no-repeat;
//   }
  
//   @media (min-width: 1100px) {
//     background: url(${(props) => props.image.eight }) no-repeat;
//   }
// `
>>>>>>> parent of 87f7400... Had to set height auto on project's section container.

class Image extends Component {
  render() {
    return <div className="aboutBgImg">{ this.props.children }</div>
  }
}

export default Image