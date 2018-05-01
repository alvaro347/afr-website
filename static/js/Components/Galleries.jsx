import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Image from './Sub/Image'
import Gallery from './Sub/Gallery'
import Radio from './Sub/Radio'


class Galleries extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      gallery: 'all',
      active: 'btn btn-secondary active',
      notactive: 'btn btn-secondary',
      galleries: ['All', 'Digital', 'Traditional', '3D']
    };
  }

  handleChange(event) {

    this.setState({
      gallery: event.target.value
    });

  }




  componentDidMount() {
    fetch("http://localhost:3000/hello/json")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.galleries

        });
      })
    }

    render() {
      const { error, isLoaded, items } = this.state;
      return (

        <section id="galleries">
          {/* <div>
            <ul>
            { items.map(item => (
            <li key={item.id}>
            {item.imgfile}
          </li>
        ))}
      </ul>

    </div> */}

<div className="cover-cont">  <img src="./dist/img/capsula.jpg" className="cover"/></div>



    <div className="dev-intro">
      <h2>Designer information</h2>

      <p>SLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>


    </div>

    <div>

      <ul className="dev-cards">

        <Gallery />
        <Gallery />
        <Gallery />

      </ul>

    </div>


    <hr className="container"/>

    <div className="btn-group btn-group-toggle selection" data-toggle="buttons">

      <label className={ this.state.gallery === "all" ? this.state.active : this.state.notactive }>
        <input
          type="radio"
          value="all"
          id="option1"
          checked={this.state.gallery === "all"}
          onChange={this.handleChange}

        /> All
      </label>

      <label className={ this.state.gallery === "digital" ? this.state.active : this.state.notactive }>
        <input
          type="radio"
          value="digital"
          checked={this.state.gallery === "digital"}
          onChange={this.handleChange}
          id="option2"
        /> Digital
      </label>

      <label className={ this.state.gallery === "traditional" ? this.state.active : this.state.notactive }>
        <input
          type="radio"
          value="traditional"
          id="option3"
          checked={this.state.gallery === "traditional"}
          onChange={this.handleChange}
        /> Traditional
      </label>

      <label className={ this.state.gallery === "3d" ? this.state.active : this.state.notactive }>
        <input
          type="radio"
          value="3d"
          id="option4"
          checked={this.state.gallery === "3d"}
          onChange={this.handleChange}
        /> 3D
      </label>
    </div>


    {/* <div className="btn-group btn-group-toggle selection" data-toggle="buttons">

      { this.state.galleries.map((gallery) => (
        <Radio
          active = {this.state.active}
          notactive = {this.state.notactive}
          array={ gallery }
          key= { gallery }
          item = {this.state.gallery }
        />
      ))}

    </div> */}


    <div className="gallery">
      <Image />
      <Image />
      <Image />
      <Image />
    </div>






  </section>
);
}
}



export default Galleries;
