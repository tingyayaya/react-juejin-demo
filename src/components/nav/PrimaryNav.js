import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

class PrimaryNav extends Component {
  static propTypes = {
    handleChangeTab: PropTypes.func
  }
  constructor() {
    super()
    this.state = {
      activeIndex: ''
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
  componentDidMount() {
    const pathname = this.props.pathname.split('/')
    const name = pathname[pathname.length-1]
    this.setState({
      activeIndex: name
    })
  }
  render() {
    return (
      <Fragment>
        {this.props.children.map((child, i) => {
          return React.cloneElement(child, {
            className: [child.props.name === this.state.activeIndex? 'active': ''].join(' '),
            key: i,
            onClick: this.handleChangeTab.bind(this, child.props.name)
          })
        })}
      </Fragment>
    )
  }
}
export default PrimaryNav