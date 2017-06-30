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
        <Link to="/" className="btn btn-secondary btn-lg btn-block">To top menu</Link>
        <h1>Accommodation</h1>

        <ul className="list-group">
          {this.state.providers.map(provider => (
            <li className="list-group-item" key={provider.id}>
              <div className="row">
                <Link to={`/provider/${provider.id}`}>
                  <div className="col-xs-7">
                    <h4>{provider.serviceProviderName}</h4>
                    <p>{provider.categorySynopsis}</p>
                  </div>
                  <div className="col-xs-5">
                    <span className="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"></span>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Accommodation;
