import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Hello from "./Hello";
import Home from './Home'
require('../css/style.css');
require('./main.js');

import loader from '../img/person_2.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <Home />
        )}/>
        <Route exact path='/hello' render={() => (
          <Hello />
        )}/>
      </div>
    );
  }
}

export default App;
