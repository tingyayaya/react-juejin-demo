import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Register from '@/components/modals/Register'
import weibo from '../../images/weibo.svg'
import weixin from '../../images/weixin.svg'
import github from '../../images/github.svg'

import style from './style.scss'

class SectionRegister extends Component {
  handleRegister(user) {
    console.log(user)
  }
  render() {
    return (
      <div className={`${style["section"]} ${style["w-shadow"]} ${style["section-padding"]}`}>
        <div className={style["title"]}>
          <h5>掘金 - juejin.im</h5>
          <p>一个帮助开发者成长的社区</p>
        </div>
        <div className={style["ticket"]}>
          现在注册，送你  <Link to="/books"> 45元</Link> 买小册
        </div>
        <form>
          <Register handleRegister={this.handleRegister.bind(this)} flag="home"/>
        </form>
        <div className={style["other-login"]}>
          第三方登录:
          <img src={weibo} alt="微博" />
          <img src={github} alt="github"/>
          <img src={weixin} alt="微信" />
        </div>
      </div>
    )
  }
}
export default SectionRegister