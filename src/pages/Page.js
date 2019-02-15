import React, {Component} from 'react'
import { HashRouter as Router, Switch, Route, Link, withRouter, Redirect} from "react-router-dom";

import Home from '@/pages/Home'
import routes from '@/stores/routes'

class Page extends Component {
  render() {
    const match = this.props.match
    return (
      <div>
        {
          routes.map((route, i) => {
            return <Route exact={route.exact} key={i} component={route.component} path={route.path} />
          })
        }
      </div>
    )
  }
}
export default Page