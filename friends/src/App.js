import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';

import Friends from './components/Friends';
import AddForm from './components/AddForm';
import Message from './components/Message';

const StyledEnvContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 20px;
  background: #ff9966;
  background: linear-gradient(to right, #ff5e62, #ff9966);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
`;

const friendsURL = 'http://localhost:5000/friends';

class App extends Component {
  state = {
    friends: null,
    error: null,
    loading: false
  };

  componentDidMount() {
    this.fetchFriends();
  }

  //GET/POST/UPDATE/DELETE REQUESTS

  fetchFriends = () => {
    this.startLoader();
    axios
      .get(friendsURL)
      .then(res => this.setFriends(res.data))
      .catch(res => this.setError(res.message))
      .finally(this.stopLoader);
  };

  postFriends = (name, age, email) => {
    this.startLoader();
    axios
      .post(friendsURL, { name, age, email })
      .then(res => this.setFriends(res.data))
      .catch(res => this.setError(res.message))
      .finally(this.stopLoader);
  };

  //SETTING OF STATE
  setFriends = friends => {
    this.setState({ friends: friends });
  };

  setError = error => {
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
        <AddForm postFriends={this.postFriends} />
        <Friends friends={this.state.friends} />
      </StyledEnvContainer>
    );
  }
}

App.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
  })
};

export default App;
