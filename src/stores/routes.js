import {computed, observable, action } from "mobx";
import Activities from '../components/activities/Activities';

 
var routes = observable([
  {
    path: '/',
    exact: true,
    component: Activities
  },
  {
    path: '/activities',
    component: Activities
  },
  {
    path: '/topics',
    component: Activities
  },
  {
    path: '/books',
    component: Activities
  },
  {
    path: '/events',
    component: Activities
  },
])

export default routes