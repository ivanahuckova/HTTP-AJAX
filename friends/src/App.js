import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const StyledEnvContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

class App extends Component {
  render() {
    return <StyledEnvContainer />;
  }
}

export default App;
