import React from 'react';
import PropTypes from 'prop-types';

import { Container, GoBackIcon } from './styles';

export default function GoBack({ to, color, ...rest }) {
  return (
    <Container color={color} rel="prev" {...rest} to={to}>
      <GoBackIcon color={color} />
      Voltar
    </Container>
  );
}

GoBack.defaultProps = {
  color: undefined,
};

GoBack.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string.isRequired,
};
