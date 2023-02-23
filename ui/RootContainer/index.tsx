import { theme } from '@/styles/theme';
import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  max-width: ${theme.deviceSizes.maxSize}px;
  margin: auto;
`;

const RootContainer: React.FC<Props> = ({ children }) => (
  <Container>{children}</Container>
);

export default RootContainer;
