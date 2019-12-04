import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import PostCard from '~/components/PostCard';

import { Container } from './styles';

const query = graphql`
  {
    allMarkdownRemark(
      limit: 5
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          thumbnailImage {
            childImageSharp {
              fluid(maxWidth: 600, quality: 65) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          frontmatter {
            title
            date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
            description
            tags
            video
            thumbnailURL
          }
          fields {
            videoURL
          }
          timeToRead
        }
      }
    }
  }
`;

export default function PostList() {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(query);

  return (
    <>
      <div style={{ paddingTop: '4rem' }} />
      <Container>
        {edges.map(({ node }) => (
          <PostCard
            key={node.id}
            date={node.frontmatter.date}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            video={{
              url: `https://youtube.com/watch?v=${node.frontmatter.video}`,
              thumbnail: node.thumbnailImage.childImageSharp.fluid,
            }}
            tags={node.frontmatter.tags}
            readTime={node.timeToRead}
          />
        ))}
      </Container>
      <div style={{ paddingTop: '4rem' }} />
    </>
  );
}
