import media from 'styled-media-query';

import { Color } from './constants';

// ==================================================
// Typography
// ==================================================

export const Title = `
  font-size: 3.4rem;
  line-height: 1.1em;
  color: ${Color.primary};
  ${media.greaterThan('medium')} {
    font-size: 4.2rem;
  }
`;

export const Subtitle = {
  primary: `
    font-size: 2.1rem;
    letter-spacing: -0.45px;
    line-height: 1.5em;
    color: ${Color.secondary};
    ${media.greaterThan('medium')} {
      font-size: 2.4rem;
    }
  `,
  secondary: `
    font-size: 2rem;
    letter-spacing: -0.04px;
    line-height: 1.3em;
    color: ${Color.secondary};
  `,
  tertiary: `
    font-size: 2.1rem;
    letter-spacing: -0.45px;
    line-height: 1.5em;
    color: ${Color.secondary};
    ${media.greaterThan('medium')} {
      font-size: 2.4rem;
    }
  `,
};

export const Heading = {
  primary: `
    font-size: 2.6rem;
    font-weight: 600;
    letter-spacing: -0.022em;
    line-height: 1.3em;
    color: ${Color.primary};
    ${media.greaterThan('medium')} {
      font-size: 3rem;
    }
  `,
  secondary: `
    font-size: 2.1rem;
    font-weight: 600;
    letter-spacing: -0.04px;
    line-height: 1.5em;
    color: ${Color.primary};
    ${media.greaterThan('medium')} {
      font-size: 2.4rem;
    }
  `,
  tertiary: `
    font-size: 2.1rem;
    font-weight: 400;
    letter-spacing: -0.04px;
    line-height: 1.5em;
    color: ${Color.primary};
    ${media.greaterThan('medium')} {
      font-size: 2.4rem;
    }
  `,
  quaternary: `
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -0.04px;
    line-height: 1.5em;
    color: ${Color.primary};
    ${media.greaterThan('medium')} {
      font-size: 2.4rem;
    }
  `,
};

export const Text = {
  primary: `
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.04px;
    line-height: 1.5em;
  `,
  secondary: `
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: -0.14px;
    line-height: 1.55em;
  `,
};
