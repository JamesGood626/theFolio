import React, { Component } from 'react'
import styled from 'styled-components'

import Image from './image'
// import moto350 from './moto-350.png'
// import moto472 from './moto-472.png'
// import moto665 from './moto-665.png'
// import moto828 from './moto-828.png'

const Div = styled.div`
  height: 100%;
  width: 100vw;
  margin-bottom: 2.4rem;
`

const P = styled.p`
  color: #274156;
  font-size: 1rem;
  line-height: 2rem;
  width: 90%;
  margin-top: 7rem;

  @media (min-width: 742px) {
    width: 80%;
  }
`

class About extends Component {
  render() {
    // const images = { 
    //   'three': moto350,
    //   'four': moto472, 
    //   'six': moto665, 
    //   'eight': moto828 
    // }
    return (
      <Div>
        <Image>
            <P>
              From and currently live in Phoenix, Arizona. Code, piano, and motorcycles. That's a high level introduction
              to my background and interests. I've learned the majority of my web development skills 
              using online resources and documentation. Determined to continue learning and growing as a Software Engineer.
              Here is my <a href="https://github.com/JamesGood626">github</a> if you'd like to see some of my code.
            </P>
        </Image>
      </Div>
    )
  }
}

export default About