import React from 'react';
import PropTypes from 'prop-types';

import PostMiniCard from '~/components/PostMiniCard';

import { Container, Wrapper, Title } from './styles';

export default function PostNavigation({ previous, next }) {
  return (
    <Container>
      {next && (
        <Wrapper>
          <Title>Mais recente</Title>

          <PostMiniCard
            slug={next.fields.slug}
            date={next.frontmatter.date}
            title={next.frontmatter.title}
          />
        </Wrapper>
      )}
      {previous && (
        <Wrapper>
          <Title right>Mais antigo</Title>

          <PostMiniCard
            slug={previous.fields.slug}
            date={previous.frontmatter.date}
            title={previous.frontmatter.title}
          />
        </Wrapper>
      )}
    </Container>
  );
}

PostNavigation.defaultProps = {
  previous: undefined,
  next: undefined,
};

PostNavigation.propTypes = {
  previous: PropTypes.object,
  next: PropTypes.object,
};
