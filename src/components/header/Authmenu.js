import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import { observer, inject} from 'mobx-react'
import { trace } from "mobx"

import Onlog from './Onlog'
import Offlog from './Offlog'

@inject("store")
@observer
class Authmenu extends Component {
  static propTypes = {
    store: PropTypes.shape({
      user: PropTypes.shape({
        status: PropTypes.bool.isRequired
      })
    }).isRequired
  }

  render() {trace(false)
    const { user } = this.props.store
    console.log(user.status)
    return (
      <Fragment>
        { user.status ? <Onlog /> : <Offlog /> }
      </Fragment>
    )
  }
}
export default Authmenu