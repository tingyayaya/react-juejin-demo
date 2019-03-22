import React, {Component} from 'react'
import Icon from '@mdi/react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { mdiClose } from '@mdi/js'
import loginNormal from '../../images/login-normal.png'
import loginGreeting from '../../images/login-greeting.png'
import loginBlindfold from '../../images/login-blindfold.png'
import weibo from '../../images/weibo.svg'
import weixin from '../../images/weixin.svg'
import github from '../../images/github.svg'

import Login from './Login'
import Register from './Register';

import style from './style.scss'

@inject('store')
@observer
class ModalLogin extends Component {
  static propTypes = {
    store: PropTypes.shape({
      modal: PropTypes.shape({
        isShow: PropTypes.bool.isRequired,
        onHideModal: PropTypes.func,
        name: PropTypes.string.isRequired
      })
    }).isRequired
  }
  constructor() {
    super()
    this.state = {
      onfocus: 'greeting'
    }
  }
  handleLoginModal(event) {
    const { modal } = this.props.store
    if(modal.onHideModal){
      modal.onHideModal()
    }
    event.nativeEvent.stopImmediatePropagation(); 
    event.stopPropagation();
  }
 
  handleFocus(flag){
    this.setState({
      onfocus: flag
    })
  }
  handleSubmit(user) {
   
  }
  handleRegister(user) {
    console.log(user)
  }
  render() {
    const { modal } = this.props.store
    return (
      <form className={style["auth-form"]}>
        <div className={style["panfish"]} style={modal.name==='login' ? {display: ''} : { display: 'none'}}>
          <img src={ loginGreeting } alt="" style={this.state.onfocus==='greeting' ? {display: ''} : { display: 'none'} } className={style["greeting"]}/>
          <img src={ loginBlindfold } alt="" style={this.state.onfocus==='blindfold' ? {display: ''} :  { display: 'none'}} className={style["blindflod"]}/>
          <img src={ loginNormal } alt="" className={style["normal"]} style={this.state.onfocus==='normal' ?  {display: ''} : { display: 'none'}}/>
        </div>
        <Icon path={ mdiClose } size={1} className={style["close"]} onClick={this.handleLoginModal.bind(this)}/>
        <header className={style["title"]}>{modal.name==='login' ? '登录' : '注册'}</header>
       
        {modal.name==='login' 
          ? <Login submit={this.handleSubmit.bind(this)} changeFoucs={this.handleFocus.bind(this)}/> 
          : <Register handleRegister={this.handleRegister.bind(this)} /> }
        <div className={style["other-login"]}>
          <div className={style["other-title"]}>第三方账号登录</div>
          <div className={style["oauth"]}>
            <div className={`${style["oauth-bg"]} ${style["flex-view-center-all"]}`}>
              <img src={weibo} alt="微博" />
            </div>
            <div className={`${style["oauth-bg"]} ${style["flex-view-center-all"]}`}>
              <img src={weixin} alt="github" />
            </div>
            <div className={`${style["oauth-bg"]} ${style["flex-view-center-all"]}`}><img src={github} alt="微信" /></div>
          </div>
        </div>
      </form>
    )
  }
}
export default ModalLogin