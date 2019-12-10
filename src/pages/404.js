import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '~/components/Layout';
import SEO from '~/components/SEO';
import Grid from '~/components/Grid';
import Content from '~/components/Content';
import Emoji from '~/components/Emoji';
import PostList from '~/components/PostList';
import GoBack from '~/components/GoBack';

const trackGoHome = () =>
  trackCustomEvent({
    category: '404',
    action: 'click',
    label: `404 - Go back to Home`,
  });

const pageTrackClick = () =>
  trackCustomEvent({
    category: 'Post Click',
    action: 'click',
    label: `From 404`,
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
      <SEO title="Página não encontrada" />

      <Grid>
        <Content>
          <h1>Talvez eu tenha deletado esse post...</h1>

          <p>
            Descanse em paz. <Emoji label="Emoji feliz">⚰️</Emoji>
          </p>
        </Content>

        <GoBack color="rgba(255, 255, 255, 0.7)" onClick={trackGoHome} />

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
