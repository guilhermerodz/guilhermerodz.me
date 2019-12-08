import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '~/components/Layout';
import SEO from '~/components/SEO';
import Grid from '~/components/Grid';
import Content from '~/components/Content';
import Emoji from '~/components/Emoji';
import PostList from '~/components/PostList';
import GoBack from '~/components/GoBack';

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
            Descanse em paz.{' '}
            <Emoji className="small" role="img" aria-label="Emoji feliz">
              ⚰️
            </Emoji>
          </p>
        </Content>

        <GoBack color="rgba(255, 255, 255, 0.7)" />

        <PostList isHome total={total} edges={edges} />
      </Grid>
    </Layout>
  );
}
