import React, {Component} from 'react'

class SectionDownload extends Component {
  render() {
    return (
      <div className="section w-shadow section-padding flex-view">
        <a href="" className="QRCode">
          <img src="https://b-gold-cdn.xitu.io/v3/static/img/welcome.6f27533.png" alt="" />
        </a>
        <div className="intrudtion">
          <div className="title">下载掘金客户端</div>
          <div className="desc">一个帮助开发者成长的社区</div>
        </div>
      </div>
    )
  }
}
export default SectionDownload