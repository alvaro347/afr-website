import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
require('../css/style.css');


class Card extends Component {

  render() {

    return (
      <div className="card">
        <div className="card-img-container">
          <Link to="#"><img src="./dist/img/code.png" className="card-img"/></Link>
        </div>

        <div className="card-text">
          <h2>Work</h2>
          <Link to="#"><button type="button" className="btn btn-secondary">Link</button></Link>
        </div>
      </div>
    );
  }
}



export default Card;
