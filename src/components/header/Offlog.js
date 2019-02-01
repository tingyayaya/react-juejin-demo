import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { observer, inject} from 'mobx-react'
import submitIcon from '../../images/submit-icon.svg'
import Panel from './Panel'
import { trace } from "mobx"

@inject("store")
@observer
class Offlog extends Component {
  static propTypes = {
    store: PropTypes.shape({
      panel: PropTypes.shape({
        isShow: PropTypes.bool.isRequired,
        onHideModal: PropTypes.func,
        onShowModal: PropTypes.func
      })
    }).isRequired
  }
  
  handleShowModel(event) {
    const { panel } = this.props.store
    if(panel.onShowModal){
      panel.onShowModal()
    }
    event.nativeEvent.stopImmediatePropagation();
    event.stopPropagation()
  }
 
  render() {trace(false)
    return (
      <ul className="auth-menu">
        <li className="article" onClick={this.handleShowModel.bind(this)}>
          <img src={submitIcon} alt="" />
          <span >写文章</span>
          <Panel />
        </li><li className="register">
          <span className="login-btn">登录</span><span className="register-btn">注册</span>
        </li>)
      </ul>
    )
  }
}
export default Offlog