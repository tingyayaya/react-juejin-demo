import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '@/css/reset-password.scss'

import EmailPanel from '@/components/reset-password/EmailPanel'
import Nav from '@/components/reset-password/Nav'
import FreeLayout from '@/components/layout/FreeLayout'
import PrimaryLayout from '@/components/layout/PrimaryLayout'

class ResetPassword extends Component {
  constructor() {
    super() 
    this.state = {
      panel: 0
    }
  }
  onsubmit(data) {
    console.log(data)
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
        <div className="container-fluid">
          <form className="reset-password-view">
            <div className="reset-password-form">
              <div className="form-header">
                <h1 className="title">重置密码</h1>
                <Nav className="nav-item" hanleChangeTab={this.hanleChangeTab.bind(this)}>
                  <span>邮箱重置</span>
                  <span>手机重置</span>
                </Nav>
              </div>
              <div className="form-body">
                {panel === 0 ? <EmailPanel onsubmit={this.onsubmit.bind(this)}/> : '' }
                <Link to="/" className="index-link">返回首页</Link>
              </div>
            </div>
          </form>
        </div>
      </FreeLayout>
    )
  }
}
export default ResetPassword