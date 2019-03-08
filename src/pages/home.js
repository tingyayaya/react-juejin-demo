import React, {Component} from 'react'
import { Route, Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import PrimaryLayout from '@/layout/PrimaryLayout'
import RightSide from '@/layout/RightSide'
import CenterMain from '@/layout/CenterMain'
import PrimaryNav from '@/components/nav/PrimaryNav'
import RouteWithSubRoutes from '@/layout/RouteWithSubRoutes'
import Welcome from '@/pages/Welcome'
import DiamondsLoading from '@/components/loading/DiamondsLoading'
import SectionRegister from '@/components/section/SectionRegister'
import SectionTag from '@/components/section/SectionTag'
import SectionCarousel from '@/components/section/SectionCarousel'
import SectionDownload from '@/components/section/SectionDownload'
import SectionOtherItem from '@/components/section/SectionOtherItem'
import SectionFooter from '@/components/section/SectionFooter'
import SectionMore from '@/components/section/SectionMore'

import '@/css/home.scss'

@inject('store')
@observer
class Home extends Component {
  static propTypes = {
    store: PropTypes.shape({
      homeApi: PropTypes.shape({
        entryList: PropTypes.array,
        bookList: PropTypes.array,
        getList: PropTypes.func,
        getBookList:PropTypes.func
      })
    }).isRequired
  }
  constructor() {
    super()
  }
  handleChangeTab(name) {
    this.props.store.homeApi.getList({ name })
  }
  componentWillMount() {
    this.props.store.homeApi.getList({name: ''})
    this.props.store.homeApi.getBookList({name: ''})
  }
  render() {
    const { routes, match, location } = this.props
    return (
      <PrimaryLayout>
        <CenterMain>
          <nav className="category-nav">
            <h5>热门文章</h5>
            <div className="nav-more">显示更多</div>
            <ul className="nav-list">
              <PrimaryNav {...location} handleChangeTab={this.handleChangeTab.bind(this)}>
                <li name=""><Link to={`/`}>推荐</Link></li>
                <li name="frontend"><Link to={`/welcome/frontend`}>前端</Link></li>
                <li name="android"><Link to={`/welcome/android`}>Android</Link></li>
                <li name="backend"><Link to={`/welcome/backend`}>后端</Link></li>
                <li name="ai"><Link to={`/welcome/ai`}>人工智能</Link></li>
                <li name="ios"><Link to={`/welcome/ios`}>IOS</Link></li>
                <li name="freebie"><Link to={`/welcome/freebie`}>工具资源</Link></li>
                <li name="article"><Link to={`/welcome/article`}>阅读</Link></li>
                <li name="devops"><Link to={`/welcome/devops`}>运维</Link></li>
              </PrimaryNav>
            </ul>
          </nav>
          { match.url !== "/"
            ? routes.map((route, i) => <RouteWithSubRoutes key={i} {...route}/>)
            : <Route  path="/" component={ Welcome }/>}
        </CenterMain>
        <RightSide>
          <SectionRegister />
          <SectionTag />
          <SectionCarousel />
          <SectionDownload />
          <SectionOtherItem />
          <SectionFooter />
          <SectionMore />
        </RightSide>
      </PrimaryLayout>
    )
  }
}
export default Home