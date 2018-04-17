import React, { Component } from 'react'
import styled from 'styled-components'

import Menu from './Menu'
import Header from './header'
import Loader from '../../UtilComponents/Loader'
import Renderer from './Three/Renderer'


const Div = styled.div`
	height: 100vh;
	width: 100vw;
	position: fixed;
	overscroll-behavior: contain;
`

class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {
			mountComponent: false,
			showLoader: true
		}
	}

	componentDidMount() {
		// Necessary to ensure that the Three.js model doesn't mount during the start of the page transition
		setTimeout(() => {
			this.setState((prevState, state) => ({
				mountComponent: !prevState.mountComponent
			}))
		}, 950)
		this.containerDiv.addEventListener('touchmove', this.preventScroll)
	}

	componentWillUnmount() {
		this.setState((prevState, state) => ({
			mountComponent: !prevState.mountComponent
		}))
		this.containerDiv.removeEventListener('touchmove', this.preventScroll)
	}

	preventScroll = event => {
		event.preventDefault()
	}

	toggleLoader = () => {
		const { showLoader } = this.state
		if (showLoader) {
			this.setState((prevState, state) => ({
				showLoader: !prevState.showLoader
			}))
		}
	}

	render () {
		const { mountComponent, showLoader } = this.state
		return (
			<Div ref={x => this.containerDiv = x}>
				<Menu/>
				<Header>Web Developer</Header>
				 { (showLoader || !mountComponent) && <Loader/> }
				{ mountComponent && <Renderer toggleLoader={ this.toggleLoader }/> }
			</Div>
		)
	}
}

export default Home