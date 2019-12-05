import { createGlobalStyle } from 'styled-components';

import { Color } from './constants';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Fira+Code:400&display=swap');

  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
  }
  body {
    font-size: 2rem;
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

  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${Color.background};
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${Color.support};
    border-radius: 1.5rem;

  }
`;
export default GlobalStyles;
