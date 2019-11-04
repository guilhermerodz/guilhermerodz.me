import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import GlobalStyles from '~/styles/global';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

import { Page, Body, Container } from './styles';

export default function Layout({ children }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `);

  return (
    <Page>
      <GlobalStyles />

      <Header />

      <Body>
        <Container>{children}</Container>
      </Body>

      <Footer />
    </Page>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
