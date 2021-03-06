import React, {Component} from 'react'

import style from './style.scss'

class SectionDownload extends Component {
  render() {
    return (
      <div className={`${style["section"]} ${style["w-shadow"]} ${style["section-padding"]} ${style["flex-view"]}`}>
        <a href="" className={style.QRCode}>
          <img src="https://b-gold-cdn.xitu.io/v3/static/img/welcome.6f27533.png" alt="" />
        </a>
        <div className={style.intrudtion}>
          <div className={style.title}>下载掘金客户端</div>
          <div className={style.desc}>一个帮助开发者成长的社区</div>
        </div>
      </div>
    )
  }
}
export default SectionDownload