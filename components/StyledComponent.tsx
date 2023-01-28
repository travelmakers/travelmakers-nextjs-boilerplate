'use client';

import GlobalStyle from '@/styles/global-styles';
import { theme } from '@/styles/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledComponent: React.FC<Props> = ({ children }) => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </div>
);

export default StyledComponent;
