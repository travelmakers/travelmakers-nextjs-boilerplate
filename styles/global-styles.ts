'use client';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body{
    font-family: var(--font-pretendard),-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,var(--font-noto-serif);
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
    font-family:var(--font-pretendard), var(--font-noto-serif);
  }
  p, h1, h2, h3, h4, h5, h6{
    font-family:var(--font-pretendard), var(--font-noto-serif);
  }
  span{
    font-family:var(--font-pretendard), var(--font-noto-serif);
    font-weight: 400;
    font-style: normal;
  }
  ol, ul, li {
    list-style: inside;
  }
  img {
    display: initial;
  }
`;

export default GlobalStyle;
