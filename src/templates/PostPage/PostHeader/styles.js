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

export const GoBack = styled.button`
  ${LinkTypography.onlyUnderline(Color.pink)}

  max-width: min-content;
  margin: ${Sizes.default} 0;

  cursor: pointer;

  border: 0;
  background: 0;
  outline: 0;
`;

export const GoBackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GoBackSEO = styled(Link)`
  ${LinkTypography.onlyLink(Color.pink)}
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
