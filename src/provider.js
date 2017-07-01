import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from './data/gm-support-and-advice-services';

class Provider extends Component {

  constructor() {
    super();

    this.state = {
      provider: {}
    }

    this._getLocation = this._getLocation.bind(this);
  }

  componentDidMount() {
    let providerId = window.location.pathname.replace('/provider/', '');

    function findId(data, id) {
      var providers = data.providers;
      for (var i = 0; i < providers.length; i++) {
        if (providers[i].id == id) {
          return(providers[i]);
        }
      }
    }

    var provider = findId(data, providerId);
    this._getLocation();
    this.setState({ provider: provider });
    window.initMap();
  }

  render() {
    let self = this;
    return (
      <section>
        <div className="jumbotron">
          <Link to="/accommodation">
            <button type="button" className="btn btn-primary">
              <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span> Back
            </button>
          </Link>
          <h1>{self.state.provider.serviceProviderName}</h1>
          <p dangerouslySetInnerHTML={{__html: self.state.provider.info}} />
        </div>
      </section>
    );
  }

  _getLocation() {
    window.myLocation = { lat: 53.4807590, lng: -2.2426310 }
  }
}

export default Provider;
