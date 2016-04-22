import {getStore} from '../../store'
import {browserHistory} from 'react-router'
import loggedIn from '../loggedIn'

export default function login(username, password) {
  return (dispatch, getState) => {
    Meteor.loginWithPassword(username, password, (error) => {
      if(error) {
        console.log("login failed")
        swal("login failed", "please check your username and/or password", "error")
        //ideally I need to dispatch a FLASH_MESSAGE action with the error
        //that action will store the message in a flashMessage property in the store
        //then I'll build a component that display whatever message we've there (until dismissed)
        //and then on route change? I should clear the message (so, another action to clear it?)
        //at the moment we'll using a sweet alert, so no need for a flash message yet
      } else {
        //I would normally dispatch a completing action here, but since we also need to be able
        //to track realtime changes to the user status, we'll use an autorun computation for this scenario.
        //dispatch(loggedIn(Meteor.user()))
        Meteor.logoutOtherClients()
      }
    })
  }
}

Meteor.startup(() => {
  Tracker.autorun(() => {
    const store = getStore()
    if(Meteor.user()) {
      console.log("logged in")
      store.dispatch(loggedIn(Meteor.user()))
      browserHistory.push('/')
    }
  })
})
