import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'




class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }


  toggleMenu(event) {
    event.currentTarget.classList.toggle("change");
    this.setState({
      visible: !this.state.visible
    });
    const menu2 = document.getElementById("menu2");
    if (this.state.visible) {
      menu2.setAttribute("class", "dec");
    } else {
      menu2.setAttribute("class", "activate");
    }
  }


  render() {

    return (
      <section id="">

        <nav className="nav-bar">

          <div className="container row">
            <div className="col-xs-2 logo-container">
              <Link to="/"><img src="./dist/css/img/logo.png" alt="Home Page" className="logo"/></Link>
            </div>

            <div className="burger-button" onClick={ this.toggleMenu }>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>


            <div className="col-xs-10 text-right menu-1" id="menu1">
              <ul className="nav-list">
                <li className="nav-item"><Link to="/galleries"><i className="far fa-image menu-icon"></i>Gallery</Link></li>

                <li className="has-dropdown nav-item">
                  <Link to="/developer"><i className="fas fa-code menu-icon"></i>Developer</Link>
                  <ul className="dropdown">
                    <li><a href="#">Full-Stack</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Apps</a></li>
                    <li><a href="#">Projects</a></li>
                  </ul>
                </li>

                <li className="nav-item"><Link to="/portfolio"><i className="far fa-file-alt menu-icon"></i>Portfolio</Link></li>
                <li className="nav-item">
                  <Link to="/about"><i className="far fa-user menu-icon"></i>About</Link></li>
                </ul>
              </div>
            </div>

          </nav>

          <div className="menu-2 dec" id="menu2">
            <ul className="nav-menu">
              <li className=""><Link to="/galleries"><i className="far fa-image menu-icon"></i>Gallery</Link></li>
              <li className="">
                <Link to="/developer"><i className="fas fa-code menu-icon"></i>Developer</Link>
              </li>
              <li className=""><Link to="/portfolio"><i className="far fa-file-alt menu-icon"></i>Portfolio</Link></li>
              <li className="">
                <Link to="/about"><i className="far fa-user menu-icon"></i>About</Link></li>
              </ul>
            </div>



          </section>
        );
      }
    }

    export default Header;
