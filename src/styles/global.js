import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ol, ul {
	  list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
`;
export default GlobalStyles;
