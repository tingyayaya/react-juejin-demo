import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import ControlledCarousel from './ControlledCarousel'

@inject('store')
@observer
class SectionCarousel extends Component {
  static propTypes = {
    store: PropTypes.shape({
      homeApi: PropTypes.shape({
        bookList: PropTypes.array
      })
    }).isRequired
  }
  render() {
    return (
      <div className="section w-shadow">
        <header className="header">
          <div className="left"><span>热门标签</span> </div>
          <div className="right">
            <div>
              <span className="iconfont icon-nav-left"></span>
              <span className="iconfont icon-nav-right"></span>
            </div>
          </div>
        </header>
        <div className="book-list">
          <ControlledCarousel />
        </div>
        <div className="divider-line">
          <span>新人专享好礼</span>
        </div>
        <div className="gitbag">
          <div className="cover">
            <img src="https://b-gold-cdn.xitu.io/v3/static/img/45.b99ea03.svg" alt="" />
          </div>
          <div className="intrudtion">
            <div className="title">送你 <span className="warning-text">45元</span> 买小册</div>
            <div className="btn-mini">
              <div className="ui-btn ui-btn_plain-primary ui-btn-mini">立即领取</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default SectionCarousel