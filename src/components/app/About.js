import React, {Component} from 'react'
import BaseExample from './BaseExample'

class About extends Component {
  render() {
    const {match} = this.props;
    console.log(match)
    return (
      <BaseExample {...this.props}>
        <div>
          <h2>About</h2>
        </div>
      </BaseExample>
    )
  }
}
export default About