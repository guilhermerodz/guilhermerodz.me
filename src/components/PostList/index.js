import React from 'react';
import PropTypes from 'prop-types';

import PostCard from '~/components/PostCard';

import { Container } from './styles';

export default function PostList({ edges }) {
  return (
    <Container>
      {edges.map(({ node }) => (
        <PostCard
          key={node.id}
          slug={node.fields.slug}
          date={node.frontmatter.date}
          title={node.frontmatter.title}
          description={node.frontmatter.description}
          video={{
            url: node.fields.videoURL,
            thumbnail: node.thumbnailImage.childImageSharp.fluid,
          }}
          tags={node.frontmatter.tags}
          readTime={node.timeToRead}
        />
      ))}
    </Container>
  );
}

PostList.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.object).isRequired,
};
