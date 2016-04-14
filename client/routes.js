import MainLayout from './components/MainLayout'
import Boards from './components/Boards'

export const routes = {
  component: MainLayout,
  path: '/',
  indexRoute: { component: Boards }
}
