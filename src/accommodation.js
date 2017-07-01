import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from './data/gm-support-and-advice-services';

class Accommodation extends Component {

  constructor() {
    super();

    this.state = {
      providers: []
    }
  }

  componentDidMount() {
    this.setState({ providers: data.providers });
  }

  render() {
    return (
      <section>
        <div className="jumbotron">
          <Link to="/">
            <button type="button" className="btn btn-primary">
              <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span> Back
            </button>
          </Link>
          <h1>Accommodation</h1>
          <p>Find shelter near you for tonight</p>
        </div>

        <ul className="list-group">
          {this.state.providers.map(provider => (
            <li className="list-group-item" key={provider.id}>
              <Link to={`/provider/${provider.id}`}>
                <h4>{provider.serviceProviderName}</h4>
                <p>{provider.categorySynopsis}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Accommodation;
