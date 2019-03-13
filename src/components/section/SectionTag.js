import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

class SectionTag extends Component {
  render() {
    return (
      <div className={`${style["section"]} ${style["w-shadow"]}`}>
        <header className={style["header"]}>
          <div className={style["left"]}><span>热门标签</span> </div>
          <div className={style["right"]}>
            <Link to="/subscribe/all" className={style["more"]}>查看全部</Link></div>
        </header>
        <div className={`${style["tag-list"]} ${style["section-padding"]}`}>
          <Link to="/tag/架构" className={style["big-label"]}>架构</Link>
          <Link to="/tag/开源" className={style["big-label"]}>开源</Link>
          <Link to="/tag/算法" className={style["big-label"]}>算法</Link>
          <Link to="/tag/github" className={style["big-label"]}>github</Link>
          <Link to="/tag/面试" className={style["big-label"]}>面试</Link>
          <Link to="/tag/代码规范" className={style["big-label"]}>代码规范</Link>
          <Link to="/tag/产品" className={style["big-label"]}>产品</Link>
          <Link to="/tag/掘金翻译计划" className={style["big-label"]}>掘金翻译计划</Link>
        </div>
      </div>
    )
  }
}
export default SectionTag