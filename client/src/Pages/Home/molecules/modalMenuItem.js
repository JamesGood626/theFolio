import React from 'react';



const ModalMenuItem = (props) => {
    return (
      <div onClick={ props.pageTransition } ref={ props.circleRef } id={ props.circId } className="modal-menu-item">
        <img id={props.imgId} src={ props.icon } ref={ props.iconRef } alt={ props.altText } />
      </div>
    )
}

export default ModalMenuItem