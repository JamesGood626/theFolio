import React from 'react'
import HomeNav from './homeNav'
import Header from './header'
import Renderer from './Three/Renderer'

const Home = ({ match }) => {
    console.log(match)
    return (
      <div>
        <HomeNav/>
        <Header/>
        <Renderer/>
      </div>
    )
}

export default Home


