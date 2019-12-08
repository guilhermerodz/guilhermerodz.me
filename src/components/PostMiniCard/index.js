import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import PropTypes from 'prop-types';

import Timing from '~/components/Timing';

import { Container, Anchor, Content, Title } from './styles';

const trackClick = item =>
  trackCustomEvent({
    category: 'Post Navigation',
    action: 'click',
    label: `Post Navigation - Go to ${item}`,
  });

export default function PostMiniCard({
  slug,
  date,
  title,
  // Analytics
  pageTrackClick,
}) {
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
      onClick={() => {
        pageTrackClick();
        trackClick(title);
      }}
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
  pageTrackClick: PropTypes.func.isRequired,
};
