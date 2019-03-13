import React, {Component} from 'react';
import { HashRouter as Router,Link, Route, Switch} from "react-router-dom";
import { observer, inject} from 'mobx-react';

import  style from './style.scss'
import Logo from './Logo'
import Search from './search'
import Authmenu from './Authmenu'

@inject("store")
@observer
class Header extends Component {
  render() {
    const { routes } = this.props.store
   
    return (
      <div className={style['my-nav']}>
        <Logo />
        <ul className={style.menu}>
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
        {/* <Search /> */}
        {/* <Authmenu /> */}
      </div>
    )
  }
}



export default Header