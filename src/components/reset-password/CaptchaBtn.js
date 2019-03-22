import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { observer, inject} from 'mobx-react'
import axios from 'axios'
import "@/components/libs/gt"

import Button from 'react-bootstrap/Button'
import Tick from './Tick'
import classNames from 'classnames'

import style from './style.scss'

@inject("store")
@observer
class CaptchaBtn extends Component {
  static propTypes = {
    store: PropTypes.shape({
      alert: PropTypes.shape({
        show: PropTypes.bool,
        initAlert: PropTypes.func
      })
    }),
    phone: PropTypes.string,
    parent: PropTypes.string,
    validate: PropTypes.shape({
      phone: PropTypes.func
    }),
  }
  constructor() {
    super() 
    this.state = {
      phone: '',
      captchaObj: null,
      tick: false
    }
  }
  tick(timer){
    
    if(!timer) {
      this.setState({
        tick: false
      })
      this.state.captchaObj.reset()
    }
  }
  handleVCode() {
    
    event.preventDefault();
  }
  _validatePhone(){
    const { phone } = this.state
    const { alert, validate} = this.props.store
    const result = validate.phone({value: phone})
    if(result.pass){
      this._validateCaptcha()
      return true
    }else{
      alert.initAlert(result)
      this.state.captchaObj.reset()
      return false
    }
  }
  _handlerGt(captchaObj) {
    const captcha = this.refs.captcha
    const _this = this;
    captchaObj.appendTo(captcha)
    captchaObj.onSuccess(function () {
      
      _this.setState({
        captchaObj: captchaObj
      })
      _this._validatePhone()
    })
    
  }
  _validateCaptcha() {
    const { alert } = this.props.store
    const result = this.state.captchaObj.getValidate();
    if(this.props.getCaptchaResult){
      this.props.getCaptchaResult(result)
    }
    const _this = this;
    axios.post("gt/validate-click?t=" + (new Date()).getTime(),{
      geetest_challenge: result.geetest_challenge,
      geetest_validate: result.geetest_validate,
      geetest_seccode: result.geetest_seccode
    })
    .then(function(data) {
      if(data.data.status=='success'){
        alert.initAlert({variant: 'success', tips: '发送成功'})
        _this.setState({
          tick: true
        })
      }else{
        alert.initAlert({variant: 'danger', tips: '失败'})
      }
    })
  }
  componentWillReceiveProps(nextProps) {
    this.setState({phone: nextProps.phone})
  }
  componentDidMount() {
    const _this = this;
    axios.get("gt/register-click?t=" + (new Date()).getTime())
    .then(function(data) {
      initGeetest({
          // 以下 4 个配置参数为必须，不能缺少
          gt: data.data.gt,
          challenge: data.data.challenge,
          offline: !data.data.success, // 表示用户后台检测极验服务器是否宕机
          new_captcha: data.data.new_captcha, // 用于宕机时表示是新验证码的宕机
          product: "popup", // 产品形式，包括：float，popup
          width: "80px"
          // 更多配置参数说明请参见：http://docs.geetest.com/install/client/web-front/
      }, _this._handlerGt.bind(_this))
    })
    .catch(function(error) {
      console.log(error)
    })
  }
  render() {
    let button, btnbox;
    if(this.props.parent) {
      button =  <Button variant="primary" size="lg" className={style.btn1}>获取验证码</Button>
    }else{
      button = <span className={style.btn2}>获取验证码</span>
    }
    btnbox = classNames({
      [style['send-vcode-btn']]: true,
      [style.pos]: !this.props.parent,
      [style.box] : !this.state.tick
    })
    return (
      <div className={btnbox}>
        {this.state.tick 
          ? <Tick tick={this.tick.bind(this)} seconds={60}/>
          : button
        }
        <div ref="captcha" onClick={this.handleVCode.bind(this)}></div>
      </div>
    )
  }
}
export default CaptchaBtn