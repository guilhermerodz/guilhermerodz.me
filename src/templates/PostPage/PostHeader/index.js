import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import GoBack from '~/components/GoBack';
import Timing from '~/components/Timing';
import Tags from '~/components/Tags';

import { Container, Title, Description, Author } from './styles';

export default function PostHeader({
  date,
  rawDate,
  readTime,
  title,
  description,
  tags,
}) {
  const goBackURL = useMemo(() => {
    if (
      typeof window !== 'undefined' &&
      window &&
      window.history &&
      window.history.state
    ) {
      const { previousPath, elementId } = window.history.state;

      if (elementId) return `${previousPath}#${elementId}`;
    }

    return '/posts/';
  }, []);

  return (
    <Container>
      <GoBack to={goBackURL} />

      <Timing>
        <span itemProp="datePublished" content={rawDate}>
          {date}
        </span>
        {readTime && <span> · leitura de {readTime} min</span>}
      </Timing>

      <Title>{title}</Title>
      <Description>{description}</Description>
      <Author>Guilherme Rodz</Author>
      <Tags tags={tags} simple redirect />
    </Container>
  );
}

PostHeader.propTypes = {
  date: PropTypes.string.isRequired,
  rawDate: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
