import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {createBrowserHistory} from 'history';

import Galleries from "./Components/Galleries";
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Portrait from './Components/Portrait';
import Showcase from './Components/Showcase';
import Developer from './Components/Developer';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Thumbnails from './Components/Thumbnails';

require('../css/animate.css');
require('../css/style.css');
require('../css/header-footer.css');
require('../css/querys.css');
require('../css/donut.css');







// require('./main.js');
import Contact from './Components/Contact'



class App extends Component {
  render() {
    return (
      <div className="app">

        <Route exact path='/' render={() => (
          <div className="home">
            <Header />
            <Showcase />
            {/* <Thumbnails /> */}
            <Portrait />
            <Home />
            {/* <Contact /> */}
            <Footer />
          </div>

        )}/>

        <Route exact path='/gallery' render={() => (
          <div className="galleries-container">
            <Header />
            <Galleries />
            <Footer />
          </div>
        )}/>

        <Route exact path='/developer' render={() => (
          <div className='developer-container'>
            <Header />
            <Developer />
            <Footer />
          </div>
        )}/>

        <Route exact path='/about' render={() => (
          <div className='about-container'>
            <Header />
            <About />
            {/* <Contact /> */}
            <Footer />
          </div>
        )}/>

        <Route exact path='/portfolio' render={() => (
          <div className='portfolio-container'>
            <Header />
            <Portfolio />
            {/* <Contact /> */}
            <Footer />
          </div>
        )}/>

      </div>

    );
  }
}

export default App;
