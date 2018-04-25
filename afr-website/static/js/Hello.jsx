import React, { Component } from "react";

import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
require('../css/style.css');


class Hello extends Component {


  render () {
    return (
      <div>

      <li><Link to="/">Home</Link></li>

      </div>
    );
  }
}

export default Hello;
