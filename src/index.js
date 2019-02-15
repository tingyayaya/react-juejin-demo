import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { HashRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";


import store from './stores/store'
import routes from './stores/routes'

//layout

import Page from '@/pages/Page'


ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <Switch>
        <Page />
        {/* <Route component={Home} path="" exact/>
        {
          routes.map((route, i) => {
            console.log(route)
            return <Route exact={route.exact} key={i} component={route.component} path={route.path} />
          })
        } */}
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('#root')
)
