import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Help extends Component {
  render() {
    return (
      <section>
        <Link to="/" className="btn btn-secondary btn-lg btn-block">To top menu</Link>
        <h1>Help</h1>
      </section>
    );
  }
}

export default Help;
