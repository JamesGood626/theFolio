import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import sendEmailReducer from './sendEmailReducer'
import toggleMenuReducer from './toggleMenuReducer'
import postsReducer from './postsReducer'

export default combineReducers({
    emailSuccess: sendEmailReducer,
    form: formReducer,
    toggle: toggleMenuReducer,
    posts: postsReducer
})