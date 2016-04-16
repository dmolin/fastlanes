import MainLayout from './components/MainLayout'
import Boards from './components/Boards'
import authCheck from './middlewares/requireAuth'
import Login from './containers/Login'
import Register from './containers/Register'

export const routes = [{
  component: MainLayout,
  path: '/',
  indexRoute: { component: Boards },
  onEnter: authCheck
}, {
  component: Login,
  path: '/login'
}, {
  component: Register,
  path: '/register'
}]
