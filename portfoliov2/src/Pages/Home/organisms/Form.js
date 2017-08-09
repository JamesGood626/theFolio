import React, {Component} from 'react'
import { connect } from 'react-redux'
import { sendEmail } from '../../../actions'
import { Field, reduxForm } from 'redux-form'
import Input from '../molecules/input'
import TextArea from '../molecules/textArea'
import validateEmails from '../../../utils/validateEmail'

const FIELDS = [
  {name: 'name', label: 'Name'},
  {name: 'email', label: 'Email Address'},
  {name: 'phoneNumber', label: 'Phone Number'},
  {name: 'currentSite', label: 'Current Site (If you have one)'}
]

class Form extends Component {
  renderFields() {
    return FIELDS.map( ({ label, name }) => {
      return (
          <Field
            key={name}
            label={label}
            name={name}
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
        <div className="form-email-success">Success!</div>
      )
    }

    else {  
      return(
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex-col-center">
            {this.renderFields()} 
            <Field label="Project Information" name="projectInfo" type="text" component={TextArea} />
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
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
