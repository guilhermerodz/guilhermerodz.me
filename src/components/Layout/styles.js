import styled from 'styled-components';

import { Sizes } from '~/styles/constants';

export const Page = styled.section`
  display: block;
`;

export const Body = styled.main`
  min-height: 100vh;
  width: 100%;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${Sizes.lg};
`;
