import styled, { css } from 'styled-components';
import { Algolia } from 'styled-icons/fa-brands/Algolia';

import { Sizes, Color, Animation } from '~/styles/constants';
import { Text } from '~/styles/typography';

const removeSearchAppearance = css`
  appearance: none;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    appearance: none;
  }
`;

export const Container = styled.section`
  display: block;

  .ais {

    &-InstantSearch__root {
      position: relative;
    }

    &-SearchBox {
      margin-bottom: ${Sizes.md};
      position: relative;

      &-input {
        ${removeSearchAppearance}

        display: block;
        width: 100%;

        height: ${Sizes.lg};
        padding: 0 ${Sizes.xxlg} 0 ${Sizes.sm};

        font-size: 1.8rem;
        line-height: ${Sizes.lg};

        color: ${Color.primary};
        background-color: transparent;
        border: 1px solid ${Color.border};
        border-radius: 2.5rem;

        transition: box-shadow ${Animation.delay};

        &:focus, &:hover {
          outline: none;

          &:hover {
            box-shadow: 0 0 3px rgba(255, 255, 255, 0.3);
          }

          &:focus {
            box-shadow: 0 0 3px #fff;
          }
        }

        &::placeholder {

        }
      }

      &-reset,
      &-submit {
        outline: none;

        position: absolute;
        right: 0;
        top: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;
        width: ${Sizes.lg};

        background: ${Color.background};
        border: 1px solid ${Color.border};
        border-left: 1px solid ${Color.border};

        color: ${Color.secondary};

        cursor: pointer;

        transition: color ${Animation.delay};

        & > svg {
          fill: currentColor;
        }
      }

      &-reset {
        margin-right: ${Sizes.lg};
        border-right: none;

        color: ${Color.highlight};

        &:hover, &:focus {
          color: ${Color.pink};
        }

        &[hidden] {
          display: none;
        }

      }

      &-submit {
        border-radius: 0 2.5rem 2.5rem 0;

        &:hover, &:focus {
          color: ${Color.pink};
        }
      }
      /* &-submit {
        &:hover,
        &:focus {
          color: ${Color.highlight};
        }
      }

      &-reset {
        border: none;
        margin-right: ${Sizes.lg};
        &[hidden] {
          display: none;
        }
        &:hover,
        &:focus {
          color: ${Color.highlight};
        }
      } */

      &-submitIcon {
        height: ${Sizes.sm};
        width: ${Sizes.sm};
      }
    }

    &-Stats {
      ${Text.secondary}

      margin-bottom: ${Sizes.xs};
      color: ${Color.secondary};
    }

    &-Hits {
      &-item {
        & + li {
          margin-top: ${Sizes.default};
        }
      }
    }
  }
`;

export const AlgoliaTitle = styled.h1`
  ${Text.secondary}

  padding: ${Sizes.sm} 0;
  align-items: center;
  color: ${Color.secondary};
  display: flex;
  justify-content: flex-end;
`;

export const AlgoliaIcon = styled(Algolia)`
  height: ${Sizes.sm};
  width: ${Sizes.sm};
  margin-left: ${Sizes.xxs};
`;
