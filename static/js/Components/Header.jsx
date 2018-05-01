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
      menu.setAttribute("class", "menu1");
    }
  }



  render() {

    return (
      <header id="header">

        <nav className="nav-bar">


          <div className="logo-container">
            <Link to="/"><img src="./dist/css/img/logo.png" alt="Home Page" className="logo"/></Link>
          </div>



          <div className="burger-button" onClick={ this.toggleMenu }>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>

          <div className="menu" id="menu">

            <ul className="nav-list">

              <li className="nav-item"><Link to="/" className={ window.location.pathname == '/' ? this.state.active : this.state.normal }><i className="fas fa-home menu-icon"></i>Home</Link></li>
              <li className="nav-item"><Link to="/galleries" className={ window.location.pathname == '/galleries' ? this.state.active : this.state.normal }><i className="far fa-image menu-icon"></i>Gallery</Link></li>
              <li className="nav-item"><Link to="/developer" className={ window.location.pathname == '/developer' ? this.state.active : this.state.normal }><i className="fas fa-code menu-icon"></i>Developer</Link></li>
              <li className="nav-item"><Link to="/portfolio" className={ window.location.pathname == '/portfolio' ? this.state.active : this.state.normal }><i className="far fa-file-alt menu-icon"></i>Portfolio</Link></li>
              <li className="nav-item"><Link to="/about" className={ window.location.pathname == '/about' ? this.state.active : this.state.normal }><i className="far fa-user menu-icon"></i>About</Link></li>

            </ul>

          </div>






        </nav>

        {/* <div className="menu-2 dec" id="menu2">

        <ul className="nav-menu">

        <li className=""><Link to="/"><i className="fas fa-home menu-icon"></i>Home</Link></li>
        <li className=""><Link to="/galleries"><i className="far fa-image menu-icon"></i>Gallery</Link></li>
        <li className=""><Link to="/developer"><i className="fas fa-code menu-icon"></i>Developer</Link></li>
        <li className=""><Link to="/portfolio"><i className="far fa-file-alt menu-icon"></i>Portfolio</Link></li>
        <li className=""><Link to="/about"><i className="far fa-user menu-icon"></i>About</Link></li>

      </ul>

    </div> */}

  </header>
);
}
}

export default Header;
