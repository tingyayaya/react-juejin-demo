import React, {Component} from 'react'

import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

import ModalLogReg from '@/components/modals/ModalLogReg'
import ModalNewGift from '@/components/modals/ModalNewGift'

import style from './style.scss'

@inject('store')
@observer
class Modalbox extends Component {
  static propTypes = {
    store: PropTypes.shape({
      modal: PropTypes.shape({
        isShow: PropTypes.bool.isRequired,
        isClickHidden: PropTypes.bool.isRequired,
        onHideModal: PropTypes.func,
        name: PropTypes.string.isRequired
      })
    }).isRequired
  }
  constructor() {
    super()
  }
  
  handleModalHidden(event) {
    const { modal } = this.props.store
    if(modal.isClickHidden){
      modal.onHideModal()
    }
    event.nativeEvent.stopImmediatePropagation(); 
    event.stopPropagation();
  }
  render() {
    const { modal } = this.props.store
    var modalBox;
    if(modal.name == 'login' || modal.name == 'register') {
      modalBox =  <ModalLogReg />
    }else if(modal.name == 'gift'){
      modalBox =  <ModalNewGift />
    }
    return ( 
      <div className={style['modal-box']}  onClick={this.handleModalHidden.bind(this)}>
        {modalBox}
      </div>
    )
  }
}
export default Modalbox