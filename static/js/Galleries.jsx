import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import Image from './Image'
require('../css/style.css');


class Galleries extends Component {
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
        console.log('Resultado', result);
        this.setState({
          isLoaded: true,
          items: result.galleries
        });
      })

    }

    render() {
      const { error, isLoaded, items } = this.state;
      return (

        <section id="galleries">
          {/* <div >
            <ul>
              { items.map(item => (
                <li key={item.id}>
                  {item.imgfile}
                </li>
              ))}
            </ul>

          </div> */}


          <img src="./dist/img/capsula.png" className="super"/>
          <div className="dev-container">
            <div className="dev-intro">
              <h2>Designer information</h2>

              <p>SLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>


            </div>

            {/* <div className="skills-container">

              <ul className="dev-skills-list">

                <li><img src="./dist/img/backend.png" className="dev-icon" /><p>Back-End web developement</p></li>
                <li><img src="./dist/img/frontend.png" className="dev-icon" /><p>Back-End web developement</p></li>
                <li><img src="./dist/img/frontend.png" className="dev-icon" /><p>Back-End web developement</p></li>
              </ul>
            </div> */}
          </div>

          {/* <hr className="container"/> */}

          <div className="btn-group btn-group-toggle selection" data-toggle="buttons">
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option3" autocomplete="off" /> All
            </label>
            <label className="btn btn-secondary active">

              <input type="radio" name="options" id="option1" autocomplete="off" checked /> Digital
            </label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option2" autocomplete="off" /> Traditional
            </label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option3" autocomplete="off" /> 3D
            </label>
          </div>

          <div className="image-gallery">
            <Image />
            <Image />
            <Image />
            <Image />
          </div>






      </section>
    );
  }
}



export default Galleries;
