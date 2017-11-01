import React from 'react'
import HomeNav from './homeNav'
import Header from './header'
import Renderer from './Three/Renderer'


const Home = (props) => {
	return (
		<div>
			<HomeNav/>
			<Header/>
			<Renderer location={props}/>
		</div>
	)
}

export default Home


