import styled from 'styled-components';
import { Link } from 'gatsby';

import { Sizes, Color, Animation } from '~/styles/constants';
import { Heading } from '~/styles/typography';

export const Container = styled(Link)`
  text-decoration: none;

  display: flex;
  flex-direction: column;

  background: ${Color.support};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);

  transition: ${Animation.delay};

  & + a {
    margin-top: ${Sizes.default};
  }

  &:hover {
    border: 1px solid ${Color.pink};
  }
`;

export const Anchor = styled.div`
  margin-top: -6.8rem;

  position: absolute;
`;

export const Content = styled.div`
  padding: ${Sizes.default} ${Sizes.md} 0 ${Sizes.md};
`;

export const Title = styled.h1`
  ${Heading.secondary}

  margin: 1rem 0 2rem;
`;
