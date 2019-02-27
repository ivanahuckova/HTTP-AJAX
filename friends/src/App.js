import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';

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

const StyledMessage = styled.div`
  width: 100vw;
  padding-top: 10%;
  text-align: center;
  font-size: 1.3rem;
  color: white;
`;

class App extends Component {
  state = {
    friends: null,
    error: null,
    loading: false
  };

  componentDidMount() {
    this.fetchFriends();
  }

  fetchFriends = () => {
    this.startLoader();
    axios
      .get('http://localhost:5000/friend')
      .then(res => this.addFriends(res.data))
      .catch(this.addError);
  };
  addFriends = friends => {
    this.stopLoader();
    this.setState({ friends: friends });
  };

  addError = error => {
    this.stopLoader();
    this.setState({ erro: error });
  };

  startLoader = () => {
    this.setState({ loading: true });
  };

  stopLoader = () => {
    this.setState({ loading: false });
  };
  render() {
    if (this.state.loading) {
      return (
        <StyledMessage>
          <span role="img" aria-label="hand">
            👋
          </span>{' '}
          Loading your friends
        </StyledMessage>
      );
    }

    if (this.state.error) {
      return (
        <StyledMessage>
          <span role="img" aria-label="hand">
            ☹️
          </span>{' '}
          Something went wrong. Try to refresh the page.
        </StyledMessage>
      );
    }

    return (
      <StyledEnvContainer>
        <Form />
        <Friends friends={this.state.friends} />
      </StyledEnvContainer>
    );
  }
}

export default App;
