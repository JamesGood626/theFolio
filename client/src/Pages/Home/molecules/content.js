import React from 'react';

const Content = (props) => {
    return (
      <div className={props.componentName}>
        <h2 className={ `${ props.componentName }__title` }>{ props.title }</h2>
        <div className={ `${ props.componentName }__title-separator-line` }></div>
        <div className="wrapper-secondary">
          <p className={ `${ props.componentName }__copy` }>{ props.content }</p>
        </div>
      </div>
    )
}

export default Content