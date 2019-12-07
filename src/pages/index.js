import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '~/components/Layout';
import SEO from '~/components/SEO';
import Grid from '~/components/Grid';
import Presentation from '~/components/Presentation';
import PostList from '~/components/PostList';

const query = graphql`
  {
    allMarkdownRemark(
      limit: 2
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
            videoURL
          }
          thumbnailImage {
            childImageSharp {
              fluid(base64Width: 100, maxWidth: 600, quality: 65) {
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
          timeToRead
        }
      }
    }
  }
`;

export default function HomePage() {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(query);

  return (
    <Layout>
      <SEO title="Home" />

      <Grid>
        <Presentation />

        <PostList isHome edges={edges} />
      </Grid>
    </Layout>
  );
}
