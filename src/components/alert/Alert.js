import React, {Component} from 'react'
import Alert from 'react-bootstrap/Alert'
import "bootstrap/scss/bootstrap.scss"
import { inject, observer } from 'mobx-react'

@inject("store")
@observer
class AlertPanel extends Component {
  constructor() {
    super()
    this.state={
      show: true
    }
  }
  hanleOnClose() {

  }
  componentWillReceiveProps() {
    const {alert} = this.props
    console.log(alert.show)
  }
  render() {
    const {alert} = this.props
    return (
      <Alert variant={alert.variant} show={alert.show} onClose={this.hanleOnClose.bind(this)}>{alert.tips}</Alert>
    )
  }
}
export default AlertPanel