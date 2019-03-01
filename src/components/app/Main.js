import React, {Component} from 'react'
import { Link, Route,NavLink } from 'react-router-dom'
import Course from './Course'
import RouteWithSubRoutes from '@/layout/RouteWithSubRoutes'

class Main extends Component {
  render() {
    const { routes } = this.props
    const props = this.props
    console.log(this.props)
    return (
      <div>
        <ul>
          <li>
            <Link to="/tacos">Tacos</Link>
          </li>
          <li>
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
        </ul>
        <Course {...props}/>
        {/* {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)} */}
      </div>
      
    )
  }
}
export default Main