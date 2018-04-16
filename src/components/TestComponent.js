import React, { Component } from 'react';
import styled from 'styled-components';

const Text = styled.div`
  background: ${ props => props.val > 4 ? 'grey' : '#ddd' }};
`;

export default class TestComponent extends Component {
  render() {
    return (
      <div>
        TestComponent
        <Text val={ 3 } >Some Text</Text>
        <Text val={ 7 } >Background should be darker based on value passed directly into styled component</Text>
      </div>
    );
  }
}
