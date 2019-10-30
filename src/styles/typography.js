import { css } from 'styled-components';
import media from 'styled-media-query';

// ==================================================
// Typography
// ==================================================

export const Title = css`
  font-size: 3.4rem;
  line-height: 1.1em;
  color: ${({ theme }) => theme.primary};
  ${media.greaterThan('medium')} {
    font-size: 4.2rem;
  }
`;

export const Subtitle = {
  primary: css`
    font-size: 2.1rem;
    letter-spacing: -0.45px;
    line-height: 1.5em;
    color: ${({ theme }) => theme.secondary};
    ${media.greaterThan('medium')} {
      font-size: 2.4rem;
    }
  `,
  secondary: css`
    font-size: 2rem;
    letter-spacing: -0.04px;
    line-height: 1.3em;
    color: ${({ theme }) => theme.secondary};
  `,
  tertiary: css`
    font-size: 2.1rem;
    letter-spacing: -0.45px;
    line-height: 1.5em;
    color: ${({ theme }) => theme.secondary};
    ${media.greaterThan('medium')} {
      font-size: 2.4rem;
    }
  `,
};

export const Heading = {
  primary: css`
    font-size: 2.6rem;
    font-weight: 600;
    letter-spacing: -0.022em;
    line-height: 1.3em;
    color: ${({ theme }) => theme.primary};
    ${media.greaterThan('medium')} {
      font-size: 3rem;
    }
  `,
  secondary: css`
    font-size: 2.1rem;
    font-weight: 600;
    letter-spacing: -0.04px;
    line-height: 1.5em;
    color: ${({ theme }) => theme.primary};
    ${media.greaterThan('medium')} {
      font-size: 2.4rem;
    }
  `,
  tertiary: css`
    font-size: 2.1rem;
    font-weight: 400;
    letter-spacing: -0.04px;
    line-height: 1.5em;
    color: ${({ theme }) => theme.primary};
    ${media.greaterThan('medium')} {
      font-size: 2.4rem;
    }
  `,
  quaternary: css`
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -0.04px;
    line-height: 1.5em;
    color: ${({ theme }) => theme.primary};
    ${media.greaterThan('medium')} {
      font-size: 2.4rem;
    }
  `,
};

export const Text = {
  primary: css`
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.04px;
    line-height: 1.5em;
  `,
  secondary: css`
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: -0.14px;
    line-height: 1.55em;
  `,
};
