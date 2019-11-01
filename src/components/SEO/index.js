import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

export default function SEO({ description, lang, meta, title, image_url }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            social {
              twitterUsername
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const openGraph =
    image_url || 'https://guilhermerodz.me/assets/open-graph-image.jpg';

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: openGraph,
        },
        {
          property: 'og:title',
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: `@${site.siteMetadata.social.twitterUsername}`,
        },
        {
          property: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: openGraph,
        },
        {
          name: 'twitter:title',
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: 'pt-br',
  meta: [],
  description: '',
  image_url: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image_url: PropTypes.string,
};
