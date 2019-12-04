const path = require('path');

exports.createPages = ({ _, actions }) => {
  const { createPage } = actions;
  const postPage = path.resolve('./src/templates/PostPage.js');

  [
    {
      slug: 'i-am-guilherme-rodz',
      title: 'I am Guilherme Rodz',
      content: 'I love coding',
    },
    {
      slug: 'check-out-my-blog',
      title: 'Check out my Blog',
      content: 'The URL is https://guilhermerodz.me',
    },
  ].forEach(post => {
    createPage({
      path: post.slug,
      component: postPage,
      context: {
        title: post.title,
        content: post.content,
      },
    });
  });
};

exports.onCreateNode = function onCreateNode({ actions, node }) {
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
  }
};
