import React, {Component} from 'react'
import Reset from './Rest'
import BaseExample from './BaseExample'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import routeConfig from './routes'

import About from './About'
import Home from './Home'
import Topics from './Topics'
import RouteWithSubRoutes from './RouteWithSubRoutes'

class PrimaryLayout extends Component {
  
  render() {
    const match = this.props.match;
    return (
      <div>
        {/* <Route  path="/reset" component={Reset} /> */}
        <Route  exact component={BaseExample} path=""/>
        {
          routeConfig.map((route, i) => {
            return <Route exact={route.exact} key={i} component={route.component} path={route.path} />
          })
        }
      </div>
    )
  }
}
export default PrimaryLayout