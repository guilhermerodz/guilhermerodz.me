import styled from 'styled-components';
import media from 'styled-media-query';

import { Widths, Sizes } from '~/styles/constants';

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${Widths.lg};
  padding-left: ${Sizes.sm};
  padding-right: ${Sizes.sm};

  ${media.greaterThan('medium')`
    padding-left: ${Sizes.default};
    padding-right: ${Sizes.default};
  `}
`;
