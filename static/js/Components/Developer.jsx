import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Card from './Sub/Card'
import Donut from './Sub/Donut'
import ScrollAnimation from 'react-animate-on-scroll';


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
    window.scrollTo(0, 0)
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


              <ScrollAnimation animateIn="fadeIn"
                animateOnce={true}
                duration={0.4}
                >

                  <div className="donuts">
                    <ul className="donut-list">
                      <li className="donut-item">
                        <Donut
                          skill= 'HTML'
                          class = "donut-chart chart1"
                        /><h4>HTML 5</h4></li>
                        <li className="donut-item">
                          <Donut
                            skill = "CSS"
                            class = "donut-chart chart2"
                          /><h4>CSS 3</h4>
                        </li>
                        <li className="donut-item">
                          <Donut
                            skill = "Javascript"
                            class = "donut-chart chart3"
                          /><h4>Javascript</h4>
                        </li>
                      </ul>
                    </div>
                  </ScrollAnimation>


                </div>




                <div className="website">
                  <ScrollAnimation animateIn="fadeIn"
                    animateOnce={true}
                    duration={0.4}>
                    <div className="website-text">
                      <h2>This website was build from zero</h2>
                      <hr className="container"/>
                      <p>I build this website using the lastest technologies in web development. The Fron-End it's build with React, jQuery, HTML5, SASS and CSS3. For the Back-End I used Python (with Flask framework) to manage the server side. Also, it have a database (PostgreSQL) for having all the galleries, works and portfolio information of this website.</p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeIn"
                    animateOnce={true}
                    duration={0.4}>
                    <div className="website-list-cont">
                      <ul className="website-list">
                        <li className="website-item"><i className="fab fa-react web-icon"></i><p><b>React</b></p></li>
                        <li className="website-item"><i className="fab fa-html5 web-icon"></i><p><b>HTML 5</b></p></li>
                        <li className="website-item"><i className="fab fa-css3-alt web-icon"></i><p><b>CSS 3</b></p></li>
                        <li className="website-item"><i className="fas fa-database web-icon"></i><p><b>PostgreSQL</b></p></li>
                        <li className="website-item"><i className="fab fa-python web-icon"></i><p><b>Flask</b></p></li>
                      </ul>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="fadeIn"
                    animateOnce={true}
                    duration={0.4}>
                    <div className="website-text">
                      {/* <h2>Other technologies used</h2> */}
                      {/* <hr className="container"/> */}
                      <p>I also used some other techonologies to build this website such a task runner (Gulp) and a builder (Webpack). Git was used to keep track of the files (version control) and SASS for making more versitele CSS files. Bootstrap and Fonts Awesome for the Front-End were used also.</p>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="fadeIn"
                    animateOnce={true}
                    duration={0.4}>
                    <div className="website-list-cont">
                      <ul className="website-list">
                        <li className="website-item"><i className="fab fa-gulp web-icon"></i><p><b>Gulp</b></p></li>
                        <li className="website-item"><i className="fas fa-cube web-icon"></i><p><b> Webpack</b></p></li>
                        <li className="website-item"><i className="fas fa-code-branch web-icon"></i><p><b>Git</b></p></li>
                        <li className="website-item"><i className="fab fa-sass web-icon"></i><p><b>SASS</b></p></li>
                      </ul>
                    </div>
                  </ScrollAnimation>
                </div>




              </div>

              {/* <hr className="container"/> */}

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
