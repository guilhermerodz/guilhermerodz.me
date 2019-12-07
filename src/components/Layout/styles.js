import styled from 'styled-components';
import media from 'styled-media-query';

import { Color, Heights, Sizes, Media, Widths } from '~/styles/constants';

export const Page = styled.section`
  display: block;

  background-color: ${Color.background};
`;

export const Body = styled.main`
  min-height: 100vh;
  width: 100%;

  margin: ${Heights.headerLg} 0 ${Heights.footer};

  padding: ${Heights.topContentPadding} 0 ${Heights.botContentPadding};

  ${media.lessThan(`${Media.xs}px`)`
    margin-top: ${Heights.headerSm};
  `}
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${Widths.lg};
`;
