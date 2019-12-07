const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postPage = path.resolve('./src/templates/PostPage/index.js');
  const postListPage = path.resolve('./src/templates/PostListPage/index.js');

  const {
    data: {
      allMarkdownRemark: { edges: posts },
    },
  } = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          post: node {
            fields {
              slug
              videoURL
            }
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD [de] MMM [de] YYYY")
              description
              tags
              video
              thumbnailURL
            }
            timeToRead
          }
          previousPost: next {
            fields {
              slug
            }
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD [de] MMM [de] YYYY")
            }
          }
          nextPost: previous {
            fields {
              slug
            }
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD [de] MMM [de] YYYY")
            }
          }
        }
      }
    }
  `);

  posts.forEach(({ post, previousPost, nextPost }) =>
    createPage({
      path: post.fields.slug,
      component: postPage,
      context: {
        slug: post.fields.slug,
        previous: previousPost,
        next: nextPost,
      },
    })
  );

  // Create blog-list pages
  const postsPerPage = 1;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts` : `/posts/page/${i + 1}`,
      component: postListPage,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

exports.onCreateNode = function onCreateNode({ actions, node, getNode }) {
  fmImagesToRelative(node);

  if (node.internal.type === 'MarkdownRemark') {
    const { createNodeField } = actions;

    const { video } = node.frontmatter;

    if (video) {
      createNodeField({
        name: 'videoURL',
        value: `https://www.youtube.com/watch?v=${video}`,
        node,
      });
    }

    let fileName = createFilePath({ node, getNode, basePath: 'posts' });
    fileName = fileName.substring(1, fileName.length - 1);

    createNodeField({
      node,
      name: 'fileName',
      value: fileName,
    });
    createNodeField({
      node,
      name: 'slug',
      value: `posts/${fileName.slice(11)}/`,
    });
  }
};
