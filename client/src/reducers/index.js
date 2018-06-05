import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import loadingReducer from './loadingReducer'
import sendEmailReducer from './sendEmailReducer'
import postsReducer from './postsReducer'

export default combineReducers({
    loading: loadingReducer,
    emailSuccess: sendEmailReducer,
    form: formReducer,
    posts: postsReducer
})