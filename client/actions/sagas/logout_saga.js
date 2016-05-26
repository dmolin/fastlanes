import {takeEvery} from 'redux-saga'
import {put, call} from 'redux-saga/effects'
import {getStore} from '../../store'
import {browserHistory} from 'react-router'

import {ACTION_LOGOUT} from '../logout'
import loggedOut from '../loggedOut'
import LoginStates from '../../constants/LoginStates'

export default function* logoutWatcher() {
  yield* takeEvery(ACTION_LOGOUT, function* logout(action) {
    yield put({ type: 'LOGGING_OUT' })
    console.log("Logging out user")
    try {
      var result = yield call(Meteor.logout)
    } catch(error) {
      /*
       * this must be changed for a purer approach: just dispatch the POPUP_MESSAGE_SHOW event with
       * msgType: 'error',
       * msg: error.message
       * the appropriate reducer will store this in the popup message area of the store and as a consequence a popup
       * will be triggered in the master layout (and will dispatch a POPUP_MESSAGE_CLEAR event)
       */
      swal("logout failed", "error")
      //yield put({type:'LOGIN_FAILED', error})
    }
  })
}

Meteor.startup(() => {
  Tracker.autorun(() => {
    const store = getStore()
    if(!Meteor.user() && store.getState().auth.loginState === LoginStates.LOGGED_IN) {
      //consider this block only if we were previously logged in
      console.log("logged out")
      store.dispatch(loggedOut())
      browserHistory.push('/login')
    }
  })
})
