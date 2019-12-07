import React from 'react';

import {
  Container,
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
}) {
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
