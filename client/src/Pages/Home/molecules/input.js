import React from 'react'
import '../home.css'

const Input = ({ input, label, name, meta: { error, touched } }) => {
    return (
      <div className="form">
        <label id={`${ name }__label`} htmlFor={name}>{label}</label>  
        <input {...input} id={name} className="form__input"></input>
        <div className="form-error">
          { touched && error }
        </div> 
      </div>
    )
}

export default Input