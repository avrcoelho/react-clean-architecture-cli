import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }

  :root {
    --white: #fff;

    font-size: 62.5%;
  }

  body {
    background: var(--white);
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1.6rem "Inter",Helvetica,Arial,sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 600;
    line-height: 1.1;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

`;
