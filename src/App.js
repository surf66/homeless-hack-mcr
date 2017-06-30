import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Accommodation from './accommodation';

const RoutingComponent = () => (
  <Router>
    <div>
      <Route exact path="/" component={Menu}/>
      <Route path="/accommodation" component={Accommodation}/>
    </div>
  </Router>
)

const Menu = () => (
  <div>
    <h1>Find Help Tonight</h1>
    <Link to="/accommodation" className="btn btn-primary btn-lg btn-block">Find accommodation</Link>
    <Link to="/help" className="btn btn-primary btn-lg btn-block">Find help</Link>
  </div>
)

export default RoutingComponent;
