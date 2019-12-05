const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Guilherme Rodz | Software Engineer',
    author: 'Guilherme Rodz',
    description: 'Blog ou site pessoal de um desenvolvedor que ama ensinar.',
    siteUrl: 'https://guilhermerodz.me/',
    social: {
      twitterUsername: 'guilherme_rodz',
      twitterUrl: 'https://twitter.com/guilherme_rodz',
      githubUrl: 'https://github.com/guilhermerodz',
      linkedinUrl: 'https://www.linkedin.com/in/guilhermerodz/',
      twitchUrl: 'https://www.twitch.tv/rod_oficial',
      youtubeUrl: 'https://www.youtube.com/guilhermerodz',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: path.join(__dirname, 'src', 'assets'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: path.join(__dirname, 'content', 'posts'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 650,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static/assets/',
            },
          },
          {
            resolve: '@raae/gatsby-remark-oembed',
            options: {
              usePrefix: false,
              providers: {
                include: ['YouTube', 'Twitter', 'CodePen'],
                exclude: ['Flickr', 'Instagram', 'Reddit'],
              },
              settings: {
                Twitter: { theme: 'dark' },
              },
            },
          },
          'gatsby-plugin-catch-links',
          'gatsby-remark-lazy-load',
          'gatsby-remark-prismjs',
          'gatsby-remark-external-links',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-remote-images',
      options: {
        nodeType: 'MarkdownRemark',
        imagePath: 'frontmatter.thumbnailURL',
        name: 'thumbnailImage',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Guilherme Rodz',
        short_name: 'guilhermerodz.me',
        start_url: '/',
        background_color: '#282a36',
        theme_color: '#171921',
        display: 'minimal-ui',
        icon: 'src/assets/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src'),
      },
    },
  ],
};
