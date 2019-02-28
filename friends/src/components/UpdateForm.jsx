import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledUpdateForm = styled.form`
  margin: 20px 0 10px 0;

  input {
    margin: 5px 0;
    line-height: 2;
    border: none;
    border-radius: 10px;
    width: auto;
    padding: 0 30px 0 7px;
    font-size: 0.8rem;
    color: #ff9966;
    box-sizing: content-box;
    font-weight: bold;

    &:last-child {
      text-align: center;
      font-weight: bold;
      padding: 1px 10px;
      cursor: pointer;
      background-color: #ff9966;
      color: white;
    }
  }
`;

//EXPORT DEFAULT CLASS
export default class UpdateFrom extends React.Component {
  //INPUT REFERNECES
  inputRefName = React.createRef();
  inputRefAge = React.createRef();
  inputRefEmail = React.createRef();

  //RENDER
  render() {
    return (
      <StyledUpdateForm>
        Name: <input type="text" defaultValue={this.props.friend.name} ref={this.inputRefName} />
        <br />
        Age: <input type="number" defaultValue={this.props.friend.age} ref={this.inputRefAge} />
        <br />
        Email: <input type="email" defaultValue={this.props.friend.email} ref={this.inputRefEmail} />
        <br />
        {/* BUTTON TO SUBMIT THE CHANGE*/}
        <input
          className="submit-button"
          type="submit"
          onClick={event => {
            event.preventDefault();
            const id = this.props.friend.id;
            const name = this.inputRefName.current.value;
            const age = this.inputRefAge.current.value;
            const email = this.inputRefEmail.current.value;

            this.props.putFriends(id, name, age, email);
            //FORM WILL BE HIDDEN AGAIN
            this.props.showForm(false, this.props.friend.id);
          }}
        />
      </StyledUpdateForm>
    );
  }
}

UpdateFrom.propTypes = {
  friend: PropTypes.object,
  putFriends: PropTypes.func,
  showForm: PropTypes.func
};
