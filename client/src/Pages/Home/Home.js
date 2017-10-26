import React from 'react'
import HomeNav from './homeNav'
import Header from './header'
import Renderer from './Three/Renderer'


const Home = () => {
	return (
		<div>
			<HomeNav/>
			<Header/>
			<Renderer/>
		</div>
	)
}

export default Home


