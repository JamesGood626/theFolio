import axios from "axios";
import { LOADING, LOADING_FINISHED, SEND_EMAIL, FETCH_POSTS } from "./types";
// import SPACE_ID from './config'
// import ACCESS_TOKEN from './config'

const BASE_URL = "https://cdn.contentful.com/";

export const startLoading = values => async dispatch => {
  dispatch({ type: LOADING });
};

export const finishLoading = values => async dispatch => {
  dispatch({ type: LOADING_FINISHED });
};

export const sendEmail = values => async dispatch => {
  const req = await axios.post("/contact/send", values);

  dispatch({ type: SEND_EMAIL, payload: req });
};

export const fetchPosts = (key = null) => async dispatch => {
  const posts = await axios.get(
    `${BASE_URL}spaces/${process.env.REACT_APP_SPACE_ID}/entries?access_token=${
      process.env.REACT_APP_ACCESS_TOKEN
    }`
  );
  let refinedPosts = posts.data.items.reduce((obj, post) => {
    let postObj = {};
    let postId = post.fields.postTitle.replace(/\s/g, "-").toLowerCase();
    obj[postId] = postObj;
    postObj["id"] = post.sys.id;
    postObj["postStore"] = post.fields;
    return obj;
  }, {});
  // console.log('refinedPosts: ', refinedPosts)
  dispatch({ type: FETCH_POSTS, payload: refinedPosts });
  if (key !== null) {
    return refinedPosts[key];
  }
};
