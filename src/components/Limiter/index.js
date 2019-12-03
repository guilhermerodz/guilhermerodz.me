import styled from 'styled-components';
import media from 'styled-media-query';

import { Widths, Sizes } from '~/styles/constants';

export default styled.div`
  margin: 0 auto;
  max-width: ${Widths.lg};
  padding: 0 ${Sizes.sm};

  ${media.greaterThan('medium')`
    padding: 0 ${Sizes.default};
  `}
`;
