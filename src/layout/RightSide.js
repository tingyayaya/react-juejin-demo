import React, {Component} from 'react'

class RightSide extends Component {
  render() {
    return (
      <div className="ui-col-md right-side">{this.props.children}</div>
    )
  }
}
export default RightSide