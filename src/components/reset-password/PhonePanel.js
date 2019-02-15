import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class PhonePanel extends Component {
  onsubmit(event) {
    const { password, account } = this.state
    if(this.props.submit){
      this.props.submit({password, account})
    }
    event.preventDefault();
  }
  render() {
    return (
      <div className="panel email">
        <div className="input-group">
          <input type="text" placeholder="请输入邮箱" autoComplete="off" className="input full-width"/>
          <button className="ui-btn ui-btn_primary submit-btn" onClick={this.onsubmit.bind(this)}>发送邮件</button>
        </div>
      </div>
    )
  }
}
export default PhonePanel