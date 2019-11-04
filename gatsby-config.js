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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Guilherme Rodz',
        short_name: 'guilhermerodz.me',
        start_url: '/',
        background_color: '#282A36',
        theme_color: '#171921',
        display: 'minimal-ui',
        icon: 'src/assets/icon.jpg',
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
