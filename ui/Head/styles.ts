'use client';

import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const HeadBox = styled.div`
  width: 100%;
  margin: auto;
  max-width: ${theme.deviceSizes.maxSize}px;
  padding: 16px 0px;
  & > div {
    height: 40px;
    display: flex;
    align-items: center;
  }
`;

export const Container = styled(HeadBox)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
