import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

import Friends from './components/Friends';
// import Form from './components/Form'

const StyledEnvContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #59c173; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #5d26c1, #a17fe0, #59c173); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #5d26c1, #a17fe0, #59c173); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

class App extends Component {
  render() {
    return (
      <StyledEnvContainer>
        <Friends />
        {/* <Form /> */}
      </StyledEnvContainer>
    );
  }
}

export default App;
