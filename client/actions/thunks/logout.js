import {getStore} from '../../store'
import {browserHistory} from 'react-router'
import loggedOut from '../loggedOut'

export default function logout() {
  return (dispatch, getState) => {
    const state = getState()

    Meteor.logout((error) => {
      if(error) {
        console.log("logout failed")
        swal("logout failed", "Oops... something whent wrong. please try again", "error")
      }
    })
  }
}

Meteor.startup(() => {
  Tracker.autorun(() => {
    const store = getStore()
    if(!Meteor.user() && store.getState().auth.loggedIn) {
      //consider this block only if we were previously logged in
      console.log("logged out")
      store.dispatch(loggedOut())
      browserHistory.push('/login')
    }
  })
})
