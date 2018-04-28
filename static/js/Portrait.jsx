import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Galleries from "./Galleries";


class Portrait extends Component {
  render() {

    return (
      <section id="portrait">

        <img className="portrait-img" src="./dist/img/portrait.jpg" alt=""/>

      </section>
    );
  }
}

export default Portrait;
