import React from 'react';
import PropTypes from 'prop-types';

import Timing from '~/components/Timing';

import { Container, Anchor, Content, Title } from './styles';

export default function PostMiniCard({ slug, date, title }) {
  const anchorId = slug.slice(6);

  return (
    <Container
      to={`/${slug}`}
      state={
        typeof window !== 'undefined' &&
        window &&
        window.history &&
        window.history.state
          ? window.history.state
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

PostMiniCard.propTypes = {
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
