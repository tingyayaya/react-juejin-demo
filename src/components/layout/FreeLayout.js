import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { observer, inject} from 'mobx-react'

import Alert from '@/components/alert/Alert'


@inject("store")
@observer
class FreeLayout extends Component {
  constructor() {
    super()
  }
  hanleOnClose() {

  }
  componentDidMount() {
    const {alert} = this.props.store
    alert.initAlert({variant: 'danger', tips: '请输入'})
  }
  componentWillReceiveProps() {
    const {alert} = this.props.store
    console.log(alert.show)
  }
  render() { 
    const {alert} = this.props.store
    console.log(alert)
    return (
      <div>
        <div className="global-component-box">
          <div className="alert-list">
            <Alert alert={alert}/>
          </div>
        </div>
        <div>
        {this.props.children}
        </div>
      </div>
    )
  }
}
export default FreeLayout