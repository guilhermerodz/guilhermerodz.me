import React from 'react';

import useResponsive from '~/hooks/useResponsive';
import Limiter from '~/components/Limiter';
import Avatar from '~/components/Avatar';

import { Container, Content, Brand, Heading, Code } from './styles';

export default function Header() {
  const { lessThanExtraSmall } = useResponsive();

  return (
    <Container>
      <Limiter>
        <Content to="/">
          <Brand>
            <Avatar />

            <Heading>
              <Code>{'<'}</Code>
              {lessThanExtraSmall ? 'Rodz' : 'Guilherme Rodz'}
              <Code>{'/>'}</Code>
            </Heading>
          </Brand>
        </Content>
      </Limiter>
    </Container>
  );
}
