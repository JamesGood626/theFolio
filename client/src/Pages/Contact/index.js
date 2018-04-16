import React, { Component } from 'react'
import styled from 'styled-components'
import Form from './Form'

const Div = styled.div`
  overflow: visible;
`

class Contact extends Component {
  render() {
    return (
      <Div>
          <Form/>
      </Div>
    )
  }
}

export default Contact