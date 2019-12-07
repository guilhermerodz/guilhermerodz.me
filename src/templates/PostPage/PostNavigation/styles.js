import styled from 'styled-components';
import media from 'styled-media-query';

import { Sizes } from '~/styles/constants';
import { Subtitle } from '~/styles/typography';

export const Container = styled.nav`
  ${media.greaterThan('small')`
    display: flex;
    justify-content: space-between;
  `}

  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin-top: ${Sizes.default};
  padding-top: ${Sizes.default};
`;

export const Wrapper = styled.div`
  display: block;

  ${media.lessThan('small')`
    &:not(:last-child) {
      margin-bottom: ${Sizes.default};
    }
  `}

  ${media.greaterThan('small')`
    max-width: calc(50% - ${Sizes.xs});
    width: 50%;
    > a {
      height: calc(100% - ${Sizes.default} - ${Sizes.sm});
    }

    &:first-child > a {
      border-top-right-radius: 5rem;
    }

    &:last-child > a {
      border-top-left-radius: 5rem;
    }
  `}
`;

export const Title = styled.h2`
  ${Subtitle.secondary}

  text-align: ${props => (props.right ? 'right' : 'left')};

  ${media.lessThan('small')`
    text-align: center;
  `}

  height: ${Sizes.default};

  margin-bottom: ${Sizes.sm};
`;
