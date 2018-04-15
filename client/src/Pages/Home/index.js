import React, { Component } from 'react'
import styled from 'styled-components'

import Menu from './Menu'
import Header from './header'
import Loader from '../../UtilComponents/Loader'
import Renderer from './Three/Renderer'


const Div = styled.div`
	height: 95vh;
	width: 100vw;
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
		const { showLoader } = this.state
		// Necessary to ensure that the Three.js model doesn't mount during page transition
		setTimeout(() => {
			this.setState((prevState, state) => ({
				mountComponent: !prevState.mountComponent
			}))
		}, 950)
		if (showLoader) {
			setTimeout(() => {
				this.setState((prevState, state) => ({
					showLoader: !prevState.showLoader
				}))
			}, 1050)
		}
	}

	componentWillUnmount() {
		this.setState((prevState, state) => ({
			mountComponent: !prevState.mountComponent
		}))
	}

	render () {
		const { mountComponent, showLoader } = this.state
		return (
			<Div>
				<Menu/>
				<Header>Web Developer</Header>
				{ (showLoader || !mountComponent) && <Loader/> }
				{ mountComponent && <Renderer/> }
			</Div>
		)
	}
}

export default Home