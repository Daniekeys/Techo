import {combineReducers} from 'redux'
import getQuestions from './reducer/questions'
import userReducer from './reducer/userReducer'

export const rootReducer = combineReducers({
    getQuestions,
    userReducer
})