import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { fetchPosts } from '../../actions'
import './organisms/navbar.css'
import Navbar from './organisms/navbar.js'
// import axios from 'axios'


class Blog extends Component {
  // constructor(props) {
  //   super(props)

  //   this.getPosts = this.getPosts.bind(this)
  // }

  // componentDidMount() {
  //   this.getPosts()
  // }


  //When a new post is added, it's unshifted to the front of the items array. So map through the array
  //and grab each field object in the array. <-- This can be what is done to put the posts into redux store.
  //Then I'll need to handle mapping through that information to spit it out to the UI.

  
  // getPosts() {
  //   return axios.get('https://cdn.contentful.com/spaces/o0wcfti34e3q/entries?access_token=90baae4254924c96b4c0bb82e164c9413373ca90b6f4266b2a30dd69bf42b857')
  //     .then((posts) => {
  //       console.log(posts.data.items[1])
  //     })
  //   }

  render() {
    return (
        <div>
          <Navbar />
        </div>
    )
  }
}

export default Blog

// function mapStateToProps({ posts }) {
//   return { posts }
// }

// export default connect(mapStateToProps, { fetchPosts })(Blog)
