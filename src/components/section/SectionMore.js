import React, {Component} from 'react'

import style from './style.scss'

class SectionMore extends Component {
  render() {
    return (
      <div className={style["section-more"]}>
        <ul className={style["more-list"]}>
          <li><a href="">关于</a></li>
          <li><a href="">招聘</a></li>
          <li><a href="">商务合作</a></li>
          <li><a href="">友情链接</a></li>
        </ul>
        <ul className={style["more-list"]}>
          <li><a href="">发现更多</a></li>
          <li>&copy;2019</li>
        </ul>
        <ul className={style["more-list"]}>
          <li><a href="http://www.miibeian.gov.cn/state/outPortal/loginPortal.action">津ICP备15003202号-2</a></li>
        </ul>
        <ul className={style["more-list"]}>
          <li>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?COLLCC=1388649069&recordcode=11010802026719">京公网安备11010802026719号</a>
          </li>
        </ul>
      </div>
    )
  }
}
export default SectionMore