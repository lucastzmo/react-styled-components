import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial;
  }
`;

const Wrapper = styled.section`
  font-family: Arial;
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "darkseagreen" : "white"};
  color: ${props => props.primary ? "white" : "darkseagreen"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkseagreen;
  border-radius: 3px;
`;

const Title = styled.h1`
  font-size: 3.5em;
  color: darkseagreen;
`;

function App() {
  return (
    <React.Fragment>
      <Wrapper>
        <Title>Título da página</Title>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </Wrapper>
      <GlobalStyle/>
    </React.Fragment>
  );
}

export default App;
