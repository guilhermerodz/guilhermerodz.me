import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Picture } from './styles';

export default function Avatar() {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 48, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <Picture
      fluid={image.childImageSharp.fluid}
      alt="Guilherme Rodz"
      aria-label="Guilherme Rodz"
    />
  );
}
