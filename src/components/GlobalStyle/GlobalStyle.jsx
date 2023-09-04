import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  h2,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  h1 {
    text-align: center;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
