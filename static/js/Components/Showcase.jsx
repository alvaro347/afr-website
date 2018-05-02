import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'


class Showcase extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }


// this.showDivs(this.state.slideIndex)
//
//   plusDivs(n) {
//   this.showDivs(this.state.slideIndex += n);
// }
// currentDiv(n) {
//   showDivs(this.state.slideIndex = n);
// }
//
//
// showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {this.state.slideIndex = 1}
//   if (n < 1) {this.state.slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";
//   }
//   x[this.state.slideIndex-1].style.display = "block";
// }

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

        <section id="showcase" role="banner">
          <img src="./dist/img/gallery/machine.jpg" alt="" className="cover-img"/>
          {/* <div className="w3-content w3-display-container" style="max-width:800px">
            <img className="mySlides" src="./dist/css/img/capsula.png"  />
            <img className="mySlides" src="./dist/css/img/capsula.png"  />
            <img className="mySlides" src="./dist/css/img/capsula.png" />
            <div className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:100%">
              <div className="w3-left w3-hover-text-khaki" onClick={this.plusDivs(-1)}>&#10094;</div>
              <div className="w3-right w3-hover-text-khaki" onClick={this.plusDivs(1)}>&#10095;</div>
              <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={this.currentDiv(1)}></span>
              <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={this.currentDiv(2)}></span>
              <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={this.currentDiv(3)}></span>
            </div> */}
          {/* </div> */}
        </section>

      );
    }
  }


  export default Showcase;
