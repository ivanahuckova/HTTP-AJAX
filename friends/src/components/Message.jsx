import React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.div`
  width: 100vw;
  padding-bottom: 30px;
  text-align: center;
  font-size: 1.3rem;
  color: white;
`;

export default function Message(props) {
  if (props.error) {
    return (
      <StyledMessage>
        <span role="img" aria-label="hand">
          😢
        </span>{' '}
        Something went wrong. Try to refresh the page.
      </StyledMessage>
    );
  }

  if (props.loading) {
    return (
      <StyledMessage>
        <span role="img" aria-label="hand">
          👋
        </span>{' '}
        Loading your friends
      </StyledMessage>
    );
  }

  return null;
}
