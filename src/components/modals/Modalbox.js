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

import './style.scss'

import Login from './Login'
import Register from './Register';

@inject('store')
@observer
class Modalbox extends Component {
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
      <div className="auth-modal-box">
        <form className="auth-form">
          <div className="panfish" style={modal.name==='login' ? {display: ''} : { display: 'none'}}>
            <img src={ loginGreeting } alt="" style={this.state.onfocus==='greeting' ? {display: ''} : { display: 'none'} } className="greeting"/>
            <img src={ loginBlindfold } alt="" style={this.state.onfocus==='blindfold' ? {display: ''} :  { display: 'none'}} className="blindflod"/>
            <img src={ loginNormal } alt="" className="normal" style={this.state.onfocus==='normal' ?  {display: ''} : { display: 'none'}}/>
          </div>
          <Icon path={ mdiClose } size={1} className="close" onClick={this.handleLoginModal.bind(this)}/>
          <header className="title">{modal.name==='login' ? '登录' : '注册'}</header>
          {modal.name==='login' 
            ? <Login submit={this.handleSubmit.bind(this)} changeFoucs={this.handleFocus.bind(this)}/> 
            : <Register handleRegister={this.handleRegister.bind(this)} /> }
          <div className="other-login">
            <div className="other-title">第三方账号登录</div>
            <div className="oauth ">
              <div className="oauth-bg flex-view-center-all">
                <img src={weibo} alt="微博" />
              </div>
              <div className="oauth-bg flex-view-center-all">
                <img src={weixin} alt="github" />
              </div>
              <div className="oauth-bg flex-view-center-all"><img src={github} alt="微信" /></div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default Modalbox