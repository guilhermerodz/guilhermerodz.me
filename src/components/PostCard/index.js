import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import PropTypes from 'prop-types';

import Timing from '~/components/Timing';
import Tags from '~/components/Tags';

import {
  Container,
  Anchor,
  Content,
  BookIcon,
  Title,
  Description,
  Thumbnail,
  ThumbnailOverlay,
  ThumbnailImage,
  PlayIcon,
  TagsWrapper,
} from './styles';

const trackClick = item =>
  trackCustomEvent({
    category: 'Post List',
    action: 'click',
    label: `Post List - Go to ${item}`,
  });

export default function PostCard({
  slug,
  date,
  title,
  description,
  video,
  tags,
  readTime,
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
        window.location &&
        window.location.pathname
          ? {
              previousPath: window.location.pathname,
              elementId: anchorId,
            }
          : undefined
      }
      onClick={() => {
        pageTrackClick();
        trackClick(title);
      }}
    >
      <Anchor id={anchorId} />

      <Content>
        <Timing>
          {date}
          {readTime && (
            <span>
              {` · ${readTime} min `}
              <BookIcon />
            </span>
          )}
        </Timing>

        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Content>

      {video && (
        <Thumbnail>
          <ThumbnailOverlay>
            <div>
              <PlayIcon />
            </div>
          </ThumbnailOverlay>

          <ThumbnailImage
            fluid={video.thumbnail}
            alt={title}
            aria-label={title}
          />
        </Thumbnail>
      )}

      <TagsWrapper>
        <Tags tags={tags} />
      </TagsWrapper>
    </Container>
  );
}

PostCard.defaultProps = {
  readTime: undefined,
  tags: [],
  video: null,
};

PostCard.propTypes = {
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  video: PropTypes.shape({
    url: PropTypes.string.isRequired,
    thumbnail: PropTypes.object.isRequired,
  }),
  tags: PropTypes.arrayOf(PropTypes.string),
  pageTrackClick: PropTypes.func.isRequired,
};
