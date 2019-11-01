import React from 'react';

import Layout from '~/components/Layout';

export default function PostPage({ pageContext }) {
  const { title, content } = pageContext;

  return (
    <Layout>
      <h1>{title}</h1>

      <p>{content}</p>
    </Layout>
  );
}
