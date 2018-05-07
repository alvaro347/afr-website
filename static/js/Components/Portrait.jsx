import React, { Component } from "react";
import ScrollAnimation from 'react-animate-on-scroll';

class Portrait extends Component {
  render() {

    return (

      <section id="portrait">

        <ScrollAnimation animateIn="fadeIn"
          animateOnce={true}
          duration={0.4}>

          <img className="portrait-img" src="./dist/img/portrait.jpg" alt=""/>

        </ScrollAnimation>


      </section>
    );
  }
}

export default Portrait;
