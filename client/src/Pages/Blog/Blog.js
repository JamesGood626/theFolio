import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { fetchPosts } from '../../actions'
import './organisms/navbar.css'
import Navbar from './organisms/navbar.js'




class Blog extends Component {
  // componentDidMount() {
  //   this.props.fetchPosts()
  //   console.log(this.props.posts)
  // }

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
