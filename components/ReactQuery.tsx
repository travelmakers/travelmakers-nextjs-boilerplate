'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

type Props = {
  children: ReactNode;
};

const queryClient = new QueryClient();

const ReactQuery = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default ReactQuery;
