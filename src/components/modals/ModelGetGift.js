import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import {observer,inject} from 'mobx-react'
import { Link } from 'react-router-dom'

import style from './style.scss'

@inject('store')
@observer
class GetGift extends Component {
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
  constructor () {
    super() 
    this.state = {
      status: 'success'
    }
  }
  handleStopHideModal(event) {
    event.nativeEvent.stopImmediatePropagation(); 
    event.stopPropagation();
  }
  handleHideModal(event) {
    const { modal } = this.props.store
    if(modal.onHideModal){
      modal.onHideModal()
    }
    event.nativeEvent.stopImmediatePropagation(); 
    event.stopPropagation();
  }
  componentDidMount() {
    const { modal } = this.props.store
    modal.isClickHidden = true
  }
  render() {
    const { status } = this.state
    let ele;
    if(status=='success') {
      ele = <div className={style.model} onClick={this.handleStopHideModal.bind(this)}>
              <div className={style.heading}>领取成功</div>
              <div className={style.contentText}>购买小册时自动使用专享券</div>
              <div className={style.btnSuccessFooter}>
                <Button variant="outline-primary" className={style.btnOk} onClick={this.handleHideModal.bind(this)}>知道了</Button>
                <Link to="/books"><Button variant="primary" className={`${style.btnOk} ${style.btnLink}`} 
                  onClick={this.handleHideModal.bind(this)}>前往小册首页</Button></Link>
              </div>
            </div>
    }else{
      ele = <div className={style.model} onClick={this.handleStopHideModal.bind(this)}>
              <div className={style.heading}>失败</div>
              <div className={style.contentText}>本活动仅适用于小册新用户</div>
              <Button variant="outline-primary" className={style.btnOk} onClick={this.handleHideModal.bind(this)}>知道了</Button>
            </div>
    }
    return ele
  }
}
export default GetGift