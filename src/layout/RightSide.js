import React, {Component} from 'react'

import style from './style.scss'

class RightSide extends Component {
  render() {
    return (
      <div className={`ui-col-md ${style['right-side']}`}>{this.props.children}</div>
    )
  }
}
export default RightSide