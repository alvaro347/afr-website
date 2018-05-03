import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'



class About extends Component {
  render() {

    return (
      <section id="about">

        {/* <div className="about-card">
        <div className="about-img-container">
        <img src="./dist/img/portrait.jpg" className="about-img"/>
      </div>
      <div className="about-text">
      <h1>Alvaro Fernandez</h1>
      <h2>Designer, Full-Stack Developer</h2>
      <p>I'm a electrical engineer studying at the FZD School of Design. I'm also a Full-Stack Web Developer.</p>
    </div>
  </div> */}

  <div className="about-img-container2">
    <img src="./dist/img/portrait.jpg" className="about-img2"/>
  </div>

  <div className="about-text2">
    <h1>Alvaro Fernandez</h1>
    <hr/>
    <h2>Designer, Full-Stack Developer</h2>
    <p>I'm a electrical engineer studying at the FZD School of Design. I'm also a Full-Stack Web Developer.</p>
  </div>

</section>

);
}
}

export default About;
