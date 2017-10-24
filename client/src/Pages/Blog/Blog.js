import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../../actions'
import styled from 'styled-components'
import Smackdown from 'react-smackdown'
import './organisms/navbar.css'
import Navbar from '../Navbar'


const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 700px) {
    width: 80%;
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  color: #274156;
`

const PostDiv = Div.extend`
  margin: .5rem .5rem .5rem .5rem;
  width: 24rem;
  height: 16rem;
  border: 2px solid #274156;
  // background-color: #828489;
  line-height: 1.4rem;
`

const TitleDiv = Div.extend`
  text-align: center;
  border-bottom: 2px solid #274156;
  justify-content: center;
  margin-bottom: .5rem;
  // background-color: #fbfcff;
  width: 100%;
  height: 5rem;
`

class Blog extends Component {
  // When a new post is added, it's unshifted to the front of the items array. So map through the array
  // and grab each field object in the array. <-- This can be what is done to put the posts into redux store.
  // Then I'll need to handle mapping through that information to spit it out to the UI.

  componentWillMount() {
    if(Object.keys(this.props.posts).length === 0) {
      this.props.fetchPosts()
    }
  }
  
  // Okay, managing blog post state is the next Major consideration. I'll need to make sure that the id is linked to the respective blog post.
  // My first idea is to use an array obect with the id as the key, and the other values in an object in it's own(title, date, postBody)
  // Yeah that shouldn't be an issue, because when you render them to the screen, on the entry page to the blog, then you can loop
  // through the state and assign the id as a key or something that will be used when the post is clicked in order to fetch that blog post
  // and display the post page

  //to access a single post
  // posts.data.items[1].fields.postBody

  // To trim the length of the post for preview(will most likely be accessing this in the mapover of state within the render function)
  // posts.data.items[0].fields.postBody.substring(0, 200)

  //and then from the fields object, author, postDate, and postTitle can be accessed as well.
  //So I'll store Title, followed by data, and finally the post

  // to access post id
  // posts.data.items[0].sys.id



  //Okay, don't need storekey, but I still need to push to this path
    // getKey(e) {
    //   this.props.storeKey(e.target.id).then((key) =>{ 
    //     this.props.history.push(`/blog/${ key }`)
    //   })
    // }

  render() {
    const mdStyled = {
      'padding': '0 1rem 0 1rem'
    }

    const linkStyle = { 
      'textDecoration': 'none',
      'color': '#274156' 
    }

    let postsArr = Object.entries(this.props.posts)
    console.log(postsArr)

    // Going to apply default styles the the div with style = { container } for react-motion anim 
    const navItems = [{name: 'Home', path: '/'}, {name: 'About', path: '/about'}, {name: 'Blog', path: '/blog', active: true}, {name: 'Contact', path: '/contact'}]
    return (
        <div>
          <Navbar menuItems={ navItems }/>
            <Section>
             { postsArr ? 
                 postsArr.map((post, index) => {
                    return(
                      <PostDiv key={index}>
                        <TitleDiv>
                        <h2 id={ post[0] }><Link to={ `/blog/${ post[0] }` } style={ linkStyle }>{ post[1].postStore.postTitle }</Link></h2>
                        </TitleDiv>
                        <Smackdown style={ mdStyled } source={ post[1].postStore.postBody.substring(0, 200) }/>
                      </PostDiv>
                    )
                  }) 
                : null 
              } 
            </Section>
        </div>
    )
  }
}


function mapStateToProps({ posts }) {
  return { posts }
}

export default connect(mapStateToProps, { fetchPosts })(Blog)
