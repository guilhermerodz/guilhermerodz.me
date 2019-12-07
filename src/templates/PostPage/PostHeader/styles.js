import styled from 'styled-components';

import { Sizes } from '~/styles/constants';
import { Title as TitleTypography, Subtitle } from '~/styles/typography';

export const Container = styled.header``;

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
