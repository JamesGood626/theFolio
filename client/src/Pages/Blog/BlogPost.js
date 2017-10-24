import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions'
import Smackdown from 'react-smackdown'
import { javascript } from 'react-syntax-highlighter/dist/languages'
import { irBlack } from 'react-syntax-highlighter/dist/styles'
import styled from 'styled-components'
import Navbar from '../Navbar'


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


// The last requirement fulfilled!
 //This successfully grabs the key from the url so the blog post can be fetched 
    // if someone is sharing the link and/or bookmarking page.

//Had an issue with the previous method of fetching posts and then sending off the key to the redux store
//So I opted for doing these steps in the constructor
// 1. get the parsed Url for the key
// 2. added the option to pass in a key to fetchPosts -> will return that specific post if an argument is passed in
// 3. That's all folks!

class BlogPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: null
    }
  }


  componentWillMount() {
    let parsedUrl = this.props.location.pathname.replace(/^\/\w+\//, "").trim()
    if(Object.entries(this.props.posts).length === 0) {
      this.props.fetchPosts(parsedUrl).then(post => { this.setState({ post: post })})
    }
    else {
      this.setState({ post: this.props.posts[parsedUrl] })
    }
  }


  render() {
    const cbStyle = {
      'margin': '0 auto',
      'width': '100%',
      'fontFamily': 'Quattrocento, serif',
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

    // Create a module that can be exported since you're doing this in two places
    const navItems = [{name: 'Home', path: '/'}, {name: 'About', path: '/about'}, {name: 'Blog', path: '/blog', active: true}, {name: 'Contact', path: '/contact'}]
    return (
        <div>
          <Navbar menuItems={navItems} />
            { this.state.post ?
                <Div>
                  <H1>{ this.state.post.postStore.postTitle }</H1>
                  <Smackdown style={ cbStyle } source={ this.state.post.postStore.postBody } syntax={ syntax }/>
                </Div>
              : null 
            }
        </div>
    )
  }
}

// I'll check this later... but I think it's safe to say that the post key action creator is useless now.

function mapStateToProps({ posts }) {
  return { posts }
}

export default connect(mapStateToProps, { fetchPosts })(BlogPost)