import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '~/components/Layout';
import SEO from '~/components/SEO';
import Grid from '~/components/Grid';
import PostList from '~/components/PostList';
import Pagination from '~/components/Pagination';

const getPageTrackClick = currentPage => () =>
  trackCustomEvent({
    category: 'Post Click',
    action: 'click',
    label: `From Post List - Page ${currentPage}`,
  });

export default function PostListPage({ data, pageContext }) {
  const {
    allMarkdownRemark: { edges },
  } = data;

  const { currentPage, numPages } = pageContext;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const previousPage =
    currentPage <= 2 ? '/posts/' : `/posts/page/${currentPage - 1}`;
  const nextPage = `/posts/page/${currentPage + 1}`;

  const pageTrackClick = getPageTrackClick(currentPage);

  return (
    <Layout>
      <SEO title="Blog" />

      <Grid>
        <Pagination
          top
          currentPage={currentPage}
          numPages={numPages}
          isFirst={isFirst}
          isLast={isLast}
          previousPage={previousPage}
          nextPage={nextPage}
        />

        <PostList edges={edges} pageTrackClick={pageTrackClick} />

        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          isFirst={isFirst}
          isLast={isLast}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </Grid>
    </Layout>
  );
}

PostListPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query listPosts($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            videoURL
            slug
          }
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
          timeToRead
        }
      }
    }
  }
`;
