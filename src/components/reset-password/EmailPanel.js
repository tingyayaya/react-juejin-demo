import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { observer, inject} from 'mobx-react'

@inject("store")
@observer
class EmailPanel extends Component {
  static propTypes = {
    onsubmit: PropTypes.func,
    store: PropTypes.shape({
      alert: PropTypes.shape({
        show: PropTypes.bool,
        initAlert: PropTypes.func
      }),
      validate: PropTypes.shape({
        email: PropTypes.func
      }),
    })
  }
  constructor() {
    super()
    this.state = {
      email: '',
      show: true,
      successMsg: false
    }
  }
  handleInput(event) {
    this.setState({
      email: event.target.value
    })
  }
  onsubmit(event) {
    this._validateEmail()
    event.preventDefault();
  }

  _validateEmail(){
    const { email } = this.state
    const { alert, validate} = this.props.store
    const result = validate.email({value: email})
    if(result.pass){
      return true
    }else{
      alert.initAlert(result)
      return false
    }
  }
  render() {
    return (
      <div className="panel email">
        { this.state.successMsg
        ? <div className="success-message">密码重置邮件已发送，请前往邮箱重置密码</div>
        :(<div className="content">
            <div className="input-group">
              <input type="text" placeholder="请输入邮箱" autoComplete="off" className="input full-width"
                value={this.state.email}
                onChange={this.handleInput.bind(this)}/>
            </div>
            <button className="ui-btn ui-btn_primary submit-btn" onClick={this.onsubmit.bind(this)}>发送邮件</button>
          </div>
          )
        }
      </div>
    )
  }
}

export default EmailPanel