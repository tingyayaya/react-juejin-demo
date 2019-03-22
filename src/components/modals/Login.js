import React, {Component, Fragment} from 'react'

import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import style from './style.scss'

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
    }).isRequired,
    validate: PropTypes.shape({
      account: PropTypes.func,
      password: PropTypes.func
    }),
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
    const flag = this._validateAccount()&&this._validatePassword();

    if(flag&&this.props.submit){
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
  _validateAccount() {
    const { account } = this.state
    const { alert, validate} = this.props.store
    const result = validate.account({value: account})
    if(result.pass){
      return true
    }else{
      alert.initAlert(result)
      return false
    }
  }
  _validatePassword(){
    const { password } = this.state
    const { alert, validate} = this.props.store
    const result = validate.password({value: password})
    if(result.pass){
      return true
    }else{
      alert.initAlert(result)
      return false
    }
  }
  componentDidMount() {
    this.account.focus()
    const { modal } = this.props.store
    modal.isClickHidden = false
  }
  render() {
    const { modal } = this.props.store
    return (
      <Fragment>
        {modal.parent=='gift' && <div className={style.gift}>完成登录后，将向你的账户存入 45 元礼券</div>}
        <div className={style["input-group"]}>
          <div className={style["input-box"]}>
            <input type="text" maxLength="64" placeholder="请输入手机号或邮箱" className={style["input"]} name="phoneOrEmail" autoComplete="off" 
              value={this.state.account}
              ref={account => this.account = account}
              onBlur={this.handleAccountBlur.bind(this)}
              onFocus={this.handleAccountFocus.bind(this)}
              onChange={this.handleInputPhone.bind(this)}/>
          </div>
          <div className={style["input-box"]}>
            <input type="password" maxLength="64" placeholder="请输入密码" className={style["input"]} name="password" autoComplete="off"
              value={this.state.password}
              onBlur={this.handlePasswordBlur.bind(this)}
              onFocus={this.handlePasswordFocus.bind(this)}
              onChange={this.handleInputPassword.bind(this)}/>
          </div>
        </div>
        <Button variant="primary" className={style.btn} onClick={this.onsubmit.bind(this)}>登录</Button>
        <div className={`${style["footer"]}`}>
          <div>没有账号？<span className={style["link"]} onClick={this.handleChangeModalName.bind(this)}>注册</span></div>
          <div><Link to="/reset-password" onClick={this.handleModalClose.bind(this)} className={style["link"]}> 忘记密码</Link></div>
        </div>
      </Fragment>
    )
  }
}
export default Login