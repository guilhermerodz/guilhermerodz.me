import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import {
  Container,
  LinkedSection,
  Section,
  Title,
  Social,
  Link,
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
} from './styles';

export default function PostFooter({ fileName, slug }) {
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
          }
        }
      }
    }
  `);

  const editUrl = `https://github.com/guilhermerodz/guilhermerodz.me/edit/master/content/posts/${fileName}.md`;
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://guilhermerodz.me/${slug}`
  )}`;

  return (
    <Container>
      <LinkedSection href={editUrl}>
        <Title>Encontrou uma falha no texto?</Title>

        <p>
          Podes <span>alterar diretamente no GitHub</span>!
        </p>
        <p>Depois é só abrir uma (PR) Pull Request.</p>
      </LinkedSection>

      <LinkedSection href={discussUrl}>
        <Title>Comentários</Title>

        <p>
          Acompanhe a <span>discussão diretamente no Twitter</span>.
        </p>
      </LinkedSection>

      <Section>
        <Title>Vamos conectar!</Title>

        <Social>
          <Link href={social.twitterUrl} title="Twitter">
            <TwitterIcon />
          </Link>
          <Link href={social.githubUrl} title="GitHub">
            <GithubIcon />
          </Link>
          <Link href={social.linkedinUrl} title="LinkedIn">
            <LinkedinIcon />
          </Link>
        </Social>
      </Section>
    </Container>
  );
}

PostFooter.propTypes = {
  slug: PropTypes.string.isRequired,
};
