import styled from 'styled-components';
import { Link } from 'gatsby';
import { ArrowBack } from 'styled-icons/material';

import { Sizes, Color } from '~/styles/constants';
import {
  Link as LinkTypography,
  Title as TitleTypography,
  Subtitle,
} from '~/styles/typography';

export const Container = styled.header``;

export const GoBack = styled(Link)`
  ${LinkTypography.onlyUnderline(Color.pink)}
  ${LinkTypography.onlyLink(Color.pink)}

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
  ${LinkTypography.onlyLink(Color.pink)}

  margin-right: .4rem;

  height: 3rem;
  width: 3rem;
`;

export const Title = styled.h1.attrs({
  itemProp: 'name',
})`
  ${TitleTypography}

  margin: ${Sizes.sm} 0 ${Sizes.xs};
`;

export const Description = styled.div.attrs({
  itemProp: 'description',
})`
  ${Subtitle.primary}

  margin-bottom: ${Sizes.default};
`;

export const Author = styled.div.attrs({
  itemProp: 'author',
})`
  position: absolute;
  bottom: 200vh;
`;
