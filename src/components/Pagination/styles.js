import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';
import { ArrowBack, ArrowForward } from 'styled-icons/material';

import { Sizes, Color } from '~/styles/constants';
import { Link as LinkTypography } from '~/styles/typography';

const linkColor = Color.pink;

export const Container = styled.nav`
  &,
  a {
    color: ${linkColor};
    text-decoration: none;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid ${Color.border};
  margin-top: ${Sizes.lg};
  padding: ${Sizes.sm} 0;

  > span {
    display: flex;
    flex-wrap: nowrap;

    > span {
      margin: 0 0.5rem;

      color: ${Color.purple};
    }
  }

  ${media.lessThan('500px')` {
    padding: ${Sizes.xs} 0;
    font-size: 1.5rem;
  `}
`;

const generateIcon = icon => styled(icon)`
  &:first-child {
    margin-right: 0.4rem;
  }

  &:last-child {
    margin-left: 0.4rem;
  }

  height: 3rem;
  width: 3rem;
`;

export const ArrowBackIcon = generateIcon(ArrowBack);
export const ArrowForwardIcon = generateIcon(ArrowForward);

const WrapperStyle = css`
  display: flex;
  align-items: center;
`;

export const NavigateLink = styled(Link)`
  ${WrapperStyle}

  ${props =>
    props.reverse
      ? LinkTypography.onlyReverseUnderline(linkColor)
      : LinkTypography.onlyUnderline(linkColor)}

  opacity: .8;

  &:first-child {
    text-align: left;
  }

  &:last-child {
    text-align: right;
  }

  &:hover {
    opacity: 1;
  }

  &::after {
    margin-top: 1.8rem;
  }
`;

export const DisabledLink = styled.span`
  ${WrapperStyle}

  opacity: 0.3;
`;
