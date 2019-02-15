import React, {Component} from 'react'

class Topic extends Component {
  render() {
    const match = this.props.match
    return (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    )
  }
}
export default Topic