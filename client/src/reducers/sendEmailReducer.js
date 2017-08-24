import { SEND_EMAIL } from '../actions/types'

export default function(state = {}, action) {
    switch (action.type) {
      case SEND_EMAIL:
        return true 
      default:
        return state
    }
}