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
      items: []
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


        <section id="developer" className="">
          <img src="./dist/img/code.png" className="super"/>
          <div className="dev-container">
            <div className="dev-intro">
              <h2>Developer information</h2>

              <p>Some of my developer skills are in Full-Stack web developement as a primary</p>


            </div>

            <div className="skills-container">

              <ul className="dev-skills-list">

                <li><img src="./dist/img/home.png" className="dev-icon" /><p>Back-End web developement</p></li>
                <li><img src="./dist/img/home.png" className="dev-icon" /><p>Back-End web developement</p></li>
                <li><img src="./dist/img/home.png" className="dev-icon" /><p>Back-End web developement</p></li>
              </ul>
            </div>
          </div>

          <hr className="container"/>

          <div className="btn-group btn-group-toggle selection" data-toggle="buttons">
            <label className="btn btn-secondary active">
              <input type="radio" name="options" id="option1" autoComplete="off" checked /> Apps
            </label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option2" autoComplete="off" /> Web
            </label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option3" autoComplete="off" /> Games
            </label>
          </div>

          <div className="dev-cards">

            <Card />
            <Card />
            <Card />

          </div>




        </section>
      );
    }
  }



  export default Developer;
