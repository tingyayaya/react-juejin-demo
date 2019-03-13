import React, {Component} from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter, Redirect} from "react-router-dom";
import PropTypes from 'prop-types'
import { observer, inject} from 'mobx-react'

import Header from '@/components/header/Header';
import Modalbox from '@/components/modals/Modalbox';
import Alert from '@/components/alert/Alert'
import BackToTop from '@/layout/BackToTop'

import style from './style.scss'


@inject("store")
@observer
class Layout extends Component {
  static proptypes = {
    store: PropTypes.shape({
      modal: PropTypes.shape({
        isShow: PropTypes.bool.isRequired,
        onHideModal: PropTypes.func,
        onShowModal: PropTypes.func
      })
    }).isRequired
  }
  constructor() {
    super()
  }
  render() { 
    const { modal } = this.props.store
    const { alert } = this.props.store
    return (
      <div>
        <div className={style["global-component-box"]}>
          { modal.isShow && <Modalbox />}
          <div className={style["alert-list"]}>
            <Alert alert={alert}/>
          </div>
          <BackToTop />
        </div>
        <div className={style["main-header-box"]}> 
          <header className={style["main-header"]}>
            <nav className={`${style["container-fluid"]} ${style["navbar"]}`}>
              <Header />
            </nav>
          </header>
        </div>
        {/* <div className={`${style["container-fluid"]} ${style["welcome-view"]}`}>
          {this.props.children}
        </div> */}
      </div>
    )
  }
}
export default Layout
