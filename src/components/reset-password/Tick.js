import React, {Component} from 'react'
import PropTypes from 'prop-types'

import style from './style.scss'

class Tick extends Component {
  static propTypes = {
    tick: PropTypes.func
  }
  constructor(seconds) {
    super(seconds)
    this.state = {
      seconds: this.props.seconds
    }
  }
  _tick() {
    const { seconds } = this.state;
    this.setState({
        seconds: seconds - 1
    })
  }
  componentDidMount() {
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      this._tick()
      if(this.state.seconds <= 50){
        clearInterval(this.interval)
        this.props.tick(null)
        return
      }
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <span className={style.seconds}>{this.state.seconds}后重新发送</span>
    )
  }
}
export default Tick