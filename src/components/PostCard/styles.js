import styled from 'styled-components';
import { Book } from 'styled-icons/boxicons-solid';
import { PlayCircle } from 'styled-icons/boxicons-regular';

import { Sizes, Color } from '~/styles/constants';
import { Heading, Subtitle } from '~/styles/typography';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: #343746;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;

  & + div {
    margin-top: ${Sizes.default};
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

  line-clamp: 1;

  &:not(:last-child) {
    margin-bottom: ${Sizes.default};
  }
`;

export const Thumbnail = styled.a.attrs(props => ({
  href: props.url,
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  position: relative;

  display: flex;
  overflow: hidden;

  margin-top: ${Sizes.default};

  > img {
    margin-bottom: -9.5%;
    margin-top: -9.8%;
    width: 100%;
  }
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

export const PlayIcon = styled(PlayCircle)`
  height: 5rem;
  width: 5rem;

  margin-right: 1rem;

  color: #fff;
`;

export const Tags = styled.ul`
  display: flex;
  align-items: center;

  padding: ${Sizes.sm} ${Sizes.md};
`;

export const Tag = styled.li`
  font-size: 1.8rem;
  padding: 0.3rem 0.8rem;

  color: ${Color.pink};
  background: ${Color.background};
  border-radius: 0.7rem;

  & + li {
    margin-left: 1rem;
  }
`;
