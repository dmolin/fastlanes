import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import configureStore from './store'
import { syncHistoryWithStore } from 'react-router-redux'
import {routes} from './routes'
import loggedIn from './actions/loggedIn'
import loggedOut from './actions/loggedOut'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

window._store = store;

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>,
    document.getElementById('app')
  )
  
  
  //Add Tracking for logged in user. when logged out, redirect to login again
  //(this for tracking realtime changes, not when we're routing)
  Tracker.autorun(() => {
    if(Meteor.user()) {
      console.log("logged in")
      store.dispatch(loggedIn(Meteor.user()))
      browserHistory.push('/')
    } else if(store.getState().auth.loggedIn) {
      //consider this block only if we were previously logged in
      console.log("logged out")
      store.dispatch(loggedOut())
      browserHistory.push('/login')
    }
  })
})