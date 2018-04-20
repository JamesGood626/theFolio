import React, { Component } from 'react'
import styled from 'styled-components'
import Form from './Form'


// Remember after trying overflow auto on the appjs section and all of the other content pages.
// I'll try overflow-y: scroll;

const Div = styled.div`
  height: 100%;
  width: 100vw;
  margin-bottom: 2.4rem;
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