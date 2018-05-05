import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';

class Card extends Component {

  render() {
const { title, info, img, link } = this.props
    return (
      <ScrollAnimation animateIn="fadeIn"
        animateOnce={true}
        duration={0.4}
        >

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
    </ScrollAnimation>
    );
  }
}



export default Card;
