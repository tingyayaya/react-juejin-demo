import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { observer, inject} from 'mobx-react'
import { trace } from "mobx"

import UserDropList from './UserDropList'

@inject("store")
@observer
class Authmenu extends Component {
  static propTypes = {
    store: PropTypes.shape({
      user: PropTypes.shape({
        username: PropTypes.string,
        avatar: PropTypes.string,
        status: PropTypes.bool.isRequired
      })
    }).isRequired
  }
  constructor() {
    super()
    this.state={
      isDrop: false,
      isUserDrop: false
    }
  }
  handleMoreList(event) {
    const isDrop = this.state.isDrop;
    this.setState({
      isDrop: !isDrop
    })
    event.nativeEvent.stopImmediatePropagation();
    event.stopPropagation()
    return false
  }
  handleUserDropList(event) {
    const isUserDrop = this.state.isUserDrop;
    this.setState({
      isUserDrop: !isUserDrop
    })
    event.nativeEvent.stopImmediatePropagation();
    event.stopPropagation()
  }
  componentDidMount() {
    document.addEventListener('click', () =>{
      if(this.state.isUserDrop){
        this.setState({
          isUserDrop: false,
        })
      }
      if(this.state.isDrop){
        this.setState({
          isDrop: false,
        })
      }
    })
  }
  render() {trace(false)
    const { user } = this.props.store
    return (
      <ul className="auth-menu onlog-status">
        <li className="write-article">
          <div className="add-group">
            <button className="add-btn ui-btn ui-btn_primary">写文章</button>
            <div className="more ui-btn ui-btn_primary" onClick={this.handleMoreList.bind(this)}><i className="more-icon ion-android-arrow-dropdown"></i></div>
            <ul className={`more-list ${this.state.isDrop ? '' : 'hide'}`}>
              <li className="item">发布沸点</li>
              <li className="item">分享链接</li>
            </ul>
          </div>
        </li>
        <li className="message"><i className="icon-bell"></i></li>
        <li className="avatar" onClick={this.handleUserDropList.bind(this)}>
          <div className="round-box">
            <img src={user.avatar} alt=""/>
          </div>
          <UserDropList isUserDrop={this.state.isUserDrop}/>
        </li>
      </ul>
    )
  }
}
export default Authmenu