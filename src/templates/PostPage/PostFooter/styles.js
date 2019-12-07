import styled, { css } from 'styled-components';
import { Twitter, Github, LinkedinIn } from 'styled-icons/fa-brands';

import { Sizes, Heights, Color, Animation } from '~/styles/constants';
import { Text, Subtitle } from '~/styles/typography';

export const Container = styled.div`
  ${Text.primary}

  padding-top: ${Sizes.md};
  text-align: center;
`;

const SectionStyle = css`
  padding: 2rem;

  color: rgba(255, 255, 255, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${Sizes.md} ${Sizes.sm};

  border-top: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 5vw;

  transition: background 0.1s ease-in;

  span {
    color: ${Color.green};
  }
`;

export const LinkedSection = styled.a.attrs({
  /**
   * https://developers.google.com/web/tools/lighthouse/audits/noopener?hl=pt-br
   */
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  ${SectionStyle}

  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.13);
  }
`;

export const Section = styled.div`
  ${SectionStyle}
`;

export const Title = styled.h2`
  ${Subtitle.primary}

  margin-bottom: ${Sizes.sm};
`;

export const Social = styled.div`
  display: flex;
`;

export const Link = styled.a.attrs({
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
    color: ${Color.green};
  }
`;

const generateIcon = icon => styled(icon)`
  height: 2rem;
  width: 2rem;
`;

export const TwitterIcon = generateIcon(Twitter);
export const GithubIcon = generateIcon(Github);
export const LinkedinIcon = generateIcon(LinkedinIn);
