import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import PropTypes from 'prop-types';

import { Container, LinkedTag, Tag } from './styles';

const trackClick = item =>
  trackCustomEvent({
    category: 'Tag',
    action: 'click',
    label: `Tag - ${item}`,
  });

export default function Tags({ tags, simple, redirect }) {
  const simpleFix = simple ? simple.toString() : null;

  return (
    <Container>
      {tags.map(tag =>
        redirect ? (
          <LinkedTag
            simple={simpleFix}
            to={`/posts?query=${tag}`}
            key={tag}
            onClick={() => trackClick(tag)}
          >
            {tag}
          </LinkedTag>
        ) : (
          <Tag simple={simpleFix} key={tag} onClick={() => trackClick(tag)}>
            {tag}
          </Tag>
        )
      )}
    </Container>
  );
}

Tags.defaultProps = {
  simple: false,
  redirect: false,
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  simple: PropTypes.bool,
  redirect: PropTypes.bool,
};
