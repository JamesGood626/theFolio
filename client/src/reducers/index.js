import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import sendEmailReducer from './sendEmailReducer'
import storeKeyReducer from './storeKeyReducer'
import postsReducer from './postsReducer'

export default combineReducers({
    emailSuccess: sendEmailReducer,
    form: formReducer,
    postKey: storeKeyReducer,
    posts: postsReducer
})