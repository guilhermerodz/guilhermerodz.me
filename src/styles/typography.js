import { css } from 'styled-components';
import media from 'styled-media-query';

import { Color } from './constants';

// ==================================================
// Typography
// ==================================================

export const Title = css`
  color: ${Color.primary};
  font-size: 3.4rem;
  line-height: 1.1em;
  font-weight: 600;

  ${media.greaterThan('medium')`
    font-size: 4.2rem;
  `}
`;

export const Subtitle = {
  primary: css`
    color: ${Color.secondary};
    font-size: 2.1rem;
    letter-spacing: -0.45px;
    line-height: 1.5em;

    ${media.greaterThan('medium')`
      font-size: 2.4rem;
    `}
  `,
  secondary: css`
    color: ${Color.secondary};
    font-size: 2rem;
    letter-spacing: -0.04px;
    line-height: 1.3em;
  `,
  tertiary: css`
    color: ${Color.secondary};
    font-size: 2.1rem;
    letter-spacing: -0.45px;
    line-height: 1.5em;

    ${media.greaterThan('medium')`
      font-size: 2.4rem;
    `}
  `,
};

export const Heading = {
  primary: css`
    color: ${Color.primary};
    font-size: 2.6rem;
    font-weight: 600;
    letter-spacing: -0.022em;
    line-height: 1.3em;

    ${media.greaterThan('medium')`
      font-size: 3rem;
    `}
  `,
  secondary: css`
    color: ${Color.primary};
    font-size: 2.1rem;
    font-weight: 600;
    letter-spacing: -0.04px;
    line-height: 1.5em;

    ${media.greaterThan('medium')`
      font-size: 2.4rem;
    `}
  `,
  tertiary: css`
    color: ${Color.primary};
    font-size: 2.1rem;
    font-weight: 400;
    letter-spacing: -0.04px;
    line-height: 1.5em;

    ${media.greaterThan('medium')`
      font-size: 2.4rem;
    `}
  `,
  quaternary: css`
    color: ${Color.primary};
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -0.04px;
    line-height: 1.5em;

    ${media.greaterThan('medium')`
      font-size: 2.4rem;
    `}
  `,
};

export const Text = {
  primary: css`
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 0.4px;
    line-height: 1.5em;
  `,
  secondary: css`
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: -0.14px;
    line-height: 1.55em;
  `,
};

const LinkSnippets = {
  onlyLink: color => css`
    color: ${color || Color.green};

    text-decoration: none;
  `,
  onlyUnderline: color => css`
    position: relative;

    &::after {
      content: '';
      position: absolute;
      display: block;

      margin-top: 0.1rem;
      height: 0.2rem;

      left: 0;
      width: 0;

      background: ${color || Color.green};

      transition: width 0.3s ease, left 0.3s ease;
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }
  `,
  onlyReverseUnderline: color => css`
    ${LinkSnippets.onlyUnderline(color)}

    &::after {
      left: auto;

      right: 0;
    }

    &:hover::after {
      left: auto;
      right: 0;
    }
  `,
};

export const Link = {
  primary: css`
    ${LinkSnippets.onlyLink(Color.green)}
    ${LinkSnippets.onlyUnderline(Color.green)}
  `,
  ...LinkSnippets,
};
