import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link
  // etc.
} from 'react-router-dom'

import App from './containers/App';

import Store from './store';

import '../styles/index.scss';

render(
  <Provider store={ Store }>
    <Router>
      <div>
        <Route exact path="/" component={ App } />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
