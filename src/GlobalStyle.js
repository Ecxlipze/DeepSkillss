import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  @font-face {
    font-family: 'Asimovian';
    src: url('./assets/fonts/Asimovian/Asimovian-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: #000000;
    color: #ffffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }

  ul {
    list-style: none;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #0a0a0a;
  }

  ::-webkit-scrollbar-thumb {
    background: #7B1F2E;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #9b283b;
  }
`;

export default GlobalStyle;
