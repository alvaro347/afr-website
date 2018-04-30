import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'



class About extends Component {
  render() {

    return (
      <section id="about">

<div>

</div>

<div className="gap"></div>

    <div className="about-card">
      <div className="about-img-container">
        <img src="./dist/img/portrait.jpg" className="about-img"/>
      </div>
      <div className="about-text">
        <h1>Alvaro fernandez</h1>
        <h2>Designer, Full-Stack Developer</h2>
        <p>ng Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </div>
    </div>


      </section>
    );
  }
}

export default About;
