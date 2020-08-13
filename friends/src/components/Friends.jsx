import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//COMPONENTS IMPORT
import UpdateFrom from './UpdateForm';

//STYLED COMPONENTS
const StyledFriends = styled.div`
  width: 80vw;
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
  width: 35vw;
  font-weight: bold;

  div {
    padding: 5px 0;
  }

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
    font-size: 0.8rem;
    padding: 3px 10px;
    font-weight: bold;
    border: none;
    margin: 10px 5px 5px 5px;
    border-radius: 10px;
  }
`;

//EXPORT DEFAULT CLASS
export default class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldFormShow: false,
      friendIdToShowForm: null
    };
  }
  //SET UP SHOWING OF FORM WHEN CLICKED ON UPDATE
  showForm = (bool, id) => {
    this.setState({
      shouldFormShow: bool,
      friendIdToShowForm: id
    });
  };

  //INPUT REFS
  inputRefName = React.createRef();
  inputRefAge = React.createRef();
  inputRefEmail = React.createRef();
  checkRefFavorite = React.createRef();

  //RENDER
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
                {friend.favorite && (
                  <div>
                    <span role="img" aria-label="heart emoji">
                      💛
                    </span>
                    Friend
                  </div>
                )}
                {/*DELETE BUTTON - DELETE ON  CLICK*/}
                <button
                  onClick={event => {
                    this.props.deleteFriends(friend.id);
                  }}
                  className="action-button">
                  Delete
                </button>
                {/*UPDATE BUTTON - IF CLICKED, UPDATE FORM APPEARS*/}
                <button onClick={() => this.showForm(true, friend.id)} className="action-button">
                  Update
                </button>
                {this.state.shouldFormShow && friend.id === this.state.friendIdToShowForm && <UpdateFrom friend={friend} putFriends={this.props.putFriends} showForm={this.showForm} />}
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
