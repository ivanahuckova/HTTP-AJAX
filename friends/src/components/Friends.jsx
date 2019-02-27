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
`;

export default function Friends(props) {
  return (
    props.friends && (
      <StyledFriends>
        {props.friends.map(friend => {
          return (
            <StyledFriend key={friend.name}>
              <div className="name">{friend.name}</div>
              <div>Age: {friend.age}</div>
              <div>Email: {friend.email}</div>
            </StyledFriend>
          );
        })}
      </StyledFriends>
    )
  );
}

Friends.propTypes = {
  friends: PropTypes.array
};
