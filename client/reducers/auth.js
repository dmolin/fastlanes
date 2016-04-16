import {ACTION_LOGGED_IN} from '../actions/loggedIn'
import {ACTION_LOGGED_OUT} from '../actions/loggedOut'

export const initialState = {
  loggedIn: false,
  data: null
}

export default function(state = initialState, action) {
  const {type} = action

  switch(type) {
    case ACTION_LOGGED_IN:
      return Object.assign({}, state, {loggedIn: true, data: action.data })
    case ACTION_LOGGED_OUT:
      return Object.assign({}, state, {loggedIn: false, data: null })
    default:
      return state
  }
}