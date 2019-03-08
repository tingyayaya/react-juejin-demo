import React, {Component} from 'react'

import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

import ModalLogReg from '@/components/modals/ModalLogReg'

import './style.scss'

@inject('store')
@observer
class Modalbox extends Component {
  static propTypes = {
    store: PropTypes.shape({
      modal: PropTypes.shape({
        isShow: PropTypes.bool.isRequired,
        onHideModal: PropTypes.func,
        name: PropTypes.string.isRequired
      })
    }).isRequired
  }
  constructor() {
    super()
    this.state = {
     
    }
  }
  
  render() {
    const { modal } = this.props.store
    var modalBox;
    if(modal.name == 'login' || modal.name == 'register') {
      modalBox =  <ModalLogReg />
    }else {
      modalBox =  <div>lalalla</div>
    }
    return ( 
      <div className="modal-box">
        {modalBox}
      </div>
    )
  }
}
export default Modalbox