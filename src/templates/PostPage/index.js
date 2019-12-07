import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '~/components/Layout';
import SEO from '~/components/SEO';
import Grid from '~/components/Grid';
import Content from '~/components/Content';

import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import PostNavigation from './PostNavigation';

export default function PostPage({ pageContext, data }) {
  const { markdownRemark: post } = data;
  const { next, previous } = pageContext;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image_url={
          post.frontmatter.thumbnailURL ||
          'https://guilhermerodz.me/assets/open-graph-image.jpg'
        }
      />

      <Grid>
        <div itemScope itemType="http://schema.org/Article">
          <PostHeader
            date={post.frontmatter.date}
            rawDate={post.frontmatter.rawDate}
            readTime={post.timeToRead}
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            tags={post.frontmatter.tags}
          />

          <Content>
            <div
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </Content>

          <PostFooter fileName={post.fields.fileName} slug={post.fields.slug} />

          <PostNavigation previous={previous} next={next} />
        </div>
      </Grid>
    </Layout>
  );
}

PostPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query getPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
        fileName
      }
      frontmatter {
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        rawDate: date(locale: "pt-br", formatString: "YYYY-MM-DD")
        description
        title
        tags
        thumbnailURL
      }
      timeToRead
    }
  }
`;
