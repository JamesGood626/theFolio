import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions'
import Smackdown from 'react-smackdown'
import { javascript } from 'react-syntax-highlighter/dist/languages'
import { irBlack } from 'react-syntax-highlighter/dist/styles'
import styled from 'styled-components'


const ContainerDiv = styled.div`
  overflow: auto;
  width: 100vw;
  background-color: yellow;
  margin-bottom: 2.4rem;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  color: #274156;
  font-size: 1rem;
  line-height: 1.8rem;

   @media (min-width: 700px) {
		  width: 80%;
	  }
`

const H1 = styled.h1`
    font-size: 2.4rem;
`


class BlogPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: null
    }
  }

  componentDidMount() {
    const { posts, location } = this.props
    let parsedUrl = location.pathname.replace(/^\/\w+\//, "").trim()
    if(Object.entries(posts).length === 0) {
      this.props.fetchPosts(parsedUrl).then(post => { 
        this.setState({ post: post })
      })
    }
    else {
      this.setState({ post: this.props.posts[parsedUrl] })
    }
  }

  render() {
    const cbStyle = {
      'margin': '0 auto',
      'width': '100%',
      'fontSize': '1.1rem'
    }
    const syntax = {
      languages: [
        { name: 'javascript', syntax: javascript }
      ],
      showLineNumbers: true,
      lineNumberStyle: { opacity: .5 },
      theme: irBlack
    }
    return (
        <ContainerDiv>
            { this.state.post ?
                <Div>
                  <H1>{ this.state.post.postStore.postTitle }</H1>
                  <Smackdown style={ cbStyle } source={ this.state.post.postStore.postBody } syntax={ syntax }/>
                </Div>
              : null 
            }
        </ContainerDiv>
    )
  }
}

function mapStateToProps({ posts }) {
  return { posts }
}

export default connect(mapStateToProps, { fetchPosts })(BlogPost)