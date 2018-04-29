import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
require('../css/style.css');


class Image extends Component {




    render() {

      return (


          <div className="gallery">
            {/* <Link to="#"> */}
              <img src="./dist/img/capsula.png" alt="Trolltunga Norway" />
            {/* </Link> */}
            <div className="desc">Add a description of the image here</div>
          </div>

    );
  }
}



export default Image;
