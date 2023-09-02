import { createGlobalStyle } from 'styled-components';
// import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  h1,
  h2,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  body {
    background-color: grey;
  }
`;
