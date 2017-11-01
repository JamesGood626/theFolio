import React, {Component} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { sendEmail } from '../../actions'
import { Field, reduxForm } from 'redux-form'
import Input from './input'
import TextArea from './textArea'
import validateEmails from '../../utils/validateEmail'


const CenteredForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Quattrocento', serif;
  margin-top: 1rem;
  width: 100vw;
`

// Can prolly break the button out into a separate component later
// But so far I only need one button
const FormBtn = styled.button`
    margin: 1.5rem 0;
    padding: 1rem;
    width: 10rem;
    background-color: rgba(0,0,0,0);
    border: 2px solid #35e0f0;
    color: #35e0f0;
    box-shadow: inset 0 0 0 0 #35e0f0;
    transition: .8s ease-out;

  &:hover {
    box-shadow: inset 0 0 3.125rem 3.125rem #35e0f0; 
    color: #f2f2f2;
  }
`

const Div = styled.div`
  width: 100vw;
  text-align: center;
  margin: auto;
  font-size: 2rem;
  color: #274156;
`

const FIELDS = [
  { name: 'name', label: 'Name' },
  { name: 'email', label: 'Email Address' },
  { name: 'phoneNumber', label: 'Phone Number' },
  { name: 'currentSite', label: 'Current Site' }
]

class Form extends Component {
  renderFields() {
    return FIELDS.map( ({ label, name }) => {
      return (
          <Field
            key={ name }
            label={ label }
            name={ name }
            type="text"
            component={ Input } 
          />
      )
    })
  }
  
  render() {
    const { handleSubmit, submitSucceeded } = this.props
    const onSubmit = (values) => {this.props.sendEmail(values)}
    
    if(submitSucceeded) {
      return(
        <Div>Success!</Div>
      )
    }

    else {  
      return(
          <CenteredForm onSubmit={handleSubmit(onSubmit)}>
            {this.renderFields()} 
            <Field label="Project Information" name="projectInfo" type="text" component={TextArea} />
            <FormBtn type="submit">Submit</FormBtn>
          </CenteredForm>
      )
    }
  }
}

function validate(values) {
  const errors = {}

  errors.email = validateEmails(values.email || '')

  if(!values.name || values.name.length < 3) {
    errors.name = 'Enter your Name'
  }
  if(!values.email) {
    errors.email = 'Enter your Email Address'
  }
  if(!values.projectInfo) {
    errors.projectInfo = 'Please provide some information about your project'
  }
  return errors
}


export default reduxForm({
  validate,
  form: 'HireRequestForm'
})(
  connect(null, { sendEmail })(Form)
)
