import MainLayout from './components/MainLayout'
import Boards from './components/Boards'
import authCheck from './middlewares/requireAuth'
import Login from './containers/Login'
import Register from './containers/Register'
import NotFound from './components/NotFound'

export const routes = [{
  path: '/',
  component: MainLayout,
  indexRoute: {
    onEnter: authCheck,
    component: Boards
  },
  onEnter: authCheck,
  childRoutes: [{
    path: 'login',
    component: Login,
    onEnter: authCheck
  }, {
    path: 'register',
    component: Register,
    onEnter: authCheck
  }]
}, {
  path:'*', component: NotFound
}]
