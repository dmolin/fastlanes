import MainLayout from './components/MainLayout'
import Boards from './containers/Boards'
import authCheck from './middlewares/requireAuth'
import Login from './containers/Login'
import Register from './containers/Register'
import NotFound from './components/NotFound'
import BoardPage from './pages/BoardPage'

function _augment(configArray) {
  function addOnEnter(entry) {
    return Object.assign({ onEnter: authCheck.bind(entry.onEnter) }, entry);
  }
  function addAuthCheck(entry) {
    if (entry.childRoutes && entry.childRoutes.length) {
      entry.childRoutes = entry.childRoutes.map(addAuthCheck)
    }
    return addOnEnter(entry);
  }
  return configArray.map(addAuthCheck);
}

function redirect (from, to) {
  return {
    path: from,
    onEnter: (nextState, transition) => {
      transition(to)
    }
  }
}

export const routes = [redirect("/", "/boards")].concat(_augment([{
  path: '/boards',
  component: MainLayout,
  indexRoute: {
    component: Boards
  },
  childRoutes: [
    {
      path: ':id',
      component: BoardPage
    }
  ]
}, {
  path: '/login',
  component: Login
}, {
  path: '/register',
  component: Register
}, {
  path:'*', component: NotFound
}]))

