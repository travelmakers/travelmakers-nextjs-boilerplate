import config from '@/lib/react-query/config';
import {
  Query,
  QueryClient,
  QueryFunction,
  QueryKey,
  dehydrate,
} from '@tanstack/query-core';
import React, { cache } from 'react';

import HydrateOnClient from './HydrateOnClient';

function withHydration<P>(WrappedComponent: React.ComponentType<P>) {
  return async (prefetch: { key: QueryKey; func: QueryFunction }[]) => {
    const getQueryClient = cache(() => new QueryClient(config));
    const queryClient = getQueryClient();
    await Promise.all(
      prefetch.map(query => queryClient.prefetchQuery(query.key, query.func))
    );

    const prefetchKeys = prefetch.map(query => query.key);
    const dehydratedState = dehydrate(queryClient, {
      dehydrateMutations: false,
      shouldDehydrateQuery: (query: Query) =>
        prefetchKeys.includes(query.queryKey),
    });

    // eslint-disable-next-line react/require-default-props
    return (props: P & { children?: React.ReactNode; name?: string }) => (
      <HydrateOnClient dehydratedState={dehydratedState}>
        <WrappedComponent {...props} />
      </HydrateOnClient>
    );
  };
}

export default withHydration;
