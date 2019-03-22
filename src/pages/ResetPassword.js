import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import style from './reset-password.scss'

import EmailPanel from '@/components/reset-password/EmailPanel'
import PhonePanel from '@/components/reset-password/PhonePanel'
import Nav from '@/components/reset-password/Nav'
import FreeLayout from '@/layout/FreeLayout'


class ResetPassword extends Component {
  constructor() {
    super() 
    this.state = {
      panel: 0
    }
  }
  onsubmit(data) {
    const { email } = data
    const { phone, code, password } = data
    if(email) {

    }
    if(phone) {
      console.log(phone, code, password)
    }
  }
  hanleChangeTab(g) {
    this.setState({
      panel: g
    })
  }
  render() {
    const panel = this.state.panel
    return (
      <FreeLayout>
        <div className={style['container-fluid']}>
          <form className={style["reset-password-view"]}>
            <div className={style["reset-password-form"]}>
              <div className={style["form-header"]}>
                <h1 className={style["title"]}>重置密码</h1>
                <Nav className={style["nav-item"]} hanleChangeTab={this.hanleChangeTab.bind(this)}>
                  <span>邮箱重置</span>
                  <span>手机重置</span>
                </Nav>
              </div>
              <div className={style["form-body"]}>
                {panel === 0 ? <EmailPanel onsubmit={this.onsubmit.bind(this)}/> : <PhonePanel onsubmit={this.onsubmit.bind(this)}/> }
                <Link to="/" className={style["link"]}>返回首页</Link>
              </div>
            </div>
          </form>
        </div>
      </FreeLayout>
    )
  }
}
export default ResetPassword