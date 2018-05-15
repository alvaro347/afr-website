import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      active: 'nav-link-active',
      normal: 'nav-link'
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.resetMenu = this.resetMenu.bind(this);
  }


  toggleMenu(event) {
    event.currentTarget.classList.toggle("change");
    this.setState({
      visible: !this.state.visible
    });
    const menu = document.getElementById("menu");
    if (this.state.visible) {
      menu.setAttribute("class", "menu");
    } else {
      menu.setAttribute("class", "menu1 animated-fast fadeInDown");
    }
  }

  resetMenu() {
    const burger = document.getElementById("burger");
    burger.setAttribute("class", "burger-button");
    const menu = document.getElementById("menu");
    menu.setAttribute("class", "menu");
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {

    return (
      
      <header id="header">

        <nav className="nav-bar">

          <div className="logo-container" onClick={ this.resetMenu }>
            <Link to="/" className="link"><img src="./dist/img/logo.png" alt="Home Page" className="logo"/></Link>
          </div>

          <div className="burger-button" id="burger" onClick={ this.toggleMenu }>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>

          <div className="menu" id="menu">
            <ul className="nav-list">

              <li className="nav-item"><Link to="/" className={ window.location.pathname == '/' ? this.state.active : this.state.normal }><i className="fas fa-home menu-icon"></i>Home</Link></li>
              <li className="nav-item"><Link to="/gallery" className={ window.location.pathname == '/gallery' ? this.state.active : this.state.normal }><i className="far fa-image menu-icon"></i>Gallery</Link></li>
              <li className="nav-item"><Link to="/developer" className={ window.location.pathname == '/developer' ? this.state.active : this.state.normal }><i className="fas fa-code menu-icon"></i>Developer</Link></li>
              <li className="nav-item"><Link to="/portfolio" className={ window.location.pathname == '/portfolio' ? this.state.active : this.state.normal }><i className="far fa-file-alt menu-icon"></i>Portfolio</Link></li>
              <li className="nav-item"><Link to="/about" className={ window.location.pathname == '/about' ? this.state.active : this.state.normal }><i className="far fa-user menu-icon"></i>About</Link></li>

            </ul>
          </div>

        </nav>
      </header>

    );
  }
}

export default Header;
