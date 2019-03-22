import Home from '@/pages/Home';
import Activities from '@/pages/Activities';
import Topics from '@/pages/Topics';
import Events from '@/pages/Events';
import Books from '@/pages/Books';
import ResetPassword from '@/pages/ResetPassword';
import Welcome from '@/pages/Welcome';
 
import MyLoading from '@/components/loading/MyLoading'

import Loadable from 'react-loadable'
const AsyncHome = Loadable({
  loader: () => import('@/pages/Home'),
  loading: MyLoading
});
const AsyncWecome = Loadable({
  loader: () => import('@/pages/Welcome'),
  loading: MyLoading
});

var routes =[
  {
    path: '/',
    exact: true,
    component: AsyncHome
  },
  {
    path: '/welcome',
    component: AsyncHome,
    routes: [
      {
        path: '/welcome/:name',
        component: AsyncWecome
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