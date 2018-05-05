import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Card from './Sub/Card'
import PortfolioEntry from './Sub/PortfolioEntry'



class Portfolio extends Component {


  constructor() {
    super();
    this.state = {
      portfolio: [
        {
          title: 'FZD School of Design',
          img: './dist/img/fzd.jpg',
          location: 'FZD - Singapore',
          date: ' 2018 - 2019',
          text: 'Concept design and product design in Feng Zhu School of Design. Find solutions to any design problem and create designs for the entertaiment industry. Using 3D Tools and 2D to create all designs.',
          keywords: [
            {
              tag: 'web',
              link: 'alvarofrdesign.com'
            }
          ]
        },
        {
          title: 'Udacity',
          img: './dist/img/udacity.png',
          location: 'Udacity.com',
          date: ' 2017 - 2018',
          text: 'Fron-End and Back-End of a website including databases, applications, APIs, etc. Knowledge in HTML, CSS, Javascript (with frameworks like React), Python, PostgreSQL, Ubuntu Server, Git, databases, Numpy, etc.',
          keywords: [
            {
              tag: 'web',
              link: 'alvarofrdesign.com'
            }
          ]
        },
        {
          title: 'Project Engineer',
          img: './dist/img/greenlots.png',
          location: 'Greenlots - Singapore',
          date: ' 2017 - 2018',
          text: 'Project engineer for electric vehicles and charging solutions. Managing the process from receiving the inquiry to the installations and the necessary maintenances to those chargers. I also assist meetings and handle the chargers database to keep track of every single item and inquiry.',
          keywords: [
            {
              tag: 'web',
              link: 'alvarofrdesign.com'
            }
          ]
        },
        {
          title: 'Electrical Engineer',
          img: './dist/img/rodritol.jpg',
          location: 'Rodritol - Spain',
          date: ' 2015 - 2017',
          text: 'Leading and managing teams for maintenance, fixing and tes- ting transformers and electric motors in a workshop and overseas from clients and power centrals of Canary Islands. Doing wiring, maintenance of transformation centers, replacing transformersʼ rubber seals and examining installations for machinery like trans- former protections, distribution panels, motors, UPS, etc.',
          keywords: [
            {
              tag: 'web',
              link: 'alvarofrdesign.com'
            }
          ]
        },
        {
          title: 'Degree in Electrical Engineer',
          img: './dist/img/ulpgc.jpg',
          location: 'ULPGC, Spain',
          date: ' 2011 - 2015',
          text: 'Electrical Engineer - Working to grade, rated outstanding: “Study and design of ships con- necting to the power grid in the port of Las Palmas de Gran Canaria”. The technology is called “Cold Ironing” or AMP (alternative maritime power).',
          keywords: [
            {
              tag: 'web',
              link: 'alvarofrdesign.com'
            }
          ]
        }
      ]
    };
  }

  componentDidMount() {

      window.scrollTo(0, 0)

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

      const { portfolio } = this.state;

      return (

        <section id="portfolio">

          <div className="cover-cont">
            <img src="./dist/img/capsula.jpg" className="cover"/>
          </div>

          <div className="dev-container">
            <div className="dev-intro">
              <h2>Portolio information</h2>
              <p>Information about my career. What projects I have been involded, education and job experience. This section will display a timeline with all the information</p>
            </div>
          </div>

          <div className="portfolio-feed">
            { portfolio.map((entry) => (
              <PortfolioEntry
                title = { entry.title }
                img = { entry.img }
                location = { entry.location }
                text = { entry.text }
                date = { entry.date }
                // keywords = { entry.keywords }
                key = { entry.title }
              />
            ))}
          </div>

        </section>

      );
    }
  }

  export default Portfolio;
