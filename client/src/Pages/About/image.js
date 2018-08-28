import React, { Component } from "react";

class Image extends Component {
  render() {
    return <div className="aboutBgImg">{this.props.children}</div>;
  }
}

export default Image;
