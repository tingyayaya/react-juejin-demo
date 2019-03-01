import React, {Component} from 'react'
import { Route, Link } from "react-router-dom";

import PrimaryLayout from '@/layout/PrimaryLayout'
import RightSide from '@/layout/RightSide'
import CenterMain from '@/layout/CenterMain'
import PrimaryNav from '@/components/nav/PrimaryNav'
import RouteWithSubRoutes from '@/layout/RouteWithSubRoutes'

import '@/css/home.scss'

class Home extends Component {
  render() {
    const { routes, match } = this.props
    return (
      <PrimaryLayout>
        <CenterMain>
        <nav className="category-nav">
          <h5>热门文章</h5>
          <div className="nav-more">显示更多</div>
          <ul className="nav-list">
            <PrimaryNav>
              <li className="active"><Link to={`/`}>推荐</Link></li>
              <li><Link to={`/welcome/frontend`}>前端</Link></li>
              <li><Link to={`/welcome/android`}>Android</Link></li>
              <li><Link to={`/welcome/backend`}>后端</Link></li>
              <li><Link to={`/welcome/ai`}>人工智能</Link></li>
              <li><Link to={`/welcome/ios`}>IOS</Link></li>
              <li><Link to={`/welcome/freebie`}>工具资源</Link></li>
              <li><Link to={`/welcome/article`}>阅读</Link></li>
              <li><Link to={`/welcome/devops`}>运维</Link></li>
            </PrimaryNav>
          </ul>
        </nav>
        { match.url !== "/"
          ? routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />): <div>front-end</div>}
        </CenterMain>
        <RightSide>
          <div>我是侧边的啊</div>
        </RightSide>
      </PrimaryLayout>
    )
  }
}
export default Home