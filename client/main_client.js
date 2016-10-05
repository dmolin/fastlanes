import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import configureStore from './store'
import { syncHistoryWithStore } from 'react-router-redux'
import {routes} from './routes'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

window._reduxStore = store;

Meteor.startup(() => {
  // Needed for onTouchTap
  // http://stackoverflow.com/a/34015469/988941
  injectTapEventPlugin();

  render(
    <MuiThemeProvider>
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
  )
})
