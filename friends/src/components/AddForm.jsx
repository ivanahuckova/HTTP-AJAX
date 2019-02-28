import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//STYLED COMPONENTS
const StyledFrom = styled.div`
  color: white;
  margin: 30px 0;
  input {
    border-radius: 10px;
    line-height: 2;
    border: none;
    margin-right: 10px;
    color: #ff9966;
    font-weight: bold;
    font-size: 0.8rem;
    &:focus {
      outline: none;
    }
  }
  .submit-button {
    background-color: white;
    color: #ff9966;
    cursor: pointer;
    font-size: 1rem;
    padding: 0 20px;
    font-weight: bold;
  }
`;

//EXPORT DEFAULT CLASS
export default class AddForm extends React.Component {
  //INPUT REFERENCES
  inputRefName = React.createRef();
  inputRefAge = React.createRef();
  inputRefEmail = React.createRef();

  clearInput = () => {
    this.inputRefName.current.value = '';
    this.inputRefAge.current.value = '';
    this.inputRefEmail.current.value = '';
  };

  //RENDER
  render() {
    return (
      <StyledFrom>
        <form>
          Name: <input type="text" ref={this.inputRefName} />
          Age: <input type="number" ref={this.inputRefAge} />
          Email: <input type="email" ref={this.inputRefEmail} />
          {/*BUTTON TO ADD NEW FRIEND*/}
          <input
            className="submit-button"
            onClick={event => {
              event.preventDefault();
              const name = this.inputRefName.current.value;
              const age = this.inputRefAge.current.value;
              const email = this.inputRefEmail.current.value;
              this.props.postFriends(name, age, email);
              this.clearInput();
            }}
            type="submit"
          />
        </form>
      </StyledFrom>
    );
  }
}

AddForm.propTypes = {
  postFriends: PropTypes.func
};
