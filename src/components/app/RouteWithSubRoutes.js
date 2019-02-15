import { Route } from 'react-router-dom'

const _ = (route) => (
  
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes} exact={route.exact}/>
  )}/>
) 

export default _