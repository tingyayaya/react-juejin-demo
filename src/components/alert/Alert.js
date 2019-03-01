import React, {Component} from 'react'
import Alert from 'react-bootstrap/Alert'
import "bootstrap/scss/bootstrap.scss"
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

import "./style.scss"

@inject("store")
@observer
class AlertPanel extends Component {
  static propTypes = {
    store: PropTypes.shape({
      alert: PropTypes.shape({
        show: PropTypes.bool,
        initAlert: PropTypes.func
      })
    })
  }
  constructor() {
    super()
    this.state={
      show: false
    }
  }
  hanleOnClose() {

  }
  render() {
    const {alert} = this.props
    return (
      <div className="alert-box">
        <Alert variant={alert.variant} show={alert.show} onClose={this.hanleOnClose.bind(this)}>{alert.tips}</Alert>
      </div>
    )
  }
}
export default AlertPanel