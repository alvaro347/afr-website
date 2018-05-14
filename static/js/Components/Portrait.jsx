import React, { Component } from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Portrait extends Component {
  render() {

    return (

      <section id="portrait">

        <div className="portrait-container">
          <img className="portrait-img" src="./dist/img/portrait.jpg" alt=""/>
        </div>
        <div className="portrait-text">
          <h2>Alvaro Fernandez Rodriguez</h2>
          <h5>Designer and Full-Stack Web developer</h5>
          <hr/>
          <p>I'm experienced in concept design, illustration and also creating complete websites</p>
          <Link to="/about"><button type="button" className="btn btn-outline-primary button-3">About</button></Link>
        </div>

      </section>
    );
  }
}

export default Portrait;
