import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import sendEmailReducer from './sendEmailReducer'
import toggleMenuReducer from './toggleMenuReducer'
import storeKeyReducer from './storeKeyReducer'
import postsReducer from './postsReducer'

export default combineReducers({
    emailSuccess: sendEmailReducer,
    form: formReducer,
    toggle: toggleMenuReducer,
    postKey: storeKeyReducer,
    posts: postsReducer
})