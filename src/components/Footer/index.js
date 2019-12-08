import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { useStaticQuery, graphql } from 'gatsby';

import {
  Container,
  Link,
  TwitterIcon,
  GithubIcon,
  TwitchIcon,
  LinkedinIcon,
} from './styles';

const trackClick = item =>
  trackCustomEvent({
    category: 'Social',
    action: 'click',
    label: `Social - ${item}`,
  });

export default function Footer() {
  const {
    site: {
      siteMetadata: { social },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            twitterUrl
            githubUrl
            linkedinUrl
            twitchUrl
          }
        }
      }
    }
  `);

  return (
    <Container>
      <div>
        <Link
          href={social.twitterUrl}
          title="Twitter"
          onClick={() => trackClick('Twitter')}
        >
          <TwitterIcon />
        </Link>
        <Link
          href={social.githubUrl}
          title="GitHub"
          onClick={() => trackClick('GitHub')}
        >
          <GithubIcon />
        </Link>
        <Link
          href={social.twitchUrl}
          title="Twitch.tv"
          onClick={() => trackClick('Twitch.tv')}
        >
          <TwitchIcon />
        </Link>
        <Link
          href={social.linkedinUrl}
          title="LinkedIn"
          onClick={() => trackClick('LinkedIn')}
        >
          <LinkedinIcon />
        </Link>
      </div>
    </Container>
  );
}
