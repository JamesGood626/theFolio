import React, { Component } from "react";
//import { Link } from 'react-router-dom'
import styled from "styled-components";

import NinjaStar from "./ninjaStar";
import Modal from "./Modal";

import { TransitionGroup, Transition } from "react-transition-group";
import { TweenMax } from "gsap";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 7rem;
  width: 100vw;
  font-size: 2rem;
  position: absolute;
  z-index: 100;
  color: #828489;

  @media (min-width: 742px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 5rem;
    font-size: 3rem;
    position: absolute;
    z-index: 100;
  }

  &:hover {
    color: #35e0f0;
  }
`;

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.enterTransition = this.enterTransition.bind(this);
    this.leaveTransition = this.leaveTransition.bind(this);
  }

  toggleModal() {
    this.setState((prevState, state) => ({
      modalOpen: !prevState.modalOpen
    }));
  }

  enterTransition(node) {
    TweenMax.fromTo(node, 0.5, { height: 0 }, { height: "100vh" });
  }

  leaveTransition(node) {
    TweenMax.fromTo(node, 0.5, { height: "100vh" }, { height: 0 });
  }

  render() {
    let { modalOpen } = this.state;
    return (
      <Div>
        <NinjaStar toggleModal={this.toggleModal} modalOpen={modalOpen} />
        <TransitionGroup>
          {modalOpen && (
            <Transition
              in={modalOpen}
              timeout={{
                enter: 1000,
                exit: 1000
              }}
              mountOnEnter={false}
              unountOnExit={true}
              onEnter={this.enterTransition}
              onExit={this.leaveTransition}
            >
              <Modal />
            </Transition>
          )}
        </TransitionGroup>
      </Div>
    );
  }
}

export default Menu;
