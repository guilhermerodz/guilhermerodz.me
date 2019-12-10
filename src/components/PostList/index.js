import React from 'react';
import PropTypes from 'prop-types';

import PostCard from '~/components/PostCard';

import { Container, Row, Left, Link } from './styles';

export default function PostList({
  edges,
  total,
  isHome,
  // Analytics
  pageTrackClick,
}) {
  return (
    <>
      {isHome && (
        <Row>
          <Left>Últimos posts</Left>
          <Link to="/posts/">Ver todos os posts {total && `(${total})`}</Link>
        </Row>
      )}

      <Container>
        {edges.map(({ node }) => (
          <PostCard
            key={node.id}
            slug={node.fields.slug}
            date={node.frontmatter.date}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            thumbnail={
              (node.thumbnailImage &&
                node.thumbnailImage.childImageSharp &&
                node.thumbnailImage.childImageSharp.fluid) ||
              null
            }
            tags={node.frontmatter.tags}
            readTime={node.timeToRead}
            pageTrackClick={pageTrackClick}
          />
        ))}
      </Container>

      {isHome && (
        <Row>
          <div />
          <Link to="/posts/">Ver todos os posts {total && `(${total})`}</Link>
        </Row>
      )}
    </>
  );
}

PostList.defaultProps = {
  isHome: false,
  total: undefined,
  pageTrackClick: () => {},
};

PostList.propTypes = {
  isHome: PropTypes.bool,
  total: PropTypes.number,
  edges: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageTrackClick: PropTypes.func,
};
