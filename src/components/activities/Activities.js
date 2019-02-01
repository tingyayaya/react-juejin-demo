import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const menuitems = [
  {
    text: 'Test 1',
    url: 'http://qq.com',
    submenu: [
      {
        text: '1 Child Test 1',
        url: 'http://qq.com',
      },
      {
        text: '1 Child Test 2',
        url: 'http://qq.com',
      },
    ]
  },
  {
    text: 'Test 2',
    url: 'http://qq.com',
    submenu: [
      {
        text: '2 Child Test 1',
        url: 'http://qq.com',
      },
      {
        text: '2 Child Test 2',
        url: 'http://qq.com',
      },
    ]
  },
  {
    text: 'Test 3',
    url: 'http://qq.com',
    submenu: []
  }
]

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      showMenuItem: -1,
      showSubMenuItem: -1,
    }
  }

  handleMenuLevelHover = (index) => {
    this.setState({ showMenuItem: index })
  }

  handleMenuLevelLeave = () => {
    var _this = this;
    if(this.timer){
        clearTimeout(this.timer);
    }
    this.timer = setTimeout(()=>{

      _this.setState({ showMenuItem: -1 })
      
    }, 500)
    
    
  }

  handleSubMenuLevelHover = (index, e) => {
    this.setState({
      showMenuItem: index,
      showSubMenuItem: +e.target.attributes.getNamedItem('data-id').value
    })
  }

  handleSubMenuLevelLeave = (e) => {
    this.setState({ showSubMenuItem: -1 })
  }

  render() {
    return (
      <ul>
        {
          menuitems.map((level, index) => (
             <MenuLevel
               text={level.text}
               url={level.url}
               key={index}
               index={index}
               onMouseOver={() => { this.handleMenuLevelHover(index) }}
               onMouseLeave={this.handleMenuLevelLeave}
               onSubItemMouseOver={(e) => { this.handleSubMenuLevelHover(index, e) }}
               onSubItemMouseLeave={this.handleSubMenuLevelLeave}
               showSubMenuItem={this.state.showSubMenuItem}
               showMenuItem={this.state.showMenuItem}
             >
               {level.submenu}
             </MenuLevel>
         ))
       }
      </ul>
    )
  }
}
const MenuLevel = (props) => (
  <li
    onMouseOver={props.onMouseOver}
    onMouseLeave={props.onMouseLeave}
    className={(props.showMenuItem === props.index) ? 'menu-hover' : ''}
    >
    <a href={props.url}>{props.text}</a>
    <div className={(props.showMenuItem === props.index) ? 'submenu-show' : 'submenu-hidden'}>
      {
        props.children.map((item, index) => (
          <SubMenuItem
            text={item.text}
            key={item.text + index}
            url={item.url}
            index = {index}
            showSubMenuItem={props.showSubMenuItem}
            onMouseOver={props.onSubItemMouseOver}
            onMouseLeave={props.onSubItemMouseLeave}
          />
        ))
      }
    </div>
  </li>
)

const SubMenuItem = (props) => (
  <a
    href={props.url}
    data-id = {props.index}
    onMouseOver={props.onMouseOver}
    onMouseLeave={props.onMouseLeave}
    className={(props.showSubMenuItem === props.index) ? 'submenuitem-hover' : '' }
    >
    {props.text}
  </a>
)


export default App