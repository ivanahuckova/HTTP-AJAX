import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

import Friends from './components/Friends';
import Form from './components/Form';

const StyledEnvContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ff9966;
  background: linear-gradient(to right, #ff5e62, #ff9966);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
`;

class App extends Component {
  render() {
    return (
      <StyledEnvContainer>
        <Form />
        <Friends />
      </StyledEnvContainer>
    );
  }
}

export default App;
