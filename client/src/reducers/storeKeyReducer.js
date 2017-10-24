import { STORE_KEY } from '../actions/types'

export default function(state = '', action) {
    switch (action.type) {
      case STORE_KEY:
        return action.payload  
      default:
        return state
    }
}