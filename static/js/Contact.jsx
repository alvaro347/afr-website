import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Galleries from "./Galleries";



class Contact extends Component {
  render() {

    return (
      <section id="contact">

          <h2>About, Contact me</h2>
          <p>I'm avialable for work. You can contact me in this form</p>
          <hr/>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Your name:</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Your name"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Your e-mail:</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your e-mail"/>
            </div>


            <div className="form-group">
              <label htmlFor="">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
          </form>


      </section>
    );
  }
}

export default Contact;
