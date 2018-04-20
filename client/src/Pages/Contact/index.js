import React, { Component } from 'react'
import styled from 'styled-components'
import Form from './Form'


// Remember after trying overflow auto on the appjs section and all of the other content pages.
// I'll try overflow-y: scroll;

const Div = styled.div`
  overflow-y: scroll;
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