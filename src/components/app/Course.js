import React, {Component} from 'react'
import {NavLink, Route} from 'react-router-dom'
import Main from './Main'
import RouteWithSubRoutes from '@/layout/RouteWithSubRoutes'

class Course extends Component {
  render() {
    let { match } = this.props;
    let { routes } = this.props;
    console.log(this.props)
    // console.log(routes)
    return(
      <div className="list">
        <NavLink to={`/course/front-end`}>前端技术</NavLink>
        <NavLink to={`/course/big-data`}>大数据</NavLink>
        <NavLink to={`/course/algorithm`}>算法</NavLink>
        {routes ? routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />): <div>front-end</div>}
        
        {/* <Route path={`${match.path}/:name`} render={(props) => <div>{props.match.params.name}</div>}/> */}
      </div>  
      ) 
  }
}
export default Course