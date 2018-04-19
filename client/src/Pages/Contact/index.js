import React, { Component } from 'react'
import styled from 'styled-components'
import Form from './Form'

const Div = styled.div`
  height: 100vh;
  width: 100vw;
  margin-bottom: 2.4rem;
  background-color: orange;
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