import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'


class Showcase extends Component {
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
    .then(result =>
      this.setState(
        {
          isLoaded: true,
          items: result.galleries
        }
      )
    );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    return (

      <section id="showcase" role="banner">

        <img src="./dist/img/gallery/doodle.jpg" alt="" className="showcase-img"/>

        {/* <div className="showcase-text">
          <p>HOME</p>
        </div> */}

      </section>

    );
  }
}


export default Showcase;
