import React from 'react';

import { Container } from './styles';

export default function Limiter({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
