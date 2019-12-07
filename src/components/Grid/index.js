import React from 'react';

import { Container } from './styles';

import Limiter from '~/components/Limiter';

export default function Grid({ children, ...props }) {
  return (
    <Container {...props}>
      <Limiter>{children}</Limiter>
    </Container>
  );
}
