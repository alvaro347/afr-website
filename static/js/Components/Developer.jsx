import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Card from './Sub/Card'


class Developer extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      projects: [
        {
          title: 'Google Map With react',
          img: './dist/img/google-maps.png',
          info: 'This is a project create with React',
          link: 'https://github.com/alvaro347/google-maps-react'
        },
        {
          title: 'Project Gallery',
          img: './dist/img/project-catalog.png',
          info: 'Full-Stack Project: Gallery with upload and edit features',
          link: 'https://github.com/alvaro347/project-catalog'
        },
        {
          title: 'Arcade Game (Bugs)',
          img: './dist/img/arcade-game.png',
          info: 'Object oriented programming game. The player have to collect and cross the river',
          link: 'https://github.com/alvaro347/project-arcade-game'
        },
        {
          title: 'Feed Reader Testing',
          img: './dist/img/feed-reader.png',
          info: 'Jasmine Testing project of a feed reader from Udacity.',
          link: 'https://github.com/alvaro347/feed-reader-testing'
        },
        {
          title: 'My Portfolio website',
          img: './dist/img/website.png',
          info: 'My current website have been build with React, Flask and a database.',
          link: 'https://github.com/alvaro347/afr-website'
        },
      ]
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/hello/json")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.galleries
        });
      })
    }

    render() {


      return (


        <section id="developer">
          <div className='cover-cont'>
            <img src="./dist/img/code.png" className="cover"/>
          </div>

          <div className="dev-container">
            <div className="dev-intro">
              <h2>Full-Stack Web Developer</h2>

              <p>I have created numerous projects using the lastest tools and frameworks shuch us: React, Flask, WebPack, jQuery, JSON and databases (PostgreSQL). This website was build entirely from start to finish with React, Flask, Bootstrap, Webpack and Gulp</p>


            </div>

            <div className="skills-container">

              <ul className="dev-skills-list">

                <li><img src="./dist/img/frontend.png" className="dev-icon" /><p><b>Fron-End with frameworks</b> such as React, Knockout and Bootstrap</p></li>
                <li><img src="./dist/img/backend.png" className="dev-icon" /><p><b>Back-End web developement</b> with Flask and databases (PostgreSQL).</p></li>
                <li><img src="./dist/img/design.png" className="dev-icon" /><p><b>Design</b> and Animations with Photoshop and Illustrator.</p></li>
              </ul>
            </div>
          </div>

          <hr className="container"/>

          {/* <div className="btn-group btn-group-toggle selection" data-toggle="buttons">
          <label className="btn btn-secondary active">
          <input type="radio" name="options" id="option1"  /> Apps
        </label>
        <label className="btn btn-secondary">
        <input type="radio" name="options" id="option2" /> Web
      </label>
      <label className="btn btn-secondary">
      <input type="radio" name="options" id="option3"  /> Games
    </label>
  </div> */}

  <div className="dev-cards">

    { this.state.projects.map((project) => (
      <Card
        title = { project.title }
        img = {project.img}
        info = { project.info }
        key = { project.title }
        link = { project.link }
      />
    ))}

  </div>




</section>
);
}
}



export default Developer;
