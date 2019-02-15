import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from './About'
import Home from './Home'
import Topics from './Topics'

class BaseExample extends Component {
  render() {
    const { match } = this.props;
    console.log(match)
    return (
      <div>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to='/about' >About</Link>
          </li>
          <li>
            <Link to="/reset" >reset</Link>
          </li>
          <li>
            <Link to="/topics" >Topics</Link>
          </li>
        </ul>
        <hr />
        {this.props.children}
      </div>
    )
  }
}
export default BaseExample