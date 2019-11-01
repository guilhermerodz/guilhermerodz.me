import styled from 'styled-components';
import media from 'styled-media-query';

import { Color, Heights, Media, Sizes } from '~/styles/constants';

export const Page = styled.section`
  display: block;

  background-color: ${Color.background};
`;

export const Body = styled.main`
  min-height: 100vh;
  width: 100%;

  margin-top: ${Heights.headerLg};
  margin-bottom: ${Heights.footer};

  ${media.lessThan(`${Media.xs}px`)`
    margin-top: ${Heights.headerSm};
  `}
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${Sizes.lg};
`;
