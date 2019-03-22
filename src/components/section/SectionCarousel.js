import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import Button from 'react-bootstrap/Button'
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
            <Button variant="outline-primary" size="sm"> 立即领取 </Button>
          </div>
        </div>
      </div>
    )
  }
}
export default SectionCarousel