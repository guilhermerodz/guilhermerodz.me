import React from 'react';
import PropTypes from 'prop-types';

import Timing from '~/components/Timing';
import Tags from '~/components/Tags';

import { Container, Anchor, Content, Title } from './styles';

export default function PostMiniCard({ slug, date, title }) {
  const anchorId = slug.slice(6);

  return (
    <Container
      to={`/${slug}`}
      state={
        typeof window !== 'undefined' &&
        window &&
        window.location &&
        window.location.pathname
          ? {
              previousPath: window.location.pathname,
              elementId: anchorId,
            }
          : undefined
      }
    >
      <Anchor id={anchorId} />

      <Content>
        <Timing>{date}</Timing>

        <Title>{title}</Title>
      </Content>
    </Container>
  );
}

PostMiniCard.defaultProps = {
  readTime: undefined,
  tags: [],
};

PostMiniCard.propTypes = {
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  video: PropTypes.shape({
    url: PropTypes.string.isRequired,
    thumbnail: PropTypes.object.isRequired,
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
