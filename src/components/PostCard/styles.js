import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { Book } from 'styled-icons/boxicons-solid';
import { Youtube } from 'styled-icons/boxicons-logos';

import { Sizes, Color, Animation } from '~/styles/constants';
import { Heading, Subtitle } from '~/styles/typography';

export const Container = styled(Link)`
  text-decoration: none;

  display: flex;
  flex-direction: column;

  background: ${Color.support};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);

  transition: ${Animation.delay};

  & + a {
    margin-top: ${Sizes.default};
  }

  &:hover {
    border: 1px solid ${Color.pink};
  }
`;

export const Content = styled.div`
  padding: ${Sizes.default} ${Sizes.md} 0 ${Sizes.md};
`;

export const BookIcon = styled(Book)`
  height: 2rem;
  width: 2rem;
`;

export const Title = styled.h1`
  ${Heading.primary}

  margin-top: 1rem;
`;

export const Description = styled.h2`
  ${Subtitle.secondary}

  margin-top: 1.3rem;

  &:not(:last-child) {
    margin-bottom: ${Sizes.default};
  }
`;

export const Thumbnail = styled.div`
  position: relative;

  display: flex;
  overflow: hidden;

  margin-top: ${Sizes.default};
`;

export const ThumbnailOverlay = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.8);

  transition: 0.15s;

  z-index: 1;

  > span {
    color: #fff;
  }

  &,
  > * {
    opacity: 0;
  }

  &:hover {
    &,
    > * {
      opacity: 1;
    }
  }
`;

export const ThumbnailImage = styled(Image)`
  width: 100%;
`;

export const PlayIcon = styled(Youtube)`
  height: 5rem;
  width: 5rem;

  margin-right: 1rem;

  color: #fff;
`;

export const TagsWrapper = styled.div`
  padding: ${Sizes.sm} ${Sizes.md} calc(${Sizes.default} - 0.5rem);
`;

export const Tags = styled.div`
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

export const Tag = styled.span`
  text-transform: lowercase;

  font-family: 'Fira Code', sans-serif;
  letter-spacing: 0.1rem;
  font-weight: bold;
  font-size: 1.3rem;
  padding: 0.5rem 0.8rem;

  white-space: nowrap;

  color: ${Color.purple};
  background: ${Color.background};
  border-radius: 0.7rem;

  & + span {
    margin-left: 1rem;
  }
`;
