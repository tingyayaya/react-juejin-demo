import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

class PrimaryNav extends Component {
  static propTypes = {
    handleChangeTab: PropTypes.func
  }
  constructor() {
    super()
    this.state = {
      activeIndex: 0
    }
  }
  handleChangeTab(g, e){
    this.setState({
      activeIndex: g
    })
    if(this.props.handleChangeTab){
      this.props.handleChangeTab(g)
    }
  }
  render() {
    return (
      <Fragment>
        {this.props.children.map((child, i) => {
          return React.cloneElement(child, {
            className: [this.props.className,this.state.activeIndex===i ? 'active': ''].join(' '),
            key: i,
            onClick: this.handleChangeTab.bind(this, i)
          })
        })}
      </Fragment>
    )
  }
}
export default PrimaryNav