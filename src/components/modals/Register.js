import React, {Component, Fragment} from 'react'

import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class Register extends Component {
  static propTypes = {
    register: PropTypes.func,
    store: PropTypes.shape({
      modal: PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    }).isRequired
  }
  constructor() {
    super()
    this.state = {
      account: '',
      phone: '',
      password: ''
    }
  }
  handleInputPhone(event) {
    this.setState({
      phobe: event.target.value
    })
  }
  handleInputAccount(event) {
    this.setState({
      account: event.target.value
    })
  }
  handleInputPassword(event) {
    this.setState({
      password: event.target.value
    })
  }
  handleRegister(event) {
    const { password, account, phone } = this.state
    if(this.props.register){
      this.props.register({password, account, phone})
    }
    event.preventDefault();
  }
  handleChangeModalName() {
    const { modal } = this.props.store
    modal.name = 'login'
  }
  componentDidMount() {
    this.account.focus()
  }
  render() {
    return (
      <Fragment>
        <div className="input-group">
            <div className="input-box">
              <input type="text" maxLength="20" placeholder="请输入用户名" className="input" name="registerUsername" autoComplete="off"
                ref={account => this.account = account}
                value={this.state.account} onChange={this.handleInputAccount.bind(this)}/>
            </div>
            <div className="input-box">
              <input type="text" maxLength="64" placeholder="请输入手机号" className="input" name="registerPhoneNumber" autoComplete="off"
                value={this.state.phone}
                onChange={this.handleInputPhone.bind(this)}/>
            </div>
            <div className="input-box">
              <input type="password" maxLength="64" placeholder="请输入密码(不少于6位)" className="input" name="registerPassword" autoComplete="off"
                value={this.state.password}
                onChange={this.handleInputPassword.bind(this)}/>
            </div>
          </div>
          <button className="ui-btn ui-btn_primary" onClick={this.handleRegister.bind(this)}>注册</button>
          <div className="button-group">
            <div style={{"margin": "0 auto"}}><span className="register" onClick={this.handleChangeModalName.bind(this)} className="link">已有账号登录</span></div>
          </div>
      </Fragment>
    )
  }
}
export default Register