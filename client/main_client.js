import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import configureStore from './store'
import { syncHistoryWithStore } from 'react-router-redux'
import {routes} from './routes'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

window._reduxStore = store;

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})