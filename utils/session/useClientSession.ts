'use client';

import type { UseSessionOptions } from 'next-auth/react';
import { useSession } from 'next-auth/react';

export const useClientSession = <R extends boolean = false>(
  options?: UseSessionOptions<R>
) => {
  const { data, status, update } = useSession(options);
  const session = data;

  return {
    session,
    status,
    update,
  };
};
