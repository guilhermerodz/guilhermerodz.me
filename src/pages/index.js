import React from 'react';

import Layout from '~/components/Layout';
import SEO from '~/components/SEO';

export default function HomePage() {
  return (
    <Layout>
      <SEO title="Home" />

      <h1>Welcome to my Home Page!</h1>
    </Layout>
  );
}
