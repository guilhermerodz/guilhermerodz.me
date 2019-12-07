import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import { Sizes, Color } from '~/styles/constants';
import { Link as LinkTypography } from '~/styles/typography';

export const Container = styled.nav`
  margin-bottom: ${Sizes.sm};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${Sizes.sm};
`;

export const LinkRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const Left = styled.h1`
  text-align: left;

  color: ${Color.secondary};
  opacity: 0.8;
`;

export const Link = styled(GatsbyLink)`
  ${LinkTypography.onlyLink(Color.secondary)}
  ${LinkTypography.onlyUnderline(Color.secondary)}

  max-width: fit-content;

  text-align: right;
`;
