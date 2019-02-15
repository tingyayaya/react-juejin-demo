import React, {Component, Fragment} from 'react'

import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

@inject('store')
@observer
class Login extends Component {
  static propTypes = {
    changeFoucs: PropTypes.func,
    submit: PropTypes.func,
    store: PropTypes.shape({
      modal: PropTypes.shape({
        name: PropTypes.string.isRequired,
        onHideModal: PropTypes.fuc
      })
    }).isRequired
  }
  constructor() {
    super()
    this.state = {
      accountFocus: true,
      passwordFocus: false,
      account: '',
      password: ''
    }
  }
  handleModalClose(event) {
    const { modal } = this.props.store
    if(modal.onHideModal){
      modal.onHideModal()
    }
    event.nativeEvent.stopImmediatePropagation(); 
    event.stopPropagation();
  }
  handleChangeModalName(){
    const { modal } = this.props.store
    modal.name = 'register'
  }
  handleInputPhone(event) {
    this.setState({
      account: event.target.value
    })
  }
  handleInputPassword(event) {
    this.setState({
      password: event.target.value
    })
  }
  onsubmit(event) {
    const { password, account } = this.state
    if(this.props.submit){
      this.props.submit({password, account})
    }
    event.preventDefault();
  }
  handleAccountBlur() {
    this.setState({
      accountFocus: false
    },() => {
      const changeFoucs = this._changeFoucs()
      if(this.props.changeFoucs){
        this.props.changeFoucs(changeFoucs)
      }
    })
  }
  handleAccountFocus() {
    this.setState({
      accountFocus: true
    },() => {
      const changeFoucs = this._changeFoucs()
      if(this.props.changeFoucs){
        this.props.changeFoucs(changeFoucs)
      }
    })
  }
  handlePasswordBlur() {
    this.setState({
      passwordFocus: false
    },() => {
      const changeFoucs = this._changeFoucs()
      if(this.props.changeFoucs){
        this.props.changeFoucs(changeFoucs)
      }
    })
  }
  handlePasswordFocus() {
    this.setState({
      passwordFocus: true
    },() => {
      const changeFoucs = this._changeFoucs()
      if(this.props.changeFoucs){
        this.props.changeFoucs(changeFoucs)
      }
    })
  }
  _changeFoucs() {
    if(this.state.accountFocus){
      return 'greeting'
    }else if(this.state.passwordFocus){
      return 'blindfold'
    }else if(!this.state.passwordFocus&&!this.state.accountFocus){
      return 'normal'
    }
  }
  componentDidMount() {
    this.account.focus()
  }
  render() {
    return (
      <Fragment>
        <div className="input-group">
          <div className="input-box">
            <input type="text" maxLength="64" placeholder="请输入手机号或邮箱" className="input" name="phoneOrEmail" autoComplete="off" 
              value={this.state.account}
              ref={account => this.account = account}
              onBlur={this.handleAccountBlur.bind(this)}
              onFocus={this.handleAccountFocus.bind(this)}
              onChange={this.handleInputPhone.bind(this)}/>
          </div>
          <div className="input-box">
            <input type="password" maxLength="64" placeholder="请输入密码" className="input" name="password" autoComplete="off"
              value={this.state.password}
              onBlur={this.handlePasswordBlur.bind(this)}
              onFocus={this.handlePasswordFocus.bind(this)}
              onChange={this.handleInputPassword.bind(this)}/>
          </div>
        </div>
        <button className="ui-btn ui-btn_primary" onClick={this.onsubmit.bind(this)}>登录</button>
        <div className="button-group">
          <div>没有账号？<span className="link" onClick={this.handleChangeModalName.bind(this)}>注册</span></div>
          <div><Link to="/reset-password" onClick={this.handleModalClose.bind(this)} className="link"> 忘记密码</Link></div>
        </div>
      </Fragment>
    )
  }
}
export default Login