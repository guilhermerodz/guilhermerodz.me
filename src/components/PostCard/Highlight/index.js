/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { connectHighlight } from 'react-instantsearch-dom';

function Highlight({
  // HOC Props
  highlight,
  // Props
  attribute,
  hit,
}) {
  const parsedTitle = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  return (
    <>
      {parsedTitle.map((part, index) =>
        part.isHighlighted ? <span key={index}>{part.value}</span> : part.value
      )}
    </>
  );
}

Highlight.propTypes = {
  highlight: PropTypes.func.isRequired,
  attribute: PropTypes.string.isRequired,
  hit: PropTypes.object.isRequired,
};

export default connectHighlight(Highlight);
