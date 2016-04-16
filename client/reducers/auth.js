import {ACTION_LOGIN} from '../actions/login'
import {ACTION_LOGOUT} from '../actions/logout'

export const initialState = {
  loggedIn: false,
  data: null
}

export default function(state = initialState, action) {
  const {type} = action

  switch(type) {
    case ACTION_LOGIN:
      return Object.assign({}, state, {loggedIn: true, data: action.data })
    case ACTION_LOGOUT:
      return Object.assign({}, state, {loggedIn: false, data: null })
    default:
      return state
  }
}