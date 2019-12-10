import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import PropTypes from 'prop-types';

import {
  Container,
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
}) {
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

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  previousPage: PropTypes.string.isRequired,
  nextPage: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
};
