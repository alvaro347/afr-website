import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'


class Gallery extends Component {




  render() {

    return (


      <li className="gallery-card">
        <div className="card-img-container">
          <Link to="#"><img src="./dist/img/code.png" className="card-img"/></Link>
        </div>

        <div className="card-text">
          <h2>Work</h2>
          <Link to="#"><button type="button" className="btn btn-secondary">Link</button></Link>
        </div>
      </li>

    );
  }
}



export default Gallery;
