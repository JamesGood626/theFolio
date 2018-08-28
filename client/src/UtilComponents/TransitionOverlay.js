import React, { Component } from "react";
//import ReactDOM from 'react-dom'
//import styled from 'styled-components'
import { TweenMax } from "gsap";

class TransitionOverlay extends Component {
  componentDidMount() {
    if (this.props.action === "PUSH") {
      TweenMax.staggerFromTo(
        [this.whiteOverlay, this.blueOverlay, this.blackOverlay],
        1.8,
        { x: "-120%" },
        { x: "150%" },
        0.3
      );
    } else {
      TweenMax.staggerFromTo(
        [this.blackOverlay, this.blueOverlay, this.whiteOverlay],
        1.8,
        { x: "120%" },
        { x: "-150%" },
        0.3
      );
    }
  }

  render() {
    const { action } = this.props;
    const higherZ = {
      zIndex: "4000"
    };
    const lowerZ = {
      zIndex: "3000"
    };
    return [
      <div
        id="whiteOverlay"
        className="overlay"
        style={action === "PUSH" ? lowerZ : higherZ}
        key="1"
        ref={x => (this.whiteOverlay = x)}
      />,
      <div
        id="blueOverlay"
        className="overlay"
        key="2"
        ref={x => (this.blueOverlay = x)}
      />,
      <div
        id="blackOverlay"
        className="overlay"
        style={action === "PUSH" ? higherZ : lowerZ}
        key="3"
        ref={x => (this.blackOverlay = x)}
      />
    ];
  }
}

export default TransitionOverlay;

// old black overlay inline style logic
//

// old blue overlay inline style logic
//
