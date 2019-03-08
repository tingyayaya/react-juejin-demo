import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class SectionTag extends Component {
  render() {
    return (
      <div className="section tag w-shadow">
        <header className="header">
          <div className="left"><span>热门标签</span> </div>
          <div className="right">
            <Link to="/subscribe/all" className="more">查看全部</Link></div>
        </header>
        <div className="tag-list section-padding">
          <Link to="/tag/架构" className="big-label">架构</Link>
          <Link to="/tag/开源" className="big-label">开源</Link>
          <Link to="/tag/算法" className="big-label">算法</Link>
          <Link to="/tag/github" className="big-label">github</Link>
          <Link to="/tag/面试" className="big-label">面试</Link>
          <Link to="/tag/代码规范" className="big-label">代码规范</Link>
          <Link to="/tag/产品" className="big-label">产品</Link>
          <Link to="/tag/掘金翻译计划" className="big-label">掘金翻译计划</Link>
        </div>
      </div>
    )
  }
}
export default SectionTag