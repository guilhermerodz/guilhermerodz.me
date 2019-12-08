/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby';

import Emoji from '~/components/Emoji';

import { Container, ExternalLink, HeaderEmoji, Dots, Picture, Merchan, YoutubeIcon } from './styles';

export default function Presentation({ full }) {
  const { site: { siteMetadata: { social }}, teamImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              twitterUrl
              youtubeUrl
            }
          }
        }
        teamImage: file(relativePath: { eq: "rsxp2019.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 600, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <Container>
      <div itemScope itemType="http://schema.org/Person">

      <h1>Fala Dev! <HeaderEmoji label="Foguete">🚀</HeaderEmoji></h1>

      <p>Sou <ExternalLink href={social.twitterUrl} itemProp="name">Guilherme Rodz</ExternalLink>, 18, <i><span itemProp="jobTitle">Software Engineer</span></i>. Comecei a programar com 13 anos. Acredito que a tecnologia é poderosa o suficiente para mudar a vida de todos nós.</p>
      <p>Sou criador de conteúdo. Trabalho na <ExternalLink href="https://rocketseat.com.br" itemProp="affiliation">Rocketseat</ExternalLink>. Fui mentor no Hackathon <i><span itemProp="organizer">RS/XP 2019</span></i>, com cerca de <b>mil desenvolvedores</b>
        {full ? '.' : (
          <Dots to="/sobre-mim">...</Dots>
        )}
      </p>

      {full && (
        <>
          <Picture
            fluid={teamImage.childImageSharp.fluid}
            alt="Time Rocketseat Experience 2019"
            aria-label="Time Rocketseat Experience 2019"
          />

          <p>Meu passado é marcado por <i>games</i>. Meu primeiro contato com programação foi com <b>Minecraft</b>. E não parou por aí. Saí vagando pelo desenvolvimento de <i>games, apps</i> e <i>bots</i> até finalmente tocar na <b>web</b>. </p>
          <p>Sonho em viver feliz <b>por ser quem sou</b>. Não há nada mais gratificante que notar o impacto positivo que causei na vida de alguém.</p>
          <p>No tempo livre continuo estudando <b>novas tecnologias</b> e me divirto aprendendo. Amo jogar; existe um "pedaço de <i>streamer</i>" em mim.</p>
          <p>Por fim, sou competitivo e busco evoluir o mais rápido no menor tempo possível. <Emoji label="Relâmpago">⚡</Emoji></p>

          <p>Nos próximos anos, pretendo produzir <b>muito conteúdo</b> para os desenvolvedores.</p>
        </>
      )}
      </div>

      <Merchan itemProp="owner" href={social.youtubeUrl}>
        <YoutubeIcon />
        <span>acessar conteúdo <HeaderEmoji label="Foguete">🚀</HeaderEmoji></span>
      </Merchan>
    </Container>
  )
}

Presentation.defaultProps = {
  full: false,
}

Presentation.propTypes = {
  full: PropTypes.bool,
}
