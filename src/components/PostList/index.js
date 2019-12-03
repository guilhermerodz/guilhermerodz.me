import React from 'react';

import PostCard from '~/components/PostCard';

import { Container } from './styles';

export default function PostList() {
  return (
    <>
      <div style={{ paddingTop: '4rem' }} />
      <Container>
        <PostCard video={null} />
        <PostCard />
        <PostCard video={null} />
      </Container>
      <div style={{ paddingTop: '4rem' }} />
    </>
  );
}
