import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from './data/gm-support-and-advice-services';

class Provider extends Component {

  constructor() {
    super();

    this.state = {
      provider: {}
    }
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
    this.setState({ provider: provider });
  }

  render() {
    let self = this;
    console.log(self.state.provider.openingTimes);
    return (
      <section>
        <Link to="/" className="btn btn-secondary btn-lg btn-block">To top menu</Link>
        <h1>{self.state.provider.serviceProviderName}</h1>
        <p>{self.state.provider.info}</p>
        <p>Open 24/7: {self.state.provider.isOpen247}</p>
        <p>Opening Times</p>
      </section>
    );
  }
}

export default Provider;
