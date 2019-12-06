import styled from 'styled-components';
import { Twitter, Github, Twitch, LinkedinIn } from 'styled-icons/fa-brands';

import {
  StackOrder,
  Sizes,
  Heights,
  Color,
  Animation,
} from '~/styles/constants';

export const Container = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: ${StackOrder.footer};

  width: 100%;

  height: ${Heights.footer};
  padding: 0 ${Sizes.default};

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Color.darker};
  border-top: 1px solid ${Color.border};

  > div {
    display: flex;
  }
`;

export const Link = styled.a.attrs({
  /**
   * https://developers.google.com/web/tools/lighthouse/audits/noopener?hl=pt-br
   */
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  display: flex;
  align-items: center;

  padding: 0 ${Sizes.sm};
  height: ${Heights.footer};

  color: ${Color.primary};
  transition: color ${Animation.delay};

  &:focus,
  &:hover {
    color: ${Color.highlight};
  }
`;

const generateIcon = icon => styled(icon)`
  height: 2rem;
  width: 2rem;
`;

export const TwitterIcon = generateIcon(Twitter);
export const GithubIcon = generateIcon(Github);
export const TwitchIcon = generateIcon(Twitch);
export const LinkedinIcon = generateIcon(LinkedinIn);
