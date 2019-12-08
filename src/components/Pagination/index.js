import React from 'react';
import PropTypes from 'prop-types';

import {
  TopContainer,
  BottomContainer,
  ArrowBackIcon,
  ArrowForwardIcon,
  NavigateLink,
  DisabledLink,
} from './styles';

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
        <NavigateLink reverse rel="prev" to={previousPage}>
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
        <NavigateLink rel="next" to={nextPage}>
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
