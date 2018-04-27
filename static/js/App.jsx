import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Galleries from "./Galleries";
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
require('../css/style.css');
// require('./main.js');
import Contact from './Contact'



class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <div>
            <Header />
            <Home />
            <Contact />
            <Footer />
          </div>

        )}/>
        <Route exact path='/galleries' render={() => (
          <Galleries />
        )}/>
      </div>
    );
  }
}

export default App;
