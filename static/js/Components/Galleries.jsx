import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Image from './Sub/Image'
import Gallery from './Sub/Gallery'


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
          {/* <div>
            <ul>
            { items.map(item => (
            <li key={item.id}>
            {item.imgfile}
          </li>
        ))}
      </ul>

    </div> */}


          <img src="./dist/img/capsula.png" className="super"/>


          <div className="dev-intro">
            <h2>Designer information</h2>

            <p>SLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>


          </div>

          <div>

            <ul className="galleries-list">

              <Gallery />
              <Gallery />
              <Gallery />

            </ul>

          </div>


          <hr className="container"/>

          <div className="btn-group btn-group-toggle selection" data-toggle="buttons">
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option3" autoComplete="off" defaultChecked /> All
            </label>
            <label className="btn btn-secondary active">

              <input type="radio" name="options" id="option1" autoComplete="off" /> Digital
            </label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option2" autoComplete="off" /> Traditional
            </label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option3" autoComplete="off" /> 3D
            </label>
          </div>

          <div className="gallery">
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
