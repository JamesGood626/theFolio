import axios from 'axios'
import { SEND_EMAIL } from './types'
import { FETCH_POSTS } from './types'
import { SPACE_ID, ACCESS_TOKEN } from './keys'


const BASE_URL = 'https://cdn.contentful.com/'


export const sendEmail = (values) => async dispatch => {
  const req = await axios.post('/contact/send', values)

  dispatch({ type: SEND_EMAIL, payload: req })
}


export const fetchPosts = (key = null) => async dispatch => {
	const posts = await axios.get(`${BASE_URL}spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}`)
  let refinedPosts = posts.data.items.reduce((obj, post) => {
											let postObj = {}
											let postId = post.fields.postTitle.replace(/\s/g, "-").toLowerCase()
											obj[postId] = postObj
											postObj['id'] = post.sys.id
											postObj['postStore'] = post.fields
											return obj
											}, {})
	dispatch({ type: FETCH_POSTS, payload: refinedPosts })
	if(key !== null) {
		return refinedPosts[key]
	}
}