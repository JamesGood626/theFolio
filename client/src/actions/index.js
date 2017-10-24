import axios from 'axios'
import { SEND_EMAIL } from './types'
import { TOGGLE_MENU } from './types'
import { STORE_KEY } from './types'
import { FETCH_POSTS } from './types'

const BASE_URL = 'https://cdn.contentful.com/'
const SPACE_ID = 'o0wcfti34e3q'
const ACCESS_TOKEN = '90baae4254924c96b4c0bb82e164c9413373ca90b6f4266b2a30dd69bf42b857'


export const sendEmail = (values) => async dispatch => {
	console.log('inside sendEmail')
	console.log(values)
  const req = await axios.post('/contact/send', values)

  dispatch({ type: SEND_EMAIL, payload: req })
}


export const toggleMenu = (toggleMenu) => async dispatch => {
  dispatch({ type: TOGGLE_MENU, payload: !toggleMenu })
}

export const storeKey = (key) => async dispatch => {
	console.log('from inside storeKey')
	console.log(key)
	dispatch({ type: STORE_KEY, payload: key})
	return key
}

//Should've created the postObj's object literal inside reduce <-- got my nested data structure right, remember that trick

export const fetchPosts = (key = null) => async dispatch => {
	const posts = await axios.get(`${BASE_URL}spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}`)
	// console.log('before the duece')
  // console.log(posts.data.items)
  let refinedPosts = posts.data.items.reduce((obj, post) => {
											let postObj = {}
											let postId = post.fields.postTitle.replace(/\s/g, "-").toLowerCase()
											obj[postId] = postObj
											postObj['id'] = post.sys.id
											postObj['postStore'] = post.fields
											return obj
										 }, {})
	// console.log('after the duece')
  // console.log(refinedPosts)
	dispatch({ type: FETCH_POSTS, payload: refinedPosts })
	if(key !== null) {
		return refinedPosts[key]
	}
}

// const posts = await axios.get(`${BASE_URL}spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}`)