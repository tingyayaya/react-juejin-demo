import React, {Component} from 'react';
import { BrowserRouter as Router,Link} from "react-router-dom";
import logo from '../../images/logo.svg';

class Logo extends Component {
  render() {
    return (
      <Link to="/" className="main-brand">
        <img src={logo} alt="掘金" />
      </Link>
    )
  }
}
export default Logo