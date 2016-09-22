import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './auth'
import boards from './boards'

export default combineReducers({
  auth,
  boards,
  routing: routerReducer
})
