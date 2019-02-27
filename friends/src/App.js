import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';

import Friends from './components/Friends';
import Form from './components/Form';
import Message from './components/Message';

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
      .get('http://localhost:5000/friends')
      .then(res => this.setFriends(res.data))
      .catch(res => this.setError(res.message));
  };
  setFriends = friends => {
    this.stopLoader();
    this.setState({ friends: friends });
  };

  setError = error => {
    this.stopLoader();
    this.setState({ error: error });
  };

  startLoader = () => {
    this.setState({ loading: true });
  };

  stopLoader = () => {
    this.setState({ loading: false });
  };
  render() {
    return (
      <StyledEnvContainer>
        <Message error={this.state.error} loading={this.state.loading} />
        <Form />
        <Friends friends={this.state.friends} />
      </StyledEnvContainer>
    );
  }
}

export default App;
