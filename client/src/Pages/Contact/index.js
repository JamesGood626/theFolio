import React from 'react'
import Form from './Form'
import Navbar from '../Navbar'

const Contact = () => {
  const navItems = [{name: 'Home', path: '/'}, {name: 'About', path: '/about'}, {name: 'Blog', path: '/blog'}, {name: 'Contact', path: '/contact', active: true}]
    return (
      <div>
        <Navbar menuItems={ navItems }/>
          <Form />
      </div>
    )
}

export default Contact