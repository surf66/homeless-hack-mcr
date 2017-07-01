import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Accommodation from './accommodation';
import Help from './help';
import Provider from './provider';

const RoutingComponent = () => (
  <Router>
    <div>
      <Route exact path="/" component={Menu}/>
      <Route path="/accommodation" component={Accommodation}/>
      <Route path="/help" component={Help}/>
      <Route path="/provider/:id" component={Provider}/>
    </div>
  </Router>
)

const Menu = () => (
  <section>
    <ul className="list-group">
      <li className="list-group-item">
        <Link to={`/accommodation`}>
          <h4>Find Accommodation</h4>
          <p>Find somehwhere to stay tonight</p>
        </Link>
      </li>
      <li className="list-group-item">
        <Link to={`/help`}>
          <h4>Find Help</h4>
          <p>Talk to someone</p>
        </Link>
      </li>
    </ul>
  </section>
)

export default RoutingComponent;
