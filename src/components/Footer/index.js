import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import {
  Container,
  Link,
  TwitterIcon,
  GithubIcon,
  TwitchIcon,
  LinkedinIcon,
} from './styles';

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
        <Link href={social.twitterUrl} title="Twitter">
          <TwitterIcon />
        </Link>
        <Link href={social.githubUrl} title="GitHub">
          <GithubIcon />
        </Link>
        <Link href={social.twitchUrl} title="Twitch.tv">
          <TwitchIcon />
        </Link>
        <Link href={social.linkedinUrl} title="LinkedIn">
          <LinkedinIcon />
        </Link>
      </div>
    </Container>
  );
}
