

import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'


class Donut extends Component {

  render() {

    return (

      <div className="card1">
        <div className={ this.props.class }>
          <div className="slice one"></div>
          <div className="slice two"></div>
          <div className="chart-center">
            <span></span>
          </div>
        </div>


      </div>


    );
  }
}

export default Donut;
