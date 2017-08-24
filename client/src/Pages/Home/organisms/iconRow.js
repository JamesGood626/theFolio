import React from 'react'
import Icon from '../molecules/icon'

const IconRow = (props) => {
    const styled = {
      filter: 'blur(20px)'
    }

    return (
        <div className="home__icon-row" style={ props.toggleBool ? styled : null }>
            <Icon containerClass="home__suitcase-component" iconName="home__suitcase" source={require("../../../Img/suitcase.png")} text="Professional Service" altTag="Suitcase icon" />
            <Icon containerClass="home__device-component" iconName="home__device" source={require("../../../Img/devices.png")} text="Responsive Design" altTag="Electronic devices icon" />
            <Icon containerClass="home__hourglass-component" iconName="home__hourglass" source={require("../../../Img/hourglass.png")} text="Time Efficient" altTag="Hourglass icon" />
        </div>
    )
}

export default IconRow