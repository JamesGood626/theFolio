import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import sentEmailReducer from './sentEmailReducer'

export default combineReducers({
    emailSuccess: sentEmailReducer,
    form: formReducer
})