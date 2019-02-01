import React, {Component} from 'react';
import { HashRouter } from "react-router-dom";

import './style.scss'
import Header from '../header/Header';
import Content from './Content';


class Layout extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <header className="main-header">
            <nav className="container-fluid flex-view navbar">
              <Header />
            </nav>
          </header>
          <div className="container-fluid welcome-view flex-view">
              <Content />
          </div>
        </div>
      </HashRouter>
    )
  }
}
export default Layout
