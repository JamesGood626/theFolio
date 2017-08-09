import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import sentEmailReducer from './sentEmailReducer'
import toggleMenuReducer from './toggleMenuReducer'

export default combineReducers({
    emailSuccess: sentEmailReducer,
    toggle: toggleMenuReducer,
    form: formReducer
})