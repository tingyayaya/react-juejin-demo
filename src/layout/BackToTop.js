import React, {Component} from 'react'

import Icon  from '@mdi/react'
import { mdiDotsHorizontalCircle } from '@mdi/js'
import { mdiMenuUp } from '@mdi/js'

import style from './style.scss'

class BackToTop extends Component {
  
  constructor() {
    super() 
    this.state = {
      show: true
    }
  }
  handleGoTop() {
    window.scrollTo(0, 0)
  }
  _GoTopSlowly() {
    let scrollToTop = window.setInterval(function() {
      let pos = window.pageYOffset;
        if ( pos > 0 ) {
          window.scrollTo( 0, pos - 20 ); // how far to scroll on each step
        } else {
          window.clearInterval( scrollToTop );
        }
    }, 2);
  }
  _scroll() {
    let scrollTop = document.documentElement.scrollTop || document.body/scrollTop
    if(scrollTop > 1000) {
      this.setState({
        show: true
      })
    }else{
      this.setState({
        show: false
      })
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this._scroll.bind(this))
  }
  componentWillUnmount() {
    window.removeEventListener('scroll',this._scroll.bind(this))
  }
  render() {
    const { show } = this.state
    return (
      <div className={style["suspension-panel"]}>
        {
          show &&
          <div className={style["fixed-btn"]}
            onClick={this.handleGoTop.bind(this)} >
            <Icon path={ mdiMenuUp } color='#909090' size={1.2} className="arrow-drop"/>
          </div> 
        }
        <div className={style["fixed-btn"]}>
          <Icon path={ mdiDotsHorizontalCircle } color='#007fff' size={0.9} className="chat-bubble" />
        </div>
      </div>
    )
  }
}
export default BackToTop