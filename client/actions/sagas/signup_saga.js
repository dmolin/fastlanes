import {takeEvery} from 'redux-saga'
import {put, call} from 'redux-saga/effects'
import denodeify from '../../../lib/utils/denodeify'
import {ACTION_SIGNUP} from '../signup'

export default function* signupWatcher() {
  yield* takeEvery(ACTION_SIGNUP, function* (action){
    console.log("signing up user ", action);
    try {
      yield call(denodeify(Accounts.createUser), {email:action.email, password:action.password})
      Meteor.logoutOtherClients()
    } catch(error) {
      swal('signup failed', error.reason || "please check your data and try again", "error")
    }
  })
}