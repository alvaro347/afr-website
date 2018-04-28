import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Galleries from "./Galleries";
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Portrait from './Portrait'
import Showcase from './Showcase'
import Developer from './Developer'

require('../css/style.css');
require('../css/querys.css');

// require('./main.js');
import Contact from './Contact'



class App extends Component {
  render() {
    return (
      <div>
        
        <Route exact path='/' render={() => (
          <div>
            <Header />
            <Showcase />
            <Portrait />
            <Home />
            <Contact />
            <Footer />
          </div>

        )}/>

        <Route exact path='/galleries' render={() => (
          <div>
            <Header />
            <Galleries />
            <Footer />
          </div>
        )}/>

        <Route exact path='/developer' render={() => (
          <div>
            <Header />
            <Developer />
            <Footer />
          </div>
        )}/>

      </div>
    );
  }
}

export default App;
