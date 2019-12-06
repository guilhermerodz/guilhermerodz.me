import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { navigate } from '@reach/router';

import Timing from '~/components/Timing';
import Tags from '~/components/Tags';

import {
  Container,
  GoBack,
  GoBackWrapper,
  GoBackSEO,
  GoBackIcon,
  Title,
  Description,
  Author,
} from './styles';

export default function PostHeader({
  date,
  rawDate,
  readTime,
  title,
  description,
  tags,
}) {
  function handleGoBack() {
    if (window && window.history) {
      if (window.history.state) {
        const { previousPath } = window.history.state;

        if (previousPath) {
          navigate(previousPath);
          return;
        }
      }

      navigate('/posts');
    }
  }

  return (
    <Container>
      <GoBack onClick={handleGoBack}>
        <GoBackWrapper>
          <GoBackIcon />
          <GoBackSEO rel="prev" to="/posts/" onClick={e => e.preventDefault()}>
            Voltar
          </GoBackSEO>
        </GoBackWrapper>
      </GoBack>

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
