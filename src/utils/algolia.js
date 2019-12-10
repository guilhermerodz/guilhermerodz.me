const postQuery = `{
  posts: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/content/posts/" } }
  ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
          title
          description
          tags
        }
        timeToRead
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

const settings = { attributesToSnippet: ['excerpt: 20'] };

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => data.posts.edges.map(edge => edge.node),
    indexName: process.env.ALGOLIA_INDEX_NAME,
    settings,
  },
];

module.exports = queries;
