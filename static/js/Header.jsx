import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Galleries from "./Galleries";
require('../css/style.css');


class Header extends Component {
  render() {

    return (
      <section>
        <nav className="nav-bar">
          <div className="menu">
            <div className="container row">

              <div className="col-xs-2">
                <a href="/"> <img src="./dist/css/img/logo.png" alt="" className="logo"/> </a>
              </div>
              <div className="col-xs-10 text-right menu-1">


                <ul className="nav-list">
                  <li className="nav-item"><a href="/galleries"><i className="far fa-image menu-icon"></i>Gallery</a></li>
                  <li className="has-dropdown nav-item">
                    <a href="#"><i className="fas fa-code menu-icon"></i>Developer</a>
                    <ul className="dropdown">
                      <li><a href="#">Full-Stack</a></li>
                      <li><a href="#">Games</a></li>
                      <li><a href="#">Apps</a></li>
                      <li><a href="#">Projects</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a href="#"><i className="far fa-file-alt menu-icon"></i>Portfolio</a></li>
                  <li className="nav-item">
                    <a href="#"><i className="far fa-user menu-icon"></i>About</a></li>
                  </ul>
                </div>


              </div>
            </div>
          </nav>

          <header id="header" className="cover" role="banner" data-stellar-background-ratio="0.5">

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="display-t">

                  </div>
                </div>
              </div>
            </div>
          </header>
        </section>
      );
    }
  }

  export default Header;
