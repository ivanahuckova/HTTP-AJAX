import React from 'react';
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

  .name {
    font-size: 1.3rem;
    font-weight: bold;
    padding-bottom: 5px;
  }

  .action-button {
    padding: 5px 10px;
    background-color: white;
    color: #ff9966;
    cursor: pointer;
    font-size: 0.7rem;
    padding: 3px 7px;
    font-weight: bold;
    border: none;
    margin: 10px 5px 5px 5px;
    border-radius: 10px;
  }
`;

export default class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShow: false,
      friendIdToShowForm: null
    };
  }
  showForm = (bool, id) => {
    this.setState({
      showMessage: bool,
      friendIdToShowForm: id
    });
  };

  render() {
    return (
      this.props.friends && (
        <StyledFriends>
          {this.props.friends.map(friend => {
            return (
              <StyledFriend key={friend.id}>
                <div className="name">{friend.name}</div>
                <div>Age: {friend.age}</div>
                <div>Email: {friend.email}</div>
                <button className="action-button">Delete</button>
                <button onClick={() => this.showForm(true, friend.id)} className="action-button">
                  Update
                </button>
                {this.state.showMessage && friend.id === this.state.friendIdToShowForm && (
                  <form>
                    Name: <input type="text" />
                    <br />
                    Age: <input type="number" />
                    <br />
                    Email: <input type="email" />
                    <br />
                    <input className="submit-button" type="submit" />
                  </form>
                )}
              </StyledFriend>
            );
          })}
        </StyledFriends>
      )
    );
  }
}

Friends.propTypes = {
  friends: PropTypes.array
};
