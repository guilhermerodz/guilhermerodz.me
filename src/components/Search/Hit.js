import React from 'react';
import PropTypes from 'prop-types';

import PostCard from '~/components/PostCard';

export default function Hit({ hit }) {
  return (
    <PostCard
      slug={hit.fields.slug}
      date={hit.frontmatter.date}
      title={hit.frontmatter.title}
      description={hit.frontmatter.description}
      tags={hit.frontmatter.tags}
      readTime={hit.timeToRead}
    />
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};
