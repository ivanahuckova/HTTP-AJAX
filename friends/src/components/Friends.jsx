import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFriends = styled.div`
  width: 50vw;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
  margin-top: 30px;
`;

const StyledFriend = styled.div`
  border-radius: 10px;
  background: #ff9966;
  background: linear-gradient(to right, #ff5e62, #ff9966);

  color: white;
  padding: 10px;
  margin: 10px;
  width: 20vw;
`;

const StyledMessage = styled.div`
  color: white;
  margin-top: 30px;
`;

export default class Friends extends React.Component {
  state = {
    friends: null,
    error: null,
    loading: false
  };

  componentDidMount() {
    this.fetchFriends();
  }

  fetchFriends = () => {
    this.startSpinner();
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.addFriends(res.data))
      .catch(res => this.addError(res.message));
  };
  addFriends = friends => {
    this.stopSpinner();
    this.setState({ friends: friends });
  };

  addError = error => {
    this.stopSpinner();
    this.setState({ error: error });
  };

  startSpinner = () => {
    this.setState({ loading: true });
  };

  stopSpinner = () => {
    this.setState({ loading: false });
  };

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    console.log(this.state.friends);
    if (this.state.loading) {
      return <StyledMessage>Loading friends...</StyledMessage>;
    }

    if (this.state.error) {
      return <StyledMessage>Error while loading friends occured...</StyledMessage>;
    }

    if (this.state.friends) {
      return (
        <StyledFriends>
          {this.state.friends.map(friend => {
            return (
              <StyledFriend key={friend.name}>
                <div>Name: {friend.name}</div>
                <div>Age: {friend.age}</div>
                <div>Email: {friend.email}</div>
              </StyledFriend>
            );
          })}
        </StyledFriends>
      );
    }

    if (!this.state.friends) {
      return <div />;
    }
  }
}

Friends.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
  })
};
