import React, {Component, useCallback} from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Icon from '@mdi/react'
import { mdiAccount, mdiPen,mdiFileDocument, mdiCart, mdiSettings,mdiChevronRight,mdiInformation,mdiThumbUp, mdiCardsHeart,mdiLabel,mdiLogout} from '@mdi/js'

const list = [
  {
    menu: [
      {
        title: '写文章',
        link: '/',
        classname: mdiPen
      },
      {
        title: '草稿',
        link: '',
        classname: mdiFileDocument
      }
    ],
  },
  {
    menu: [
      {
        title: '我的主页',
        link: '/',
        classname: mdiAccount
      },
      {
        title: '我赞过的',
        link: '',
        classname: mdiThumbUp
      },
      {
        title: '我的收藏集',
        link: '/',
        classname: mdiCardsHeart
      },
      {
        title: '已购',
        link: '',
        classname: mdiCart
      },
      {
        title: '标签管理',
        link: '/',
        classname: mdiLabel
      }
    ]
  },
  {
    menu: [
      {
        title: '设置',
        link: '/',
        classname: mdiSettings
      },
      {
        title: '关于',
        link: '/',
        classname: mdiInformation,
        submenu: [{
          title: '下载应用',
          link: '/',
          },{
            title: '关于',
            link: '/',
          },{
            title: '加入我们',
            link: '/',
          },{
            title: '翻译计划',
            link: '/',
          },{
            title: '合作伙伴',
            link: '/',
          }]
      }
    ]
  },
  {
    menu: [
      {
        title: '退出',
        link: '/',
        classname: mdiLogout
      }
    ]
  }
]

class UserDropList extends Component {
  static propTypes = {
    isUserDrop: PropTypes.bool.isRequired
  }
  constructor(props) {
    super(props)
    this.state ={
      isUserDrop: props.isUserDrop
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({isUserDrop: nextProps.isUserDrop});
  }
  render() {
    return (
      <Router>
        <ul  className={`${this.state.isUserDrop?'': 'hide'} nav-menu user-dropdown-list`} >
          {list.map((items, i)=> {
            return <div  className="nav-menu-item-group" key={i}>
            
              {items.menu.map((item,j)=> {
                return <FirstItem item={item} key={j} index={j}/>
              })}
            </div>
          })}
        </ul>
      </Router>
    )
  }
}


class FirstItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }
  constructor(props){
    super(props)
    this.state = {
      index: -1
    }
  }
  handleMouseEnterItem(index) {
    this.setState({
      index: index
    })
  }
  handleMouseLeaveItem() {
    this.setState({
      index: -1
    })
  }
  render() {
    const item = this.props.item;
    const index = this.props.index;
    return(
      <li
        className={`nav-menu-item ${item.submenu ? 'more' : ''}`} 
        onMouseEnter={this.handleMouseEnterItem.bind(this, index)}
        onMouseLeave={this.handleMouseLeaveItem.bind(this)}>
        <Link to={item.link}>
          <Icon path={item.classname} size={1}
        color="#b2bac2"  className="feiwei"/>
          <span>{item.title}</span>
          
          { item.submenu 
            ? <Icon path={mdiChevronRight} size={1.5} color="#b2bac2"  className="arrow-right"/> : ''}
        </Link>
        { item.submenu 
          ? (
            <ul className={`${this.state.index==index ? '': 'hide'} nav-menu more-dropdown-list`}>
              <div className="nav-menu-item-group">
              { item.submenu.map((secondaryItem, i) => {
                  return  <SecondaryItem secondaryItem={secondaryItem} key={i}/>
                })
              }
              </div>
            </ul>
          )  : ''}
      </li>
    )
  }
}

class SecondaryItem extends Component {
  static propTypes = {
    secondaryItem: PropTypes.object.isRequired
  }
  constructor(){
    super()
  }
  render() {
    const item = this.props.secondaryItem
    return(
      <li  className="nav-menu-item">
        <Link to={item.link}>
          <span>{item.title}</span>
        </Link>
      </li>
    )
  }
}

export default UserDropList