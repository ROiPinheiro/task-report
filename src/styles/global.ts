import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #fa8072;
  }

  html, body, #root {
    min-height: 100%;
  }

  body, input, button {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
  }
`;
