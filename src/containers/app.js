import React, { Component } from 'react';
import _ from 'lodash';

import TestComponent from '../components/TestComponent';

export default class App extends Component {
  render() {
    return (
      <div>
        Hello App
        <TestComponent />
      </div>
    );
  }
}
