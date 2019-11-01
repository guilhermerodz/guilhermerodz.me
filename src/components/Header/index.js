import React from 'react';

import useResponsive from '~/hooks/useResponsive';
import Limiter from '~/components/Limiter';
import Avatar from '~/components/Avatar';

import { Container, Content, Brand, Heading } from './styles';

export default function Header() {
  const { lessThanExtraSmall } = useResponsive();

  return (
    <Container>
      <Limiter>
        <Content>
          <Brand>
            <Avatar />

            <Heading>{lessThanExtraSmall ? 'Rodz' : 'Guilherme Rodz'}</Heading>
          </Brand>
        </Content>
      </Limiter>
    </Container>
  );
}
