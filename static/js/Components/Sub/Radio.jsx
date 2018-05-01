

import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'


class Radio extends Component {


  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: 'All',
    };

  }



  handleChange(event) {
    this.setState({
      value: event.target.value
    });

  }

  render() {
    const { item, array, active, notactive } = this.props
    const { value } = this.state

    return (


      <label  className={ value === array ? active : notactive }>
        <input
          type="radio"
          id={array}
          value = { this.props.array }
          checked = { array === value }
          onChange = { this.handleChange }
        />{ array }
      </label>

    );

  }
}



export default Radio;
