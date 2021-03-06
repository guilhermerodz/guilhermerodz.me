import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import PropTypes from 'prop-types';

import Timing from '~/components/Timing';
import Tags from '~/components/Tags';

import Highlight from './Highlight';

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
  thumbnail,
  tags,
  readTime,
  // Algolia Search
  searchHit,
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

        {!searchHit ? (
          <>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </>
        ) : (
          <>
            <Title>
              <Highlight attribute="frontmatter.title" hit={searchHit} />
            </Title>
            <Description>
              <Highlight attribute="frontmatter.description" hit={searchHit} />
            </Description>
          </>
        )}
      </Content>

      {thumbnail && (
        <Thumbnail>
          <ThumbnailOverlay>
            <div>
              <PlayIcon />
            </div>
          </ThumbnailOverlay>

          <ThumbnailImage fluid={thumbnail} alt={title} aria-label={title} />
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
  thumbnail: undefined,
  searchHit: undefined,
  tags: [],
  pageTrackClick: () => {},
};

PostCard.propTypes = {
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.object,
  tags: PropTypes.arrayOf(PropTypes.string),
  pageTrackClick: PropTypes.func,
  searchHit: PropTypes.object,
};
