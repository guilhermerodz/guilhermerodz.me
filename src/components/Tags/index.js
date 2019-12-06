import React from 'react';
import PropTypes from 'prop-types';

import { Container, LinkedTag, Tag } from './styles';

export default function Tags({ tags, simple, redirect }) {
  const simpleFix = simple ? simple.toString() : null;

  return (
    <Container>
      {tags.map(tag =>
        redirect ? (
          <LinkedTag simple={simpleFix} to={`/posts?query=${tag}`} key={tag}>
            {tag}
          </LinkedTag>
        ) : (
          <Tag simple={simpleFix} key={tag}>
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
