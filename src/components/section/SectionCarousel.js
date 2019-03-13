import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import ControlledCarousel from './ControlledCarousel'
import style from './style.scss'

@inject('store')
@observer
class SectionCarousel extends Component {
  static propTypes = {
    store: PropTypes.shape({
      homeApi: PropTypes.shape({
        bookList: PropTypes.array
      }),
      modal: PropTypes.shape({
        isShow: PropTypes.bool.isRequired,
        onHideModal: PropTypes.func,
        onShowModal: PropTypes.func,
        name: PropTypes.string.isRequired
      })
    }).isRequired
  }
  handleShowModal() {
    const { modal } = this.props.store
    if(modal.onShowModal){
      modal.name = 'gift'
      modal.onShowModal()
    }
  }
  render() {
    return (
      <div className={`${style["section"]} ${style["w-shadow"]}`}>
        <header className={style.header}>
          <div className={style.left}><span>热门标签</span> </div>
          <div className={style["right"]}>
            <div>
              <span className="iconfont icon-nav-left"></span>
              <span className="iconfont icon-nav-right"></span>
            </div>
          </div>
        </header>
        <div className={style["book-list"]}>
          <ControlledCarousel />
        </div>
        <div className={style["divider-line"]}>
          <span>新人专享好礼</span>
        </div>
        <div className={style["gitbag"]} onClick={this.handleShowModal.bind(this)}>
          <div className={style["cover"]}>
            <img src="https://b-gold-cdn.xitu.io/v3/static/img/45.b99ea03.svg" alt="" />
          </div>
          <div className={style.intrudtion}>
            <div className={style.title}>送你 <span className="warning-text">45元</span> 买小册</div>
            <div className={style["btn-mini"]}>
              <div className={`ui-btn ui-btn_plain-primary ${style['ui-btn-mini']}`}>立即领取</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default SectionCarousel