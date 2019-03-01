import React, {Component} from 'react'
import { HashRouter as Router, Link, Switch } from 'react-router-dom'
import routes from './routes'
import RouteWithSubRoutes from '@/layout/RouteWithSubRoutes'

////////////////////////////////////////////////////////////
// then our route config


class RouteConfigExample extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </Switch>
      </Router>
    )
  }
}
export default RouteConfigExample