import React from 'react'

const TextArea = ({ input, label, name, meta: { error, touched } }) => {
    return (
      <div className="form">
        <label id={`${ name }__label`} htmlFor={name}>{label}</label>  
        <textarea {...input} id={name} className="form__input"></textarea>
          <div className="form-error">
            { touched && error }
          </div>
      </div>
    )
}

export default TextArea