import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
require('../css/style.css');


class Developer extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/hello/json")
    .then(res => res.json())
    .then(
      (result) => {
        console.log('Resultado', result);
        this.setState({
          isLoaded: true,
          items: result.galleries
        });
      })

    }

    render() {
      const { error, isLoaded, items } = this.state;
      
      return (
        <div >
          <ul>
          { items.map(item => (
            <li key={item.id}>
            {item.imgfile}
            </li>
          ))}
        </ul>




    </div>
  );
}
}



export default Developer;
