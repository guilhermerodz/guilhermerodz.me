import { createGlobalStyle } from 'styled-components';

import { Color } from './constants';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Fira+Code:400&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
  }
  ol, ul {
	  list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  ::selection {
    background: ${Color.highlight};
  }
`;
export default GlobalStyles;
