import React, {Component} from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'
import RouteWithSubRoutes from '@/layout/RouteWithSubRoutes'

class Tacos extends Component{
  render() {
    const { routes } = this.props
    console.log(routes)
    return(
      <div>
        <h2>Tacos</h2>
        <ul>
          <li>
            <Link to={`/tacos/bus`}>Bus</Link>
          </li>
          <li>
            <Link to={`/tacos/cart`}>Cart</Link>
          </li>
        </ul>
        
        {/* {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)} */}
      </div>
    )
   
  }
}
export default Tacos