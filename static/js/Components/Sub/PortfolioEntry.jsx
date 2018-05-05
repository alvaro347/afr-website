import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';

class PortfolioEntry extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    const { img, title, location, text, keywords, date } = this.props

    return (

      <ScrollAnimation animateIn="fadeIn"
        animateOnce={true}
        duration={0.4}
        >

      <article className="entry">
        <div className="entry-cont">

          <div className="timeline">
            <div className="timeline-dot"></div>
          </div>

          <div className="entry-text">
            <h3 className="entry-title">{ title }</h3>
            <hr/>
            <h4 className="entry-title-2">{ location }, <i>{ date }</i></h4>
            <p className="entry-info">{ text }</p>
            <p className="entry-key">{ keywords }</p>
          </div>

          <div className="entry-img-cont">
            <img src={ img } className="entry-img" alt="" />
          </div>

        </div>
      </article>

    </ScrollAnimation>

    );
  }
}

export default PortfolioEntry;
