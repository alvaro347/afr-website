import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Card from './Sub/Card'



class Portfolio extends Component {
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

        <section id="portfolio">


          <div className="cover-cont">
            <img src="./dist/img/capsula.jpg" className="cover"/>
          </div>


          <div className="dev-container">
            <div className="dev-intro">
              <h2>Portolio information</h2>

              <p>SLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>


            </div>


          </div>


          <div className="btn-group btn-group-toggle selection" data-toggle="buttons">
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option3" autocomplete="off" /> All
            </label>
            <label className="btn btn-secondary active">

              <input type="radio" name="options" id="option1" autocomplete="off" checked /> Portfplio
            </label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option2" autocomplete="off" /> Traditional
            </label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option3" autocomplete="off" /> 3D
            </label>
          </div>

          <div className="image-gallery">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>






        </section>
      );
    }
  }



  export default Portfolio;
