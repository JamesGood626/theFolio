import React from 'react'

const Icon = (props) => {
    return (
      <div className={props.containerClass}>
        <div className={props.iconName}>
          <img src={props.source} alt={props.altTag} />
        </div>
        <p className="home__icon-text">{props.text}</p>
      </div>  
    )
}

export default Icon