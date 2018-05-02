import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'


class Image extends Component {




  render() {

    return (


      <figure className="gallery-imgs">
        <Link to="#">
          <img src={ this.props.img } className="gallery-img" alt="Trolltunga Norway" />
        </Link>
        {/* <div class="middle">
          <div class="text">Capsula en el desierto</div>
        </div> */}
      </figure>



    );
  }
}



export default Image;
