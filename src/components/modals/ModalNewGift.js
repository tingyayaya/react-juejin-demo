import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'

import Gift from '@/images/gift1.svg'
import style from './style.scss';

@inject('store')
@observer
class ModalNewGift extends Component {
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
  handleCloseModal(event) {
    const { modal } = this.props.store
    if(modal.onHideModal){
      modal.onHideModal()
    }
    event.nativeEvent.stopImmediatePropagation(); 
    event.stopPropagation();
  }
  handleStopHideModal(event) {
    const { modal } = this.props.store
    event.nativeEvent.stopImmediatePropagation(); 
    event.stopPropagation();
  }
  handleSubmit() {
    const { modal } = this.props.store
    modal.name = 'register'
    modal.parent = 'gift'
  }
  componentDidMount() {
    const { modal } = this.props.store
    modal.isClickHidden = true
  }
  render() {
    return (
      <div className={style["content-box"]} onClick={this.handleStopHideModal.bind(this)}>
        <Icon path={ mdiClose } size={1} className={style["close"]} color="#f6e3b7" onClick={this.handleCloseModal.bind(this)}/>
        <div className={style["header"]}>
          <div className={style["icon"]}>
            <img  src={ Gift } />
          </div>
          <div className={style["txt"]} >新人专享好礼</div>
        </div>
        <div className={style["desc"]} >凡未购买过小册的用户，均可领取三张 5 折新人专享券，购买小册时自动使用专享券，最高可节省 45 元。</div>
        <div className={style["tickets"]} >
          <div className={style["ticket"]} >
            <div className={style["ticket__inner"]} >
              <div className={style["enjoy"]} >
                <span className={style["new-title"]} >小册新人 5 折券</span>
              </div>
              <div className={style["sale"]} >最高可省 15 元</div>
            </div>
          </div>
          <div className={style["ticket"]} >
            <div className={style["ticket__inner"]} >
              <div className={style["enjoy"]} >
              <span className={style["new-title"]} >小册新人 5 折券</span>
              </div>
              <div className={style["sale"]} >最高可省 15 元</div>
            </div>
          </div>
          <div className={style["ticket"]} >
          <div className={style["ticket__inner"]}>
            <div className={style["enjoy"]}>
              <span className={style["new-title"]} >小册新人 5 折券</span>
            </div>
            <div className={style["sale"]}>最高可省 15 元</div>
          </div>
        </div>
        </div>
        <div className={style["remark"]}>注：专享券的使用期限在领券的七天内。</div>
        <div className={style["submit-btn"]} onClick={this.handleSubmit.bind(this)}>一键领取</div>
      </div>
    )
  }
}
export default ModalNewGift