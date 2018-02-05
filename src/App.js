import React, { Component } from 'react';
import './sass/main.scss';

//////// ROUTER ////////
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

export default class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <h1>Test</h1>
          </div>
        </Router>
    )
  }
}
