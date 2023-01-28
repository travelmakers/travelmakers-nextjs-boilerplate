'use client';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body{
    font-family: 'Pretendard',-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
    font-family:'Pretendard', sans-serif;
  }
  p, h1, h2, h3, h4, h5, h6{
    font-family:'Pretendard', sans-serif;
  }
  ol, ul, li {
    list-style: inside;
  }
  img {
    display: initial;
  }
`;

export default GlobalStyle;
