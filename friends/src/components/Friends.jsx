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
  background: linear-gradient(to right, #5d26c1, #a17fe0, #59c173);
  color: white;
  padding: 10px;
  margin: 10px;
  width: 20vw;
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
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.addFriends(res.data))
      .catch(res => this.addError(res.message));
  };
  addFriends = friends => {
    this.setState({ friends: friends });
  };

  addError = error => {
    this.setState({ error: error });
  };

  render() {
    console.log(this.state.friends);
    return (
      <div>
        <StyledFriends>
          {this.state.friends &&
            this.state.friends.map(friend => {
              return (
                <StyledFriend key={friend.name}>
                  <div>Name: {friend.name}</div>
                  <div>Age: {friend.age}</div>
                  <div>Email: {friend.email}</div>
                </StyledFriend>
              );
            })}

          {/*If no friends are loaded:*/}
          {!this.state.friends && <div>Loading friends...</div>}
        </StyledFriends>
      </div>
    );
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
