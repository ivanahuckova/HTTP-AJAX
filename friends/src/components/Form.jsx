import React from 'react';
import styled from 'styled-components';

const StyledFrom = styled.div`
  color: white;
  input {
    border-radius: 10px;
    line-height: 2;
    border: none;
    margin-right: 10px;
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

export default class Form extends React.Component {
  inputRefName = React.createRef();
  inputRefAge = React.createRef();
  inputRefEmail = React.createRef();

  render() {
    return (
      <StyledFrom>
        <form>
          Name: <input type="text" ref={this.inputRefName} />
          Age: <input type="number" ref={this.inputRefAge} />
          Email: <input type="email" ref={this.inputRefEmail} />
          <input
            className="submit-button"
            onClick={event => {
              event.preventDefault();

              const name = this.inputRefName.current.value;
              const age = this.inputRefAge.current.value;
              const email = this.inputRefEmail.current.value;
              this.props.postFriends(name, age, email);
            }}
            type="submit"
          />
        </form>
      </StyledFrom>
    );
  }
}
