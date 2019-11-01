import styled from 'styled-components';
import Image from 'gatsby-image';
import media from 'styled-media-query';

import { Sizes, Media } from '~/styles/constants';

export const Picture = styled(Image)`
  border-radius: 50%;

  height: ${Sizes.lg};
  width: ${Sizes.lg};

  ${media.lessThan(`${Media.xs}px`)`
  height: ${Sizes.md};
  width: ${Sizes.md};
  `}
`;
