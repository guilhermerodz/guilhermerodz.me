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
  PlayIcon,
  TagsWrapper,
  Tags,
  Tag,
} from './styles';

export default function PostCard({
  date = '21 Jun, 2001',
  readTime = 16,
  title = 'Autenticação com JWT e Bcrypt',
  description = 'Inclui cadastro & login de usuário e middleware de autenticação.',
  video = {
    url: 'https://www.youtube.com/watch?v=3MATqg6y-WE',
    thumbnail: 'https://img.youtube.com/vi/3MATqg6y-WE/0.jpg',
  },
  tags = ['authentication', 'json web token', 'express', 'node'],
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

          <img alt={title} src={video.thumbnail} />
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
  // tags: [],
};

PostCard.propTypes = {
  date: PropTypes.string.isRequired,
  readTime: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  video: PropTypes.shape({
    url: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
