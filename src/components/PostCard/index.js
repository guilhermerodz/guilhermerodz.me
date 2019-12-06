import React from 'react';
import PropTypes from 'prop-types';

import Timing from '~/components/Timing';
import Tags from '~/components/Tags';

import {
  Container,
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

export default function PostCard({
  slug,
  date,
  title,
  description,
  video,
  tags,
  readTime,
}) {
  return (
    <Container
      to={`/${slug}`}
      state={{
        previousPath:
          typeof window !== 'undefined' ? window.location.href : undefined,
      }}
    >
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
            <PlayIcon />
            <span>assistir</span>
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
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
