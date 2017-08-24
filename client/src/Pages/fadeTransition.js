import React from 'react'
import { CSSTransition } from 'react-transition-group'


const FadeTransition = (props) => {
  return (
    <CSSTransition
      { ...props }
      classNames="fadeTransition"
      timeout={1000}
      mountOnEnter={ true }
      unmountOnExit={ true }
    />
  )
}

export default FadeTransition



