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
    <img src="./dist/img/portrait2.jpg" className="about-img2"/>
  </div>

  <div className="about-text2">
    <h1>Álvaro Fernández</h1>
    <hr/>
    <h2>Designer, Full-Stack Developer and Engineer.</h2>
    <p>I have studied Electrical engineer at the University of Las Palmas of Gran Canaria. My final degree project was “Study and design of ships connecting to the power grid in the port of Las Palmas de Gran Canaria”. The technology is called “Cold Ironing” or AMP (alternative maritime power).</p>
    <p>Later that year I worked as an engineer in the port of Las Palmas. I decided to work and study overseas. I learned how to code in Udacity with their nano degrees programs. Now I'm studying in FZD School of Design in Singapore. </p>
    <p>I love music, listen to it, play it and making it. I hope one day I can play in a band maybe in Hard Rock Cafe.</p>
  </div>

</section>

);
}
}

export default About;
