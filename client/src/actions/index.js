import axios from 'axios'
import { SEND_EMAIL } from './types'
import { TOGGLE_MENU } from './types'
import { FETCH_POSTS } from './types'

const BASE_URL = 'https://cdn.contentful.com/'
const SPACE_ID = 'o0wcfti34e3q'
const ACCESS_TOKEN = '90baae4254924c96b4c0bb82e164c9413373ca90b6f4266b2a30dd69bf42b857'

export const sendEmail = (values) => async dispatch => {
  console.log('inside sendEmail')
  const req = await axios.post('/contact/send', values)

  dispatch({ type: SEND_EMAIL, payload: req })
}

export const toggleMenu = (toggleMenu) => async dispatch => {
  console.log("AC toggleMenu: " + !toggleMenu)

  dispatch({ type: TOGGLE_MENU, payload: !toggleMenu })
}

export const fetchPosts = (fetchPosts) => async dispatch => {
  console.log("Fetchin' posts!")
  const posts = await axios.get(`${BASE_URL}spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}`)
  
  dispatch({ type: FETCH_POSTS, payload: posts })
}

// const posts = await axios.get(`${BASE_URL}spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}`)