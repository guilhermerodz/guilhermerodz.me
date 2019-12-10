import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '~/components/Layout';
import SEO from '~/components/SEO';
import Grid from '~/components/Grid';
import Presentation from '~/components/Presentation';
import PostList from '~/components/PostList';

const pageTrackClick = () =>
  trackCustomEvent({
    category: 'Post Click',
    action: 'click',
    label: `From Home`,
  });

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
            thumbnailURL
          }
          timeToRead
        }
      }
    }
    totalMarkdownRemark: allMarkdownRemark {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export default function HomePage() {
  const {
    allMarkdownRemark: { edges },
    totalMarkdownRemark: {
      edges: { length: total },
    },
  } = useStaticQuery(query);

  return (
    <Layout>
      <SEO title="Home" />

      <Grid>
        <Presentation />

        <PostList
          isHome
          total={total}
          edges={edges}
          pageTrackClick={pageTrackClick}
        />
      </Grid>
    </Layout>
  );
}
