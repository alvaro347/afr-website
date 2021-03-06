import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'



class Header extends Component {
  render() {

    return (
      <footer id="footer">
        <div className="footer-content">

          <div>
            <Link to="/" className="footer-text" >&copy; 2018 Alvaro Fernandez (AFR)</Link>
          </div>

          <div className="footer-links">
            <ul className="social-list">
              <li className="social-icon"><Link to="/galleries">Gallery</Link></li>
              <li className="social-icon"><Link to="/about">About</Link></li>
              <li className="social-icon"><Link to="/portfolio">Portfolio</Link></li>
            </ul>
          </div>

          <div className="footer-social">

            <ul className="social-list">
              <li className="social-icon"><a href="https://www.youtube.com/channel/UCQ79F_bjrqNf8wKI5LVhFBA?view_as=subscriber"><i className="fab fa-youtube footer-icon"></i></a></li>
              <li className="social-icon"><a href="https://www.instagram.com/alvarogna/"><i className="fab fa-instagram footer-icon"></i></a></li>
              <li className="social-icon"><a href="https://alvaro347.deviantart.com"><i className="fab fa-deviantart footer-icon"></i></a></li>
              <li className="social-icon"><a href="https://www.linkedin.com/in/alvaro-fernandez-rodriguez/"><i className="fab fa-linkedin footer-icon"></i></a></li>
              <li className="social-icon"><a href="https://github.com/alvaro347"><i className="fab fa-github-square footer-icon"></i></a></li>
            </ul>

          </div>

        </div>
      </footer>
    );
  }
}

export default Header;
