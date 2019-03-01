import React, {Component} from 'react'

class Books extends Component {
  render() {
    const { routes } = this.props
    console.log(routes)
    return (
      <div>我是小册</div>
    )
  }
}
export default Books