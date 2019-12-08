require('dotenv/config');

const path = require('path');

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-styled-components',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-offline',
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'uploads',
      path: path.join(__dirname, 'static', 'uploads'),
    },
  },
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
              include: ['Twitter', 'Codepen'],
              exclude: ['Flickr', 'Instagram', 'Reddit', 'YouTube'],
            },
          },
        },
        {
          resolve: 'gatsby-remark-embed-video',
          options: {
            width: 600,
            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
            // height: 400, // Optional: Overrides optional.ratio
            related: false, // Optional: Will remove related videos from the end of an embedded YouTube video.
            noIframeBorder: true, // Optional: Disable insertion of <style> border: 0
          },
        },
        'gatsby-remark-responsive-iframe',
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
  {
    resolve: 'gatsby-plugin-feed',
    options: {
      query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map(({ post }) => {
              return {
                ...post.frontmatter,
                description: post.frontmatter.description,
                date: post.frontmatter.date,
                url: `${site.siteMetadata.siteUrl}/${post.fields.slug}`,
                guid: `${site.siteMetadata.siteUrl}/${post.fields.slug}`,
                custom_elements: [{ 'content:encoded': post.html }],
              };
            });
          },
          query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    post: node {
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        date
                        title
                        description
                      }
                      excerpt(truncate: true, pruneLength: 500, format: HTML)
                    }
                  }
                }
              }
            `,
          output: '/feed.xml',
          title: 'Guilherme Rodz - RSS Feed',
        },
      ],
    },
  },
  'gatsby-plugin-netlify',
  {
    resolve: 'gatsby-plugin-netlify-cache',
    options: {
      cachePublic: true,
    },
  },
];

if (process.env.CONTEXT === 'production') {
  plugins.unshift(
    ...[
      {
        resolve: 'gatsby-plugin-google-analytics',
        options: {
          trackingId: process.env.GOOGLE_ANALYTICS_ID,
          head: false,
        },
      },
    ]
  );
}

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
      youtubeChannel: 'UCbJAKfdCHqjrM63VgTNGYOA',
      youtubeUrl: 'https://www.youtube.com/channel/UCbJAKfdCHqjrM63VgTNGYOA',
      twitchUrl: 'https://www.twitch.tv/rod_oficial',
    },
  },
  plugins,
};
