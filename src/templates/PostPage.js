import React from 'react';

import Layout from '~/components/Layout';
import SEO from '~/components/SEO';

export default function PostPage({ pageContext }) {
  const { title, content } = pageContext;

  return (
    <Layout>
      <SEO title="Home" />

      <div>
        <h1>{title}</h1>

        <p>{content}</p>
      </div>
    </Layout>
  );
}
