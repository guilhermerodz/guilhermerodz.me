import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import PropTypes from 'prop-types';

import {
  TopContainer,
  BottomContainer,
  ArrowBackIcon,
  ArrowForwardIcon,
  NavigateLink,
  DisabledLink,
} from './styles';

const trackClick = item =>
  trackCustomEvent({
    category: 'Pagination',
    action: 'click',
    label: `Pagination - Go to page ${item}`,
  });

export default function Pagination({
  isFirst,
  isLast,
  previousPage,
  nextPage,
  currentPage,
  numPages,
  // Style props,
  top,
}) {
  const Container = top ? TopContainer : BottomContainer;

  return (
    <Container>
      {!isFirst ? (
        <NavigateLink
          reverse
          rel="prev"
          to={previousPage}
          onClick={() => trackClick(`previous page ${previousPage}`)}
        >
          <ArrowBackIcon />
          Mais recentes
        </NavigateLink>
      ) : (
        <DisabledLink>
          <ArrowBackIcon />
          Mais recentes
        </DisabledLink>
      )}

      <span>
        {currentPage} <span>de</span> {numPages}
      </span>

      {!isLast ? (
        <NavigateLink
          rel="next"
          to={nextPage}
          onClick={() => trackClick(`next page ${nextPage}`)}
        >
          Mais antigos
          <ArrowForwardIcon />
        </NavigateLink>
      ) : (
        <DisabledLink>
          Mais antigos
          <ArrowForwardIcon />
        </DisabledLink>
      )}
    </Container>
  );
}

Pagination.defaultProps = {
  top: false,
};

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  previousPage: PropTypes.number.isRequired,
  nextPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  top: PropTypes.bool,
};
