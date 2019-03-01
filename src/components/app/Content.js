import React, {Component} from 'react'

class Content extends Component {
  render() {
    return (
      <div>{this.props.match.params.name}</div>
    )
  }
}
export default Content