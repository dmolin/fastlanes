import MainLayout from './components/MainLayout'
import Boards from './containers/Boards'
import authCheck from './middlewares/requireAuth'
import Login from './containers/Login'
import Register from './containers/Register'
import NotFound from './components/NotFound'

function _protected(config) {
  return Object.assign({ onEnter: authCheck }, config)
}
function _unprotected(config) {
  return Object.assign({ onEnter: authCheck }, config)
}

export const routes = [{
  path: '/',
  component: MainLayout,
  indexRoute: _protected({
    component: Boards
  }),
  onEnter: authCheck,
  childRoutes: [
    _unprotected({
      path: 'login',
      component: Login
    }),
    _unprotected({
      path: 'register',
      component: Register
    })
  ]
}, {
  path:'*', component: NotFound
}]
