import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Hello from "./Hello";
require('../css/style.css');



class Home extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src="../img/person_2.jpg" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/hello">Hello 222</a>
                <li><Link to="/hello">Hello</Link></li>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
