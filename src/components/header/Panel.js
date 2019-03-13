import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { observer, inject} from 'mobx-react'
import { trace } from "mobx"

import style from './style.scss'

@inject("store")
@observer
class Panel extends Component {
  static propTypes = {
    store: PropTypes.shape({
      panel: PropTypes.shape({
        isShow: PropTypes.bool.isRequired,
        onHideModal: PropTypes.func,
        onShowModal: PropTypes.func
      })
    }).isRequired
  }
  handleHideModal(event) {
    const { panel } = this.props.store
    if(panel.onHideModal){
      panel.onHideModal()
    }
    event.nativeEvent.stopImmediatePropagation(); 
    event.stopPropagation()
  }
  componentDidMount() {
    const { panel } = this.props.store
    document.addEventListener('click', function(){
      if(panel.onHideModal){
        panel.onHideModal()
      }
    })
  }
  render() { trace(false)
    const { panel } = this.props.store;
    return (
      <div className={`${style['submit-panel']}`}>
        <div className={style.title}>来掘金写文章，您将有机会</div>
        <ul className={style.item}>
          <li>与超过300万开发者分享您的经验和观点</li>
          <li>呗编辑推荐，将获得更多曝光和关注</li>
          <li>加入专栏作者群，解释众多优秀开发者</li>
        </ul>
        <div className={`${style['ui-btn']} ${style['btn']}`} onClick={this.handleHideModal.bind(this)}>写文章</div>
      </div>
    )
  }
}
export default Panel