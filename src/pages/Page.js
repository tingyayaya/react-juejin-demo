import React, {Component} from 'react'
import { HashRouter as Router, Switch, Route, Link, withRouter, Redirect} from "react-router-dom";

import routes from '@/stores/routes'
import RouteWithSubRoutes from '@/layout/RouteWithSubRoutes'

class Page extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          <Route path="/error" render={(props) => <div><h1>404 Not Found!</h1></div>}/>
          <Route path="*" render={(props) => <Redirect to='/error'/>}/>
        </Switch>
      </Router>
    )
  }
}
export default Page