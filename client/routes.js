import MainLayout from './components/MainLayout'
import Boards from './components/Boards'
import authCheck from './middlewares/requireAuth'
import Login from './containers/Login'
import Register from './containers/Register'
import NotFound from './components/NotFound'

function protected(config) {
  return Object.assign({ onEnter: authCheck }, config)
}
function unprotected(config) {
  return Object.assign({ onEnter: authCheck }, config)
}

export const routes = [{
  path: '/',
  component: MainLayout,
  indexRoute: protected({
    component: Boards
  }),
  onEnter: authCheck,
  childRoutes: [
    unprotected({
      path: 'login',
      component: Login
    }),
    unprotected({
      path: 'register',
      component: Register
    })
  ]
}, {
  path:'*', component: NotFound
}]
