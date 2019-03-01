import React, {Component} from 'react'

class CenterMain extends Component {
  render() {
    return (
      <div className="ui-col-md center-main">{this.props.children}</div>
    )
  }
}
export default CenterMain