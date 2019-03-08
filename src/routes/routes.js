import Home from '@/pages/Home';
import Activities from '@/pages/Activities';
import Topics from '@/pages/Topics';
import Events from '@/pages/Events';
import Books from '@/pages/Books';
import ResetPassword from '@/pages/ResetPassword';
import Welcome from '@/pages/Welcome';
 
var routes =[
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/welcome',
    component: Home,
    routes: [
      {
        path: '/welcome/:name',
        component: Welcome
      }
    ]
  },
  {
    path: '/activities',
    component: Activities
  },
  {
    path: '/topics',
    component: Topics
  },
  {
    path: '/books',
    component: Books
  },
  {
    path: '/events',
    component: Events
  },
  {
    path: '/reset-password',
    component: ResetPassword
  }
]

export default routes