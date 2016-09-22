import {takeEvery} from 'redux-saga'
import {put, call} from 'redux-saga/effects'
import {getStore} from '../../store'
import {browserHistory} from 'react-router'

import {ACTION_LOGIN} from '../login'
import loggedIn from '../loggedIn'
import loggedOut from '../loggedOut'
import denodeify from '../../../lib/utils/denodeify'

export default function* loginWatcher() {
  //for every login action, "take" it's data (the entire actin) and pass it to the login saga
  yield* takeEvery(ACTION_LOGIN, function* (action){
    const username = action.email,
          password = action.password;

    console.log("Logging in user", username)
    try {
      yield call(denodeify(Meteor.loginWithPassword), username, password)
      Meteor.logoutOtherClients()
    } catch(error) {
      console.log("error logging in")
      /*
       * this must be changed for a purer approach: just dispatch the POPUP_MESSAGE_SHOW event with
       * msgType: 'error',
       * msg: error.message
       * the appropriate reducer will store this in the popup message area of the store and as a consequence a popup
       * will be triggered in the master layout (and will dispatch a POPUP_MESSAGE_CLEAR event)
       */
      swal("login failed", "please check your username and/or password", "error")
      //yield put({type:'LOGIN_FAILED', error})
      yield put(loggedOut())
    }
  })
}

Meteor.startup(() => {
  Tracker.autorun(() => {
    const store = getStore()
    let shouldRedirect = false

    if(Meteor.user() && !store.getState().auth.loggedIn) {
      console.log("logged in (detected)")
      //if we're in the login state, change url to the main dashboard page
      if (store.getState().auth.loginState === 'LOGGING_IN') {
        shouldRedirect = true;
      }
      store.dispatch(loggedIn(Meteor.user()))
      
      if (shouldRedirect) {
        browserHistory.push('/')
      }
    }
  })
})
