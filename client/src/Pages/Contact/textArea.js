import React from 'react'
import styled from 'styled-components'


const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 300;
`

const Label = styled.label`
  color: #274156;
  position: relative;
  top: 1.25rem;
`

const StyledTextArea = styled.textarea`
  width: 90vw;
  height: 20vh; 
  border-radius: 0.625rem;
  position: relative;
  margin-top: 1.875rem;
  background-color: rgba(0,0,0,0);
  padding: 0.625rem;
  border: 1px solid #274156;
  box-shadow: 2px #777;  
  border-radius: 0;
  transition: border 0.1s;
  color: #274156;
  resize: none;
  margin-bottom: 1.5rem;

  @media (min-width: 500px) {
    width: 50vw;
  }

  &:focus {
    outline: none;
    border-bottom: solid 1px #35e0f0;
    border-left: solid 1px #35e0f0;
    border-right: solid 1px #35e0f0;
    border-top: solid 1px #35e0f0;
  }
`

const FormError = styled.div`
  text-align: center;
  color: #d40000;
  max-width: 90vw;
  margin-top: -20px;
  margin-bottom: 20px;
`


const TextArea = ({ input, label, name, meta: { error, touched } }) => {
    return (
      <Section>
        <Label>{label}</Label>  
        <StyledTextArea {...input} id={name}></StyledTextArea>
          <FormError>
            { touched && error }
          </FormError>
      </Section>
    )
}

export default TextArea

//From label
// id={`${ name }__label`}

//From div that was replaced by section(a lot of styling got messed up --> especially w/ textarea)
// div className="form"