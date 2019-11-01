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
