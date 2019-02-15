import About from './About'
import Home from './Home'
import Topics from './Topics'
import Reset from './Rest'

const routeConfig = [
  {
    path: '/about',
    component: About
  },
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/topics',
    component: Topics
  },
  {
    path: '/reset',
    component: Reset
  }
]

export default routeConfig