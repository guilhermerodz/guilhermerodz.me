import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { Color } from '~/styles/constants';

export const Container = styled.div`
  display: flex;

  padding-bottom: 0.5rem;

  overflow-x: auto;

  ::-webkit-scrollbar-track {
    border-radius: 0.8rem;
    background-color: rgba(0, 0, 0, 0.15);
  }
  ::-webkit-scrollbar {
    height: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 0.8rem;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const TagStyle = css`
  position: relative;

  text-decoration: none;
  text-transform: lowercase;

  font-family: 'Fira Code', sans-serif;
  letter-spacing: 0.1rem;
  font-weight: bold;
  font-size: 1.3rem;
  padding: ${props => (props.simple ? '0.5rem 0' : '0.5rem 0.8rem')};

  white-space: nowrap;

  color: ${props => (props.simple ? Color.green : Color.purple)};
  background: ${props =>
    props.simple ? 'rgba(0, 0, 0, 0.15)' : Color.background};
  border-radius: 0.7rem;

  transition: color 0.1s ease-in, background 0.5s ease-out;

  &:not(:first-child) {
    margin-left: 1.5rem;
  }

  &:hover {
    color: ${Color.pink};
    background: ${Color.darker};
  }

  ${props =>
    props.simple &&
    css`
      &:not(:last-child)::after {
        position: absolute;
        content: ',';
        color: ${Color.pink};
        font-size: 1.5rem;
      }
    `}
`;

export const LinkedTag = styled(Link)`
  ${TagStyle}
`;

export const Tag = styled.span`
  ${TagStyle}
`;
