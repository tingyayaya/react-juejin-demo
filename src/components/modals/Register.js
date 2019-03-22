import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import CaptchaBtn from '@/components/reset-password/CaptchaBtn'

import Button from 'react-bootstrap/Button'

import style from './style.scss'


@inject('store')
@observer
class Register extends Component {
  static propTypes = {
    register: PropTypes.func,
    store: PropTypes.shape({
      modal: PropTypes.shape({
        name: PropTypes.string.isRequired
      }),
      alert: PropTypes.shape({
        show: PropTypes.bool,
        initAlert: PropTypes.func
      }),
      validate: PropTypes.shape({
        phone: PropTypes.func,
        password: PropTypes.func,
        code: PropTypes.func
      })
    }).isRequired,
    
  }
  constructor() {
    super()
    this.state = {
      account: '',
      phone: '',
      password: '',
      code: '',
      showCaptchaBtn: false,
      captchaResult: ''
    }
  }
  handleInputPhone(event) {
    this.setState({
      phone: event.target.value
    })
    
    if(/^1[3|4|5|7|8][0-9]{9}$/.test(event.target.value)){
      this.setState({
        showCaptchaBtn: true
      })
    }else{
      this.setState({
        showCaptchaBtn: false
      })
    }
  }
  handleCode(event) {
    this.setState({
      code: event.target.value
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
    const { password, account, phone, code } = this.state
    const { alert } = this.props.store
    const { captchaResult } = this.state

    const flag = this._validateAccount()&&this._validatePhone()&&this._validateCode()&&this._validatePassword()
    if(flag&&this.props.register){
      
      if(!captchaResult){
        alert.initAlert({variant: 'danger', tips: '请先完成验证'})
      }else{
        this.props.register({password, account, phone, code})
      }
    }
    event.preventDefault();
  }
  handleChangeModalName() {
    const { modal } = this.props.store
    modal.name = 'login'
  }
  getCaptchaResult(result) {
    this.setState({
      captchaResult: result
    })
  }
  _validateAccount() {
    const { account } = this.state
    const { alert } = this.props.store
    if(!account){
      alert.initAlert({variant: 'danger', tips: '用户名不能为空'})
      return false
    }else{
      return true
    }
  }
  _validatePhone() {
    const { phone } = this.state
    const { alert, validate } = this.props.store
    const result = validate.phone({value: phone})
    if(result.pass){
      return true
    }else{
      alert.initAlert(result)
      return false
    }
    
  }
  _validatePassword() {
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
  _validateCode() {
    const { code } = this.state
    const { alert, validate} = this.props.store
    const result = validate.code({value: code})
    if(result.pass){
      return true
    }else{
      alert.initAlert(result)
      return false
    }
  }

  componentDidMount() {
    if(!this.props.flag){
      this.account.focus()
    }
    const { modal } = this.props.store
    modal.isClickHidden = false
  }
  render() {
    const { flag } = this.props
    const { modal } = this.props.store
    return (
      <Fragment>
        {modal.parent=='gift' && <div className={style.gift}>完成注册后，将向你的账户存入 45 元礼券</div>}
        <div className={style["input-group"]}>
            <div className={style["input-box"]}>
              <input type="text" maxLength="20" placeholder={`${ flag ? "用户名": "请输入用户名"}`} className={style["input"]} name="registerUsername" autoComplete="off"
                ref={account => this.account = account}
                value={this.state.account} onChange={this.handleInputAccount.bind(this)}/>
            </div>
            <div className={style["input-box"]}>
              <input type="text" maxLength="64" placeholder={`${ flag ? "手机号": "请输入手机号"}`} className={style["input"]} name="registerPhoneNumber" autoComplete="off"
                value={this.state.phone}
                onChange={this.handleInputPhone.bind(this)}/>
            </div>
            <div className={style["input-box"]} style={{display: this.state.showCaptchaBtn ? 'block': 'none'}}>
              <input type="text" maxLength="20" placeholder={`${ flag ? "验证码": "请输入验证码"}`} className={style["input"]} name="registerCode" autoComplete="off"
                value={this.state.code}
                onChange={this.handleCode.bind(this)}/>
                <CaptchaBtn phone={this.state.phone} getCaptchaResult={this.getCaptchaResult.bind(this)}/>
            </div>
            <div className={style["input-box"]}>
              <input type="password" maxLength="64" placeholder={`${ flag ? "密码(不少于6位)": "请输入密码(不少于6位)"}`} className={style["input"]} name="registerPassword" autoComplete="off"
                value={this.state.password}
                onChange={this.handleInputPassword.bind(this)}/>
            </div>
          </div>
          <Button variant="primary" className={style.btn} onClick={this.handleRegister.bind(this)}>{flag?'立即注册':'注册'}</Button>
          <div className={`${style["button-group"]} ${ flag && 'hide'}`}>
            <div style={{"textAlign": "center"}}><span className={`${style["link"]}`} onClick={this.handleChangeModalName.bind(this)}>已有账号登录</span></div>
          </div>
      </Fragment>
    )
  }
}
export default Register