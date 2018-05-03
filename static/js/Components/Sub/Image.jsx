import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'


class Image extends Component {

  render() {

    return (

      <figure className="gallery-imgs">

        <a href={ this.props.img }>
          <img src={ this.props.img } className="gallery-img" alt="Trolltunga Norway" />
        </a>

      </figure>

    );
  }
}

export default Image;
