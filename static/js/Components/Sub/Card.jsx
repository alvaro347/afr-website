import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'


class Card extends Component {

  render() {
const { title, info, img, link } = this.props
    return (
      <div className="card">
        <div className="card-img-container">
          <a href={ link }><img src={ img } className="card-img"/></a>
        </div>

        <div className="card-text">
          <h2>{ title }</h2>
          <p>{ info }</p>
          <a href={ link }><button type="button" className="btn btn-secondary">Link</button></a>
        </div>
      </div>
    );
  }
}



export default Card;
