'use client';

import type { PropsWithChildren } from 'react';
import { useState } from 'react';

import config from '@/lib/react-query/config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';

const ReactQueryContext = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient(config));
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQueryContext;
