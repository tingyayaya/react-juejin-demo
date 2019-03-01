import React, {Component} from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter, Redirect} from "react-router-dom";
import PropTypes from 'prop-types'
import { observer, inject} from 'mobx-react'

import './style.scss'
import Header from '@/components/header/Header';
import Modalbox from '@/components/modals/Modalbox';
import Alert from '@/components/alert/Alert'

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
  
  _changeLoginModal(event) {
    const { modal } = this.props.store
    if(modal.onShowModal){
      modal.onShowModal()
    }
    event.nativeEvent.stopImmediatePropagation(); 
    event.stopPropagation()
  }
 
  render() { 
    const { modal } = this.props.store
    const { alert } = this.props.store
    return (
      <div>
        <div className="global-component-box">
          { modal.isShow ? <Modalbox /> : ''}
          <div className="alert-list">
            <Alert alert={alert}/>
          </div>
        </div>
        <div></div>
        <header className="main-header">
          <nav className="container-fluid flex-view navbar">
            <Header />
          </nav>
        </header>
        <div className="container-fluid welcome-view flex-view">
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default Layout
