import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../actions";
import styled from "styled-components";
import Smackdown from "react-smackdown";

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 2.4rem;

  @media (min-width: 700px) {
    width: 80%;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  color: #274156;
`;

const PostDiv = Div.extend`
  margin: 1rem;
  width: 24rem;
  height: 14rem;
  border: 2px solid #274156;
  line-height: 1.4rem;
`;

const TitleDiv = Div.extend`
  text-align: center;
  border-bottom: 2px solid #274156;
  justify-content: center;
  width: 100%;
  height: 5rem;
  font-size: 0.8rem;
`;

class Blog extends Component {
  componentDidMount() {
    if (Object.keys(this.props.posts).length === 0) {
      this.props.fetchPosts();
    }
  }

  //to access a single post
  // posts.data.items[1].fields.postBody

  // To trim the length of the post for preview(will most likely be accessing this in the mapover of state within the render function)
  // posts.data.items[0].fields.postBody.substring(0, 200)

  //and then from the fields object, author, postDate, and postTitle can be accessed as well.
  //So I'll store Title, followed by data, and finally the post

  // to access post id
  // posts.data.items[0].sys.id

  render() {
    const mdStyle = {
      margin: "0 1rem"
    };
    let postsArr = Object.entries(this.props.posts);
    return (
      <Section>
        {postsArr
          ? postsArr.map((post, index) => {
              return (
                <PostDiv key={index}>
                  <TitleDiv>
                    <h2 id={post[0]}>{post[1].postStore.postTitle}</h2>
                  </TitleDiv>
                  <Smackdown
                    style={mdStyle}
                    source={post[1].postStore.postBody}
                  />
                </PostDiv>
              );
            })
          : null}
      </Section>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Blog);
// <Smackdown style={ cbStyle } source={ this.state.post.postStore.postBody } syntax={ syntax }/>
