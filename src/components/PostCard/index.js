import React from 'react';
import PropTypes from 'prop-types';

import Timing from '~/components/Timing';

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
  Tags,
  Tag,
} from './styles';

export default function PostCard({
  date,
  title,
  description,
  video,
  tags,
  readTime,
}) {
  return (
    <Container>
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
        <Thumbnail url={video.url}>
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
        <Tags>
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </TagsWrapper>
    </Container>
  );
}

PostCard.defaultProps = {
  readTime: undefined,
  tags: [],
};

PostCard.propTypes = {
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
