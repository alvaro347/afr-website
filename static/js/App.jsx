import React from "react";
require('../css/style.css');

import loader from '../img/person_2.jpg';

export default class App extends React.Component {
  render () {
    return (
      <div>

      <h2>Card</h2>

      <div className="card">
        <img src="dist/img/person_2.jpg" alt="Avatar" className="img"/>
        <div className="container">
          <h4><b>Test</b></h4>
          <p>Test</p>
        </div>
      </div>
    </div>
    );
  }
}
