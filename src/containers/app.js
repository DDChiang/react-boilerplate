import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import TestComponent from '../components/TestComponent';

const Title = styled.h1`
  background: red;
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <Title>Hello App</Title>
        <TestComponent />
      </div>
    );
  }
}
