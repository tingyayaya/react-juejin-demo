import React, {Component} from 'react'

import style from './style.scss'

class CenterMain extends Component {
  render() {
    return (
      <div className={`ui-col-md ${style['center-main']}`}>{this.props.children}</div>
    )
  }
}
export default CenterMain