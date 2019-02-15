import React, {Component, Fragment} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PropTypes from 'prop-types'
import { observer, inject} from 'mobx-react'

@inject("store")
@observer
class Content extends Component {
  render() {
    const { routes } = this.props.store
    return (
      <Fragment>
        <Switch>
          {routes.map((item, i) => 
            (<Route path={item.path} component={item.component} key={i} exact={item.exact}/>)
          )}
        </Switch>
      </Fragment>
    )
  }
}
export default Content