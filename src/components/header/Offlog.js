import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { observer, inject} from 'mobx-react'
import submitIcon from '../../images/submit-icon.svg'
import { trace } from "mobx"
import Panel from './Panel'

import style from './style.scss'

@inject("store")
@observer
class Offlog extends Component {
  static propTypes = {
    store: PropTypes.shape({
      panel: PropTypes.shape({
        isShow: PropTypes.bool.isRequired,
        onHideModal: PropTypes.func,
        onShowModal: PropTypes.func
      }),
      modal: PropTypes.shape({
        isShow: PropTypes.bool.isRequired,
        onHideModal: PropTypes.func,
        onShowModal: PropTypes.func,
        name: PropTypes.string.isRequired
      })
    }).isRequired,
    
  }
  
  handleShowModal(event) {
    const { panel } = this.props.store
    if(panel.onShowModal){
      panel.onShowModal()
    }
    event.nativeEvent.stopImmediatePropagation();
    event.stopPropagation()
  }
  handleLoginModal(event) {
    const { modal } = this.props.store
    if(modal.onShowModal){
      modal.name = 'login'
      modal.onShowModal()
    }
    // event.nativeEvent.stopImmediatePropagation();
    // event.stopPropagation()
  }
  handleRegisterModal(event) {
    const { modal } = this.props.store
    if(modal.onShowModal){
      modal.name = 'register'
      modal.onShowModal()
    }
    // event.nativeEvent.stopImmediatePropagation();
    // event.stopPropagation()
  }
  render() {trace(false)
    const { panel } = this.props.store;
    return (
      <ul className={style["auth-menu"]}>
        <li className={style.article} onClick={this.handleShowModal.bind(this)}>
          <img src={submitIcon} alt="" />
          <span>写文章</span>
          {panel.isShow && <Panel />}
        </li><li className={style.register}>
          <span className={style['login-btn']} 
          onClick={this.handleLoginModal.bind(this)}>登录</span><span className={style['register-btn']}
          onClick={this.handleRegisterModal.bind(this)}>注册</span>
        </li>
      </ul>
    )
  }
}
export default Offlog