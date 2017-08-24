import React from 'react';
import Content from '../molecules/content';
import Form from './Form'



const Contact = () => {
    return (
      <div className="contact"> {/* the background */}
        <div className="contact__body"> {/* the content */}
          <Content componentName="contact" title="Contact" />
          <Form />
        </div>
      </div>
    )
}

export default Contact