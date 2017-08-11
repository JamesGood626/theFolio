import axios from 'axios'
import { SEND_EMAIL } from './types'
import { TOGGLE_MENU } from './types'

export const sendEmail = (values) => async dispatch => {
  console.log('inside sendEmail')
  const req = await axios.post('/contact/send', values)

  dispatch({ type: SEND_EMAIL, payload: req })
}

export const toggleMenu = () => async dispatch => {
  console.log("toggleMenu")
  dispatch({ type: TOGGLE_MENU, payload: true })
}