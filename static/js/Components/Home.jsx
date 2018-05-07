import React, { Component } from "react";
import Showcase from './Showcase'
import ScrollAnimation from 'react-animate-on-scroll';
import Thumbnail from './Sub/Thumbnail'

class Home extends Component {


  componentDidMount() {
    window.scrollTo(0, 0)
  }


  render() {
    return (
      <section id="home-content">

        <ScrollAnimation animateIn="fadeIn"
          animateOnce={true}
          duration={0.4}>

          <div className="container intro">
            <h2 className="quote-title">Some of my work</h2>
            <p className="quote-text">Here you can checkout some of my work that goes from design (industrial design, posters, concept design, etc), Full-Stack Website developer video and photography works.</p>
          </div>

        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn"
          animateOnce={true}
          duration={0.4}>

          <div className="container work">
            <div className="text-wrapper">
              <h3 className="works-title">Designer</h3>
              <hr/>
              <p>Creative designer with numerous pieces. Different media like digital, 3D, traditional, watercolor, acrylics, etc.</p>
              <p>I have bee studying design in the school of Brendan Baeza for one year. Concept design, including vehicles, characters, etc. Animated videos for a techonology company. Drawing and designing have been my favorite hobby.</p>
              <ul>
                <li>Concept Design</li>
                <li>Illustrations</li>
                <li>Animations</li>
              </ul>
              <Link to="/gallery"><button type="button" className="btn btn-outline-primary">Gallery</button></Link>
            </div>
            <div className="image-wrapper">
              <img src="./dist/img/isometric.png" alt="work1" className="work-image"/>
            </div>

          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="fadeIn"
          animateOnce={true}
          duration={0.4}>

          <div className="container work">

            <div className="text-wrapper">

              <h3 className="works-title">Developer</h3>
              <hr/>
              <p>Fron-End and Back-End developer including databases, applications, APIs, etc. Knowledge in HTML, CSS, Javascript ( React, jQuery), Python, PostgreSQL, Ubuntu, Git, databases, Numpy, etc.</p>
              <p>This website was made with Python and Flask for the Back-end and Fron-End with HTML, CSS and React.</p>
              <ul>
                <li>Full-Stack Web Developer: Amazon Lightsail, Flask, Log-Analysis, etc</li>
                <li>Fron-End Web Developer: Google APIs, Games, React, etc.</li>
                <li>Intro to Programming (Data analisis Specialisation).</li>
              </ul>


              <Link to="/developer"><button type="button" className="btn btn-outline-primary button-3">Projects</button></Link>

            </div>
            <div className="image-wrapper">
              <img src="./dist/img/code.png" alt="work1" className="work-image"/>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn"
          animateOnce={true}
          duration={0.4}>

          <div  className="container work">

            <div className="text-wrapper">
              <h3 className="works-title">Photography</h3>
              <hr/>
              <p>One of my favourites hobbies it's to take photos. I usually like urban photography and landscape photography the most. Some of my albums are moments or events like the Night Market that can be found in Singapore</p>
              <p>I also like to make time-lapses from different landscapes. Some of my time-lapses includes my designs as a video.</p>
              <button type="button" className="btn btn-outline-primary">Portfolio</button>
            </div>
            <div className="image-wrapper">
              <img src="./dist/img/photo.jpg" alt="work1" className="work-image"/>
            </div>
          </div>
        </ScrollAnimation>

      </section>
    );
  }
}

export default Home;
