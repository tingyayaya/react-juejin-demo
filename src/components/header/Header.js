import React, {Component} from 'react';
import { HashRouter as Router,Link, Route, Switch} from "react-router-dom";
import { observer, inject} from 'mobx-react';

import { mdiMenuDown} from '@mdi/js'
import Icon from '@mdi/react'

import  style from './style.scss'
import Logo from './Logo'
import Search from './Search'
import Authmenu from './Authmenu'


@inject("store")
@observer
class Header extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }
  handleShowMenu(event) {
    const {show} = this.state
    this.setState({
      show: !show
    })
    event.nativeEvent.stopImmediatePropagation(); 
    event.stopPropagation()
  }
  _hideMenuDrop() {
    this.setState({
      show: false
    })
  }
  componentDidMount() {
    document.addEventListener('click', this._hideMenuDrop.bind(this))
  }
  componentWillUnmount() {
    document.removeEventListener('click', this._hideMenuDrop.bind(this))
  }
  render() {
    const { routes } = this.props.store
    
    return (
      <div className={style['my-nav']}>
        <Logo />
        <div className={style.mainNav}>
          <div className={style.hiddenMenu} onClick={this.handleShowMenu.bind(this)}>
            <span>首页</span>
            <Icon path={mdiMenuDown} color='#007fff' size={1}></Icon>
          </div>
          <ul className={style.menu} style={{"display":this.state.show&&'block'}}>
            <li className={style.active}>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/activities">动态</Link>
            </li>
            <li>
              <Link to="/topics">话题</Link>
            </li>
            <li>
              <Link to="/books">小册</Link>
            </li>
            <li>
              <Link to="/events">活动</Link>
            </li>
          </ul>
        </div>
        <Search />
        <Authmenu />
      </div>
    )
  }
}



export default Header