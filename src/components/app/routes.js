import Tacos from './Tacos';
import Main from './Main';
import Sandwiches from './Sandwiches';
import Bus from './Bus';
import Cart from './Cart';
import Content from './Content'

const routes = [
  {
    path: "/",
    exact: true,
    component: Main
  },
  {
    path: '/course',
    component: Main,
    routes: [
      {
        path: '/course/:name',
        component: Content
      }
    ]
  },
  {
    path: "/sandwiches",
    component: Sandwiches
  },
  {
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
    ]
  }
];

export default routes