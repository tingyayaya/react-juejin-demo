import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { observer, inject} from 'mobx-react'

import style from './style.scss'
import Button from 'react-bootstrap/Button'

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
      <div className="email panel">
        { this.state.successMsg
        ? <div className={style["success-message"]}>密码重置邮件已发送，请前往邮箱重置密码</div>
        :(<div className={style["content"]}>
            <div className={style["input-group"]}>
              <input type="text" placeholder="请输入邮箱" autoComplete="off" className={`${style.input} ${style['full-width']}`}
                value={this.state.email}
                onChange={this.handleInput.bind(this)}/>
            </div>
            <Button variant="primary" size="lg" className={`${style['submit-btn']}`} onClick={this.onsubmit.bind(this)}>发送邮件</Button>
          </div>
          )
        }
      </div>
    )
  }
}

export default EmailPanel