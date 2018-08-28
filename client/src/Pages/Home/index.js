import React, { Component } from "react";
//import styled from 'styled-components'
import { connect } from "react-redux";
import Menu from "./Menu";
import Header from "./header";
import Loader from "../../UtilComponents/Loader";
import Renderer from "./Three/Renderer";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mountComponent: false,
      showLoader: true
    };
  }

  componentDidMount() {
    // Necessary to ensure that the Three.js model doesn't mount during the start of the page transition
    setTimeout(() => {
      this.setState((prevState, state) => ({
        mountComponent: !prevState.mountComponent
      }));
    }, 1800);
    if (this.containerDiv) {
      this.containerDiv.addEventListener("wheel", this.preventScroll);
      this.containerDiv.addEventListener("touchmove", this.preventScroll);
    }
    document.body.style.overflowY = "hidden";
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loading !== this.props.loading && !this.props.loading) {
      this.toggleLoader();
    }
  }

  componentWillUnmount() {
    this.setState((prevState, state) => ({
      mountComponent: !prevState.mountComponent
    }));
    this.containerDiv.removeEventListener("wheel", this.preventScroll);
    this.containerDiv.removeEventListener("touchmove", this.preventScroll);
  }

  toggleLoader = () => {
    const { showLoader } = this.state;
    if (showLoader) {
      this.setState((prevState, state) => ({
        showLoader: !prevState.showLoader
      }));
    }
  };

  preventScroll = event => {
    event.preventDefault();
  };

  render() {
    const { mountComponent, showLoader } = this.state;
    return (
      <div className="homeContainerDiv" ref={x => (this.containerDiv = x)}>
        <Menu />
        <Header>Web Developer</Header>
        {(showLoader || !mountComponent) && <Loader />}
        {mountComponent && <Renderer />}
      </div>
    );
  }
}

function mapStateToProps({ loading }) {
  return { loading };
}

export default connect(
  mapStateToProps,
  null
)(Home);
