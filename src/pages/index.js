import React from 'react';

import Layout from '~/components/Layout';
import SEO from '~/components/SEO';
import Grid from '~/components/Grid';
import PostList from '~/components/PostList';

export default function HomePage() {
  return (
    <Layout>
      <SEO title="Home" />

      <Grid>
        <PostList />
      </Grid>
    </Layout>
  );
}
