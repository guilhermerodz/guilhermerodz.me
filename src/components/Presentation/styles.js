import styled from 'styled-components';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { Youtube } from 'styled-icons/fa-brands';

import { Color, Sizes } from '~/styles/constants';
import { Link as LinkTypography } from '~/styles/typography';

import Content from '~/components/Content';

export const Container = styled(Content)`
  a::after {
    margin-top: -0.2rem;
    height: 1px;
  }
`;

export const ExternalLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  &::after {
    margin-top: -0.2rem !important;
  }
`;

export const Emoji = styled.span.attrs(props => ({
  className: 'small',
  role: 'img',
  'aria-label': props.label,
}))``;

export const HeaderEmoji = styled(Emoji)`
  margin-left: 0.5rem;
`;

export const Dots = styled(Link)`
  margin-left: 0.5rem;
  padding: 0 0.3rem 0.2rem;

  background: ${Color.darker};
  border-radius: 0.7rem;
`;

export const Picture = styled(Image)`
  width: 100%;

  border-radius: 5%;

  margin-bottom: ${Sizes.default};
`;

export const Merchan = styled(ExternalLink).attrs({
  className: 'reset__styles',
})`
  ${LinkTypography.onlyLink(Color.green)}
  ${LinkTypography.onlyUnderline(Color.green)}

  margin-top: ${Sizes.default};

  max-width: fit-content;
  display: flex;

  align-items: center;

  &::after {
    margin-top: 2rem !important;
    height: 2px !important;
  }
`;

export const YoutubeIcon = styled(Youtube)`
  height: 4rem;
  width: 4rem;

  margin-right: 1rem;
`;
