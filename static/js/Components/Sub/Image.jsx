import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';

class Image extends Component {

  render() {

    return (

      <figure className="gallery-imgs">

        <ScrollAnimation animateIn="fadeIn"
          animateOnce={true}
          duration={0.4}>

          <a href={ this.props.img }>
            <img src={ this.props.img } className="gallery-img" alt="Trolltunga Norway" />
          </a>

        </ScrollAnimation>

      </figure>

    );
  }
}

export default Image;
