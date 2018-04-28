import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Galleries from "./Galleries";
require('../css/style.css');



class Home extends Component {
  render() {
    return (
      <section id="home-content">

        <div className="container intro">
          <h2 className="quote-title">Some of my work</h2>
          <p className="quote-text">Here you can checkout some of my work that goes from designer (industrial design, posters, concept design, etc), Full-Stack Website developer and video and photography works.</p>
        </div>


        <div className="container sections">
          <div className="text-wrapper">
            <h3 className="works-title">Designer</h3>
            <p>Creative designer with numeours pieces. Different media like digital, 3D, traditional, watercolor, acrylics, etc.</p>
            <p>I have bee studying design in the school of Brendan Baeza for one year. Concept design, including vehicles, characters. Animated videos for a techonology company. Drawing and designing have been my favorite hobby.</p>
            <ul>
              <li>Concept Design</li>
              <li>Illustrations</li>
              <li>Animations</li>
            </ul>
            <button type="button" className="btn btn-outline-primary">Gallery</button>
          </div>
          <div className="image-wrapper">
            <img src="./dist/img/isometric.png" alt="work1" className="work-image"/>
          </div>

        </div>


        <div className="container sections">
          <div className="image-wrapper-x">
            <img src="./dist/img/code.png" alt="work1" className="work-image"/>
          </div>
          <div className="text-wrapper-2">
            
            <h3 className="works-title">Developer</h3>

            <p>Fron-End and Back-End developer including databases, applications, APIs, etc. Knowledge in HTML, CSS, Javascript ( React, jQuery), Python, PostgreSQL, Ubuntu, Git, databases, Numpy, etc.</p>
            <p>This website was made with Python and Flask for the Back-end and Fron-End with HTML, CSS and React.</p>
            <ul>
              <li>Full-Stack Web Developer: Amazon Lightsail, Flask, Log-Analysis, etc</li>
              <li>Fron-End Web Developer: Google APIs, Games, React, etc.</li>
              <li>Intro to Programming (Data analisis Specialisation).</li>
            </ul>


            <button type="button" className="btn btn-outline-primary">Projects</button>

            <div className="image-wrapper-2">
              <img src="./dist/img/code.png" alt="work1" className="work-image"/>
            </div>
          </div>
        </div>


        <div  className="container sections">

          <div className="text-wrapper">
            <h3 className="works-title">Photography</h3>
            <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno.</p>
            <button type="button" className="btn btn-outline-primary">Portfolio</button>
          </div>
          <div className="image-wrapper">
            <img src="./dist/img/photo.jpg" alt="work1" className="work-image"/>
          </div>
        </div>

      </section>
    );
  }
}

export default Home;
