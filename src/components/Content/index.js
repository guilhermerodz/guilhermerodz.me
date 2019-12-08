import styled from 'styled-components';
import media from 'styled-media-query';

import { Text, Heading, Link } from '~/styles/typography';
import { Sizes, Color } from '~/styles/constants';

export default styled.article`
  ${Text.primary}

  color: rgba(255, 255, 255, 0.9);

  i {
    font-style: italic;
  }

  b {
    font-weight: bold;
  }

  &:not(:first-child) {
    margin-top: ${Sizes.md};
  }
  &:not(:last-child) {
    margin-bottom: ${Sizes.md};
  }

  h1 {
    ${Heading.primary}
    &:not(:first-child) {
      margin-top: ${Sizes.lg};
    }
    &:not(:last-child) {
      margin-bottom: ${Sizes.default};
    }
  }

  h2 {
    ${Heading.primary}
    &:not(:first-child) {
      margin-top: ${Sizes.lg};
    }
    &:not(:last-child) {
      margin-bottom: ${Sizes.default};
    }
  }

  h3 {
    ${Heading.secondary}
    &:not(:first-child) {
      margin-top: ${Sizes.md};
    }
    &:not(:last-child) {
      margin-bottom: ${Sizes.sm};
    }
  }

  p {
    &:not(:last-child) {
      margin-bottom: ${Sizes.default};
    }
  }

  a:not(.reset__styles) {
    ${Link.primary}

    &::after {
      margin-top: -.2rem;
    }
  }

  blockquote {
    ${Heading.tertiary}

    border-left: ${Sizes.xxs} solid ${Color.highlight};
    font-style: italic;
    overflow-wrap: break-word;
    padding-bottom:  ${Sizes.sm};
    padding-left: ${Sizes.default};
    padding-top:  ${Sizes.sm};

    &:not(:first-child) {
      margin-top: ${Sizes.lg};
    }
    &:not(:last-child) {
      margin-bottom: ${Sizes.lg};
    }
  }

  ol {
    list-style-type: decimal;
  }

  ul {
    list-style-type: disc;
  }

  ol, ul {
    padding-left: 2.5rem;
    &:not(:last-child) {
      margin-bottom: ${Sizes.default};
    }
  }

  li {
    &:not(:last-child) {
      margin-bottom: ${Sizes.sm};
    }
  }

  img,
  .gatsby-resp-image-wrapper {
    width: 100%;
    & + em {
      font-size: 1.4rem;
    }
  }

  .gatsby-highlight {
    pre[class*="language-"] {
      border-left: ${Sizes.xxs} solid ${Color.highlight};
      font-size: 1.8rem;
      padding-left: ${Sizes.default};
      ${media.lessThan('medium')`
        border-radius: 0;
        font-size: 1.6rem;
        margin-left: -${Sizes.sm};
        margin-right: -${Sizes.sm};
      `}
    }
    &:not(:last-child) {
      margin-bottom: ${Sizes.default};
    }
  }

  .language-text {
    background-color: ${Color.support};
    color: ${Color.yellow};
    font-size: 1.8rem;
    padding: .3em .3em .2em;
    text-shadow: none;
  }

  hr {
    background-color: ${Color.border};
    border: 0;
    height: 1px;
    margin-bottom: ${Sizes.default};
    margin-top: ${Sizes.default};
  }

  .twitter-tweet {
    ${Text.secondary}

    p {
      ${Heading.tertiary}
      border-bottom: 1px solid ${Color.border};
      font-style: normal;
      margin-bottom: ${Sizes.sm};
      padding-bottom: ${Sizes.sm};
    }
    a {
      ${Text.secondary}
      &:before {
        content: '';
        display: block;
      }
    }
  }

  @keyframes expandVideo {
    from {
      opacity: 0%;
      transform: scale(0);
    }
    to {
      opacity: 100%;
      transform: scale(1);
    }
  }

  .embedVideo-iframe {
    animation: expandVideo .7s ease-in;

    margin: 0 auto;

    border: 1px solid #7e4967 !important;
    border-radius: .5rem;

    transition: border .15s ease;

    &:hover {
      border: 1px solid ${Color.pink} !important;
    }
  }
`;
