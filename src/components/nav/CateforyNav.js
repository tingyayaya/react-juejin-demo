import React, {Component} from 'react'
import { Link, Route } from 'react-router-dom'
import  './style.scss'

import PrimaryNav from '@/components/nav/PrimaryNav'
import RouteWithSubRoutes from '@/layout/RouteWithSubRoutes'

class CateforyNav extends Component {
  handleChangeTab(i) {
    console.log(i)
  }
  render() {
    const { routes } = this.props
    const { match } = this.props
    console.log(this.props)
    return (
      <div>
        <nav className="category-nav">
        <h5>热门文章</h5>
        <div className="nav-more">显示更多</div>
        <ul className="nav-list">
          <PrimaryNav>
            <Link to={`/`}>推荐</Link>
            <Link to={`/welcome/frontend`}>前端</Link>
            <Link to={`/welcome/android`}>Android</Link>
            <Link to={`/welcome/backend`}>后端</Link>
            <Link to={`/welcome/ai`}>人工智能</Link>
            <Link to={`/welcome/ios`}>IOS</Link>
            <Link to={`/welcome/freebie`}>工具资源</Link>
            <Link to={`/welcome/article`}>阅读</Link>
            <Link to={`/welcome/devops`}>运维</Link>
          </PrimaryNav>
        </ul>
      </nav>
        { match.url !== "/"
          ? routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />): <div>front-end</div>}
      </div>
      
    )
  }
}
export default CateforyNav