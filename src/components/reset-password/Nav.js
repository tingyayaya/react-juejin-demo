import React, {Component} from 'react'
import PropTypes from 'prop-types'


import style from './style.scss'

class Nav extends Component {
  static propTypes = {
    hanleChangeTab: PropTypes.func
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
    this.props.hanleChangeTab(g)
  }
  render() {
    return (
      <nav className={style.nav}>
        {this.props.children.map((child, i) => {
          
          return React.cloneElement(child, {
            className: [`${style['nav-item']}`,this.state.activeIndex===i ? `${style.active}`: ''].join(' '),
            key: i,
            onClick: this.handleChangeTab.bind(this, i)
          })
        })}
      </nav>
    )
  }
}
export default Nav