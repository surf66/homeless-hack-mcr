import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Help extends Component {
  render() {
    return (
      <section>
        <div className="jumbotron">
          <Link to="/">
            <button type="button" className="btn btn-primary">
              <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span> Back
            </button>
          </Link>
          <h1>Help</h1>
          <p>Find help fast</p>
        </div>
      </section>
    );
  }
}

export default Help;
