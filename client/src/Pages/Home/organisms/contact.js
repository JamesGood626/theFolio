import React, { Component } from 'react';
import Content from '../molecules/content';
import Form from './Form'


class Contact extends Component {
  render() {
    return (
      <div className="contact"> {/* the background */}
        <div className="contact__body"> {/* the content */}
          <Content componentName="contact" title="Contact" />
          <Form />
        </div>
      </div>
    );
  }
}

export default Contact;