import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar'
import Image from './image'
import moto350 from './moto-350.png'
import moto472 from './moto-472.png'
import moto665 from './moto-665.png'
import moto828 from './moto-828.png'

// const Section = styled.section`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   height: 80vh; // just an arbitrary amount that fits the screen to prevent scroll.
//   width: 100%;
//   margin: 0 auto; 

//   @media (min-width: 400px) {
//     height: 85vh;
//   }
// `

// const Div = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   height: 100%;
//   color: #274156;
//   margin-top: 7rem;

//   @media (min-width: 742px) {
//     width: 60%;
//   }
// `

const P = styled.p`
  color: #274156;
  font-family: 'Quattrocento', serif;
  font-size: 1.2rem;
  line-height: 2rem;
  width: 90%;
  margin-top: 7rem;

  @media (min-width: 742px) {
    width: 80%;
    font-size: 1.4rem;
  }
`

const A = styled.a`
  text-decoration: none;
  color: #35e0f0;

  &:hover {
    color: #d0ccd0;
  }
`

// Move navbar into the router so that it's always present for the about, blog, and contact pages
// and use state to indicate which route is active. That'll make it easier to animate the entire about
// component.

// Also got rid of the Section and Div... the appear to have been superfluous

const About = () => {
  const navItems = [{name: 'Home', path: '/'}, {name: 'About', path: '/about', active: true}, {name: 'Blog', path: '/blog'}, {name: 'Contact', path: '/contact'}]
  const images = {'three': moto350,'four': moto472, 'six': moto665, 'eight': moto828}
    return (
      <div>
        <Navbar menuItems={ navItems }/>
        {/* <Section> */}
          <Image image={ images }>
            {/* <Div> */}
              <P>
                From and currently live in Phoenix, Arizona. Code, piano, and motorcycles. That's a high level introduction
                to my background and interests. I've learned the majority of my web development skills 
                through myriad online resources and documentation. My current short term learning goals are 
                to become more proficient at solving algorithms, threejs, and TDD; or anything else that 
                may be necessary to complete a project. I'll be blogging about my future learning experiences, 
                don't mind the three test posts at the moment, it'll soon be filled with glorious knowledge.
                Here is my <A href="https://github.com/JamesGood626">github</A> if you'd like to see some of my code.
              </P>
            {/* </Div>   */}
          </Image> 
        {/* </Section> */}
      </div>
    )
}

export default About