import React from 'react'
import Content from "../molecules/content"
import TechStack from "../molecules/techstack"

const About = () => {
    return (
      <div className="about">
        <Content componentName="about" title="About" content="Passionate Front End Web Developer and U.S. Navy Veteran located in Phoenix, AZ.
          Your project will be seen through to completion." />
        <TechStack />
      </div>
    )
}

export default About