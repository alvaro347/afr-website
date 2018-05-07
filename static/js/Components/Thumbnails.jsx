import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Thumbnail from './Sub/Thumbnail'



class Thumbnails extends Component {



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
      galleries: ['All', 'Digital', 'Traditional', '3D'],
      images: [
        {
          title: 'West',
          img: './dist/img/gallery/west.jpg',
          info: 'This is a project create with React',
          link: 'https://github.com/alvaro347/google-maps-react'
        },
        {
          title: 'Chinese House',
          img: './dist/img/gallery/chinesehouse.jpg',
          info: 'Full-Stack Project: Gallery with upload and edit features',
          link: 'https://github.com/alvaro347/project-catalog'
        },
        {
          title: 'Mascaras',
          img: './dist/img/gallery/mascaras.jpg',
          info: 'My current website have been build with React, Flask and a database.',
          link: 'https://github.com/alvaro347/afr-website'
        },
        {
          title: 'Droid',
          img: './dist/img/gallery/droid.jpg',
          info: 'This is a project create with React',
          link: 'https://github.com/alvaro347/google-maps-react'
        },
        {
          title: 'Bosque',
          img: './dist/img/gallery/bosque.jpg',
          info: 'Full-Stack Project: Gallery with upload and edit features',
          link: 'https://github.com/alvaro347/project-catalog'
        }
      ]
    };
  }

  handleChange(event) {
    this.setState({
      gallery: event.target.value
    });

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
      const { error, isLoaded, items } = this.state;
      return (

        <section id="thumbnails">

          <div className="thumbnails-container">
            { this.state.images.map((image) => (
              <Thumbnail
                img = {image.img}
                key = { image.title }
              />
            ))}
          </div>


        </section>

      );
    }
  }



  export default Thumbnails;
