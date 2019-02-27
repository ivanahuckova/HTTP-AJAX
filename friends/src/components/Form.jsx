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
  }
`;

export default function Form() {
  return (
    <StyledFrom>
      <form action="" method="post">
        Name: <input type="text" />
        Age: <input type="number" />
        Email: <input type="email" />
        <input className="submit-button" type="submit" />
      </form>
    </StyledFrom>
  );
}
