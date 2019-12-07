import styled from 'styled-components';
import { Link } from 'gatsby';
import { ArrowBack } from 'styled-icons/material';

import { Sizes, Color } from '~/styles/constants';
import { Link as LinkTypography } from '~/styles/typography';

export const Container = styled(Link)`
  ${props => LinkTypography.onlyUnderline(props.color || Color.pink)}
  ${props => LinkTypography.onlyLink(props.color || Color.pink)}

  display: flex;
  align-items: center;
  justify-content: center;

  max-width: min-content;
  margin-bottom: ${Sizes.default};

  font-size: 13px;

  &::after {
    margin-top: 1.8rem;
  }
`;

export const GoBackIcon = styled(ArrowBack)`
  ${props => LinkTypography.onlyLink(props.color || Color.pink)}

  margin-right: .4rem;

  height: 3rem;
  width: 3rem;
`;
